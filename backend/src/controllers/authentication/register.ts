import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../../config/prismaClient';
import multerUpload from '../../config/multer';
import validationMiddleware from '../../middlewares/validation-middleware';
import { registerValidation } from '../../validations/authValidations/register-validation';
import { handleCloudinaryUpload } from '../../middlewares/handleCloudinaryUpload';
import {
  IUserRegistrationInput,
  IUserCreationData,
  IUserResponseData,
} from 'types/user-profile.js';

// Constants for configuration
const BCRYPT_SALT_ROUNDS = 10;
const HTTP_STATUS = {
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

/**
 * Controller function for user registration
 */
const handleRegisterUser = async (
  req: Request<{}, {}, IUserRegistrationInput>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { confirmPassword, ...userDetails } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(
      userDetails.password,
      BCRYPT_SALT_ROUNDS
    );

    // Prepare user creation data
    const userCreationData: IUserCreationData = {
      ...userDetails,
      password: hashedPassword,
    };

    const user = await prisma.user.create({
      data: userCreationData,
    });

    const { password, ...userWithoutPassword } = user;

    // Send response
    res.status(HTTP_STATUS.CREATED).json({
      message: 'Registration successful.',
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
  multerUpload.single('profilePicture'),
  validationMiddleware.create(registerValidation),
  handleCloudinaryUpload({ folder: 'User Profiles' }, 'profilePicture'),
  handleRegisterUser,
] as const;

export { registerUser };
