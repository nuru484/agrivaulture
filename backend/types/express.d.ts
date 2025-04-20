// types/express.d.ts
import 'express';
import { IUserProfile } from './user-profile';

declare module 'express' {
  export interface Request {
    user?: IUserProfile;
  }
}


