export enum UserRole {
  ADMIN = 'ADMIN',
  FARMER = 'FARMER',
  USER = 'USER',
}

export interface IUserProfile {
  id: string;
  name: string;
  email?: string;
  role: UserRole;
  region: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;
}
