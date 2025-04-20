import { Request, Response, NextFunction } from 'express';
import jwt, {
  TokenExpiredError,
  JsonWebTokenError,
  VerifyErrors,
} from 'jsonwebtoken';
import ENV from '../../config/env.js';
import { asyncHandler } from '@middlewares/error-handler.js';
import { IUserProfile } from 'types/user-profile.js';
import { assertEnv } from '../../config/env.js';

export interface AuthenticatedRequest extends Request {
  user?: IUserProfile;
}

export const verifyToken = <T = IUserProfile>(
  token: string,
  secret: string
): Promise<T> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err: VerifyErrors | null, decoded: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded as T);
      }
    });
  });
};

const authenticateJWT = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    // Extract token from cookies
    const token = req.cookies.accessToken;

    // Check if token exists
    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Access token missing',
      });
      return;
    }

    // Verify and decode the token
    try {
      const decodedUser = await verifyToken<IUserProfile>(
        token,
        assertEnv(ENV.ACCESS_TOKEN_SECRET, 'ACCESS_TOKEN_SECRET')
      );

      // Attach user payload to request object
      req.user = decodedUser;

      // Proceed to the next middleware or route handler
      next();
    } catch (tokenError) {
      // Handle specific JWT error types
      if (tokenError instanceof TokenExpiredError) {
        res.status(401).json({
          success: false,
          message: 'Access token expired. Please refresh token',
        });
        return;
      }

      if (tokenError instanceof JsonWebTokenError) {
        res.status(403).json({
          success: false,
          message: 'Invalid token format or signature',
        });
        return;
      }

      // Re-throw unexpected errors to be caught by asyncHandler
      throw tokenError;
    }
  }
);

export default authenticateJWT;
