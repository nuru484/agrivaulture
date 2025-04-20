import { Request, Response, NextFunction } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import ENV from '../../config/env.js';
import { verifyToken } from './authenticate-jwt.js';
import { CustomError, asyncHandler } from '@middlewares/error-handler.js';
import { IUserProfile } from 'types/user-profile.js';
import { assertEnv } from '../../config/env.js';

// Define request with user property
interface AuthRequest extends Request {
  user?: IUserProfile;
}

/**
 * Refreshes access token using a valid refresh token
 * @param req - Express request object with user and cookies
 * @param res - Express response object
 * @param next - Express next function
 */
const refreshToken = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    // Get refresh token from cookies
    const currentRefreshToken = req.cookies.refreshToken;

    if (!currentRefreshToken) {
      throw new CustomError(401, 'No refresh token provided');
    }

    // Verify token and decode user
    let decodedUser: IUserProfile;
    try {
      decodedUser = await verifyToken<IUserProfile>(
        currentRefreshToken,
        assertEnv(ENV.REFRESH_TOKEN_SECRET, 'REFRESH_TOKEN_SECRET')
      );
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new CustomError(
          401,
          'Refresh token expired. Please log in again.'
        );
      }
      throw new CustomError(401, 'Invalid refresh token');
    }

    // Check if the decoded user matches the request user
    if (!req.user || decodedUser.id !== req.user.id) {
      throw new CustomError(401, 'User identity mismatch');
    }

    // Generate new refresh token
    const newRefreshToken = jwt.sign(
      { userId: decodedUser.id },
      assertEnv(ENV.REFRESH_TOKEN_SECRET, 'REFRESH_TOKEN_SECRET'),
      { expiresIn: '7d' }
    );

    // Generate new access token
    const newAccessToken = jwt.sign(
      {
        id: decodedUser.id,
        role: decodedUser.role,
        username: decodedUser.username,
      },
      assertEnv(ENV.ACCESS_TOKEN_SECRET, 'ACCESS_TOKEN_SECRET'),
      { expiresIn: '15m' }
    );

    // Set cookies with new tokens
    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: ENV.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send tokens in response
    res.status(200).json({
      success: true,
      accessToken: newAccessToken,
    });
  }
);

export default refreshToken;
