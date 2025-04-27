// types/express.d.ts
import 'express';
import { IUserProfile } from './user-profile.types';

declare module 'express' {
  export interface Request {
    user?: IUserProfile;
  }
}


// Enum
export enum Role {
  FARMER = "FARMER",
  ADMIN = "ADMIN",
  USER = "USER",
}

// Interfaces

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  region: string;
  phone: string;
  profilePicture?: string;
  bio?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
  records: CropRecord[];
}

export interface CropRecord {
  id: string;
  userId: string;
  user: User;
  cropType: string;
  plantingDate: Date;
  harvestingDate?: Date;
  notes?: string;
  expenses: Expense[];
  yields: Yield[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Expense {
  id: string;
  cropRecordId: string;
  cropRecord: CropRecord;
  item: string;
  cost: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Yield {
  id: string;
  cropRecordId: string;
  cropRecord: CropRecord;
  quantity: number;
  unit: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarketPrice {
  id: string;
  crop: string;
  region: string;
  price: number;
  unit: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface FarmingTip {
  id: string;
  tip: string;
  crop?: string;
  region?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Weather {
  id: string;
  region: string;
  data: Record<string, any>; // JSON weather data
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
