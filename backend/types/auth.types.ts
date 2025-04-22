import { Request } from 'express';

export interface ILoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface IUserLoginInput {
  email: string;
  password: string;
}

export interface ITokenPayload {
  id: string;
  role: string;
}

export interface IRefreshTokenPayload {
  id: string;
}
