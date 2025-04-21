import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CustomError } from '@middlewares/error-handler';
import ENV from '@config/env';
import prisma from '@config/prismaClient';

import { assertEnv } from '@config/env';

interface LoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

interface TokenPayload {
  id: number;
  role: string;
}

interface RefreshTokenPayload {
  userId: number;
}

interface ENV {
  ACCESS_TOKEN_SECRET: string;
  REFRESH_TOKEN_SECRET: string;
}

type AsyncHandler = (
  req: LoginRequest,
  res: Response,
  next: NextFunction
) => Promise<void>;

const asyncHandler =
  (fn: AsyncHandler) =>
  (req: LoginRequest, res: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };

const login: AsyncHandler = asyncHandler(async function (
  req: LoginRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new CustomError(404, 'User not found');
    }

    if (!password || (user && !user.password)) {
      throw new Error('Password or hash missing');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new CustomError(401, 'Invalid credentials');
    }

    const accessToken = jwt.sign(
      { id: Number(user.id), role: user.role } as TokenPayload,
      assertEnv(ENV.ACCESS_TOKEN_SECRET, 'ACCESS_TOKEN_SECRET'),
      {
        expiresIn: '15m',
      }
    );

    const refreshToken = jwt.sign(
      { userId: Number(user.id) } as RefreshTokenPayload,
      assertEnv(ENV.REFRESH_TOKEN_SECRET, 'REFRESH_TOKEN_SECRET'),
      {
        expiresIn: '7d',
      }
    );

    res.json({ message: 'Login successful', accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
});

export default login;
