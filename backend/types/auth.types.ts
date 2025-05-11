import { Request } from 'express';

export interface ILoginRequest extends Request {
  body: {
    password: string;
    phone: string;
  };
}

// export interface IUserLoginInput {
//   password: string;
//   phone: string;
// }

export interface ITokenPayload {
  id: string;
  role: string;
}

export interface IRefreshTokenPayload {
  id: string;
}
