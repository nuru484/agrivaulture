// src/controllers/authentication/register.ts
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import prisma from "../../config/prismaClient";
import validationMiddleware from "../../middlewares/validation";
import { registerValidation } from "../../validations/authValidations/register-validation";
import {
  IUserRegistrationInput,
  IUserResponseData,
} from "types/user-profile.types.js";
import { HTTP_STATUS_CODES, BCRYPT_SALT_ROUNDS } from "../../config/constants";

export const handleRegisterUser = async (
  req: Request<{}, {}, IUserRegistrationInput>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userDetails = req.body;
  try {
    const hashedPassword = await bcrypt.hash(
      userDetails.password,
      BCRYPT_SALT_ROUNDS
    );

    // Prepare user creation data
    const userCreationData: IUserRegistrationInput = {
      ...userDetails,
      password: hashedPassword,
    };

    const user = await prisma.user.create({
      data: userCreationData,
    });

    const { password, ...userWithoutPassword } = user;

    // Send response
    res.status(HTTP_STATUS_CODES.CREATED).json({
      message: "Registration successful.",
      data: userWithoutPassword as IUserResponseData,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Middleware array for user registration
 */
const registerUser = [
  validationMiddleware.create(registerValidation),
  handleRegisterUser,
] as const;

export { registerUser };
