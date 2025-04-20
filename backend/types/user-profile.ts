export enum UserRole {
  ADMIN = 'ADMIN',
  FARMER = 'FARMER',
  USER = 'USER',
}

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  region: string;
  phone: string;
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
  email: string;
  name: string;
  role: UserRole; // Enum for user roles
  phone: string;
  profilePicture?: string | Express.Multer.File;
  bio: string;
  address: string;
}

export interface IUserCreationData
  extends Omit<IUserRegistrationInput, 'password'> {
  password: string;
}

export interface IUserResponseData {
  region: string;
  email: string;
  name: string;
  role: UserRole; // Enum for user roles
  phone: string;
  profilePicture?: string;
  bio: string;
  address: string;
}
