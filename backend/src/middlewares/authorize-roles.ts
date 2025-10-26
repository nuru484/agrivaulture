import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from './error-handler';
import { UserRole } from 'types/user-profile.types';
import { ForbiddenError } from './error-handler';


export const authorizeRole = (allowedRoles: UserRole[]) =>
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      // Verify user object exists
      if (!req.user) {
        throw new ForbiddenError('Unauthorized: User not authenticated');
      }

      // Verify role exists
      if (!req.user.role) {
        throw new ForbiddenError('Unauthorized: User role not defined');
      }

      // Check if user has required role
      if (!allowedRoles.includes(req.user.role as UserRole)) {
        throw new ForbiddenError();
      }

      // User is authorized
      next();
    }
  );
