// types/express.d.ts
import 'express';
import { IUserProfile } from './user-profile.types';

declare module 'express' {
  export interface Request {
    user?: IUserProfile;
  }
}
