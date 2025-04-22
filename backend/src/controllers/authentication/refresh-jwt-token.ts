// src/controllers/authentication/refreshJwtToken.ts

import { Request, Response, NextFunction } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import ENV from '../../config/env';
import { verifyJwtToken } from '../../utils/verify-jwt-token';
import {
  CustomError,
  UnauthorizedError,
  asyncHandler,
} from '../../middlewares/error-handler';
import { IUserProfile } from 'types/user-profile.types';
import { assertEnv } from '../../config/env';
import { CookieManager } from '../../utils/CookieManager';
import { userInfo } from 'os';

/**
 * Refreshes access token using a valid refresh token
 * @param req - Express request object with user and cookies
 * @param res - Express response object
 * @param next - Express next function
 */
const refreshToken: (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Get refresh token from cookies
    const currentRefreshToken = CookieManager.getRefreshToken(req);

    if (!currentRefreshToken) {
      throw new UnauthorizedError('Unauthorised, no refresh token provided', {
        layer: 'refreshToken',
      });
    }

    // Verify token and decode user
    let decodedUser: IUserProfile;
    try {
      decodedUser = await verifyJwtToken<IUserProfile>(
        currentRefreshToken,
        assertEnv(ENV.REFRESH_TOKEN_SECRET, 'REFRESH_TOKEN_SECRET')
      );
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new UnauthorizedError(
          'Unauthorised, refresh token expired. Please log in again.',
          {
            layer: 'refreshToken',
          }
        );
      }
      throw new CustomError(401, 'Invalid refresh token');
    }

    console.log(`Decoded user: ${JSON.stringify(decodedUser)}`);

    // Check if the decoded user matches the request user
    if (!req.user || decodedUser.id !== req.user.id) {
      console.log(`Decoded user ID: ${decodedUser?.id}`);
      console.log(`Request user ID: ${req.user?.id}`);
      throw new UnauthorizedError('Unauthorised, user identity mismatch');
    }

    // Generate new refresh token
    const newRefreshToken = jwt.sign(
      { id: decodedUser.id, role: decodedUser.role },
      assertEnv(ENV.REFRESH_TOKEN_SECRET, 'REFRESH_TOKEN_SECRET'),
      { expiresIn: '7d' }
    );

    // Generate new access token
    const newAccessToken = jwt.sign(
      {
        id: decodedUser.id,
        role: decodedUser.id,
      },
      assertEnv(ENV.ACCESS_TOKEN_SECRET, 'ACCESS_TOKEN_SECRET'),
      { expiresIn: '15m' }
    );

    CookieManager.setAccessToken(res, newAccessToken);
    CookieManager.setAccessToken(res, newRefreshToken);

    // Send tokens in response
    res.status(200).json({
      success: true,
      message: 'Token refreshed',
    });
  }
);

export default refreshToken;
