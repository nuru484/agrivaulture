import { ICloudinaryUploadResult } from "./cloudinary.types";
import { Role } from "generated/prisma";

export enum UserRole {
  ADMIN = "ADMIN",
  FARMER = "FARMER",
}

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  role: Role;
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

export interface IUserRegistrationInput {
  password: string;
  region: string;
  name: string;
  role: UserRole;
  phone: string;
}

export interface IUserResponseData {
  id: string;
  name: string;
  email?: string | null;
  phone: string;
  city?: string | null;
  profilePicture?: string | null;
  bio?: string | null;
  address?: string | null;
  role: Role;
  region?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserResponse {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  role: Role;
  region: string;
  createdAt: Date;
  updatedAt: Date;
}
