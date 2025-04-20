import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../../config/prismaClient.js';
import multerUpload from '@config/multer.js';
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
 * Registers a new user with the provided details
 * @param req - Express request object containing user registration data
 * @param res - Express response object
 * @param next - Express next function for error handling
 */
const registerUser = async (
  req: Request<{}, {}, IUserRegistrationInput>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  multerUpload.single('profilePicture');
  const { ...userDetails } = req.body;
  const profilePicture = req.file?.filename;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(
      userDetails.password,
      BCRYPT_SALT_ROUNDS
    );

    // Prepare user creation data
    const userCreationData: IUserCreationData = {
      ...userDetails,
      profilePicture,
      password: hashedPassword,
    };

    // Create the new user
    const user = await prisma.user.create({
      data: userCreationData,
    });

    // Exclude password from response
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

export default registerUser;
