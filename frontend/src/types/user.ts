// src/types/user.ts
export interface IUser {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  role: 'FARMER' | 'ADMIN';
  region: string;
  city: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUsersResponse {
  message: string;
  data: IUser[];
}

export interface IUserResponse {
  message: string;
  data: IUser;
}

export interface ITotalUsersResponse {
  message: string;
  data: { total: number };
}

export interface IUpdateUserRoleRequest {
  id: string;
  role: 'FARMER' | 'ADMIN';
}