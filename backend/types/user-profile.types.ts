import { ICloudinaryUploadResult } from './cloudinary.types';

export enum UserRole {
  ADMIN = 'ADMIN',
  FARMER = 'FARMER',
}

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  region: string;
  phone: string;
    city: string;
  profilePicture?: string;
  bio: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;
}

// Interfaces for type safety
export interface IUserRegistrationInput {
  password: string;
  region: string;
  name: string;
  role: UserRole; // Enum for user roles
  phone: string;
}

export interface IUserResponseData {
  region: string;
    city: string;
  email: string;
  name: string;
  role: UserRole; // Enum for user roles
  phone: string;
  profilePicture?: string;
  bio: string;
  address: string;
  uploadResult?: ICloudinaryUploadResult;
}
