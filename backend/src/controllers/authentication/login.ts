// src/controllers/authentication/login.ts
import { Response, NextFunction } from 'express';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../../config/env';
import prisma from '../../config/prismaClient';
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from '../../middlewares/error-handler';
import { assertEnv } from '../../config/env';
import { CookieManager } from '../../utils/CookieManager';
import {
  ILoginRequest,
  ITokenPayload,
  IRefreshTokenPayload,
} from 'types/auth.types';

const login = asyncHandler(
  async (
    req: ILoginRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { password, phone } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          phone,
        },
      });

      if (!user) {
        throw new NotFoundError('Invalid credentials');
      }

      if (!password || (user && !user.password)) {
        throw new Error('Password or hash missing');
      }

      const isPasswordValid = await compare(password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedError('Invalid credentials');
      }

      const accessToken = jwt.sign(
        { id: user.id, role: user.role } as ITokenPayload,
        assertEnv(ENV.ACCESS_TOKEN_SECRET, 'ACCESS_TOKEN_SECRET'),
        {
          expiresIn: '7d',
        }
      );

      const refreshToken = jwt.sign(
        { id: user.id, role: user.role } as IRefreshTokenPayload,
        assertEnv(ENV.REFRESH_TOKEN_SECRET, 'REFRESH_TOKEN_SECRET'),
        {
          expiresIn: '15m',
        }
      );

      CookieManager.clearAllTokens(res);
      CookieManager.setAccessToken(res, accessToken);
      CookieManager.setRefreshToken(res, refreshToken);

      const { password: userPassWord, ...userWithoutPassword } = user;

      res.json({ message: 'Login successful', user: userWithoutPassword });
    } catch (error) {
      next(error);
    }
  }
);

export default login;
