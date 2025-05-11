interface ICloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  asset_id?: string;
  format?: string;
  resource_type?: string;
}

export enum UserRole {
  FARMER = 'FARMER',
}

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  region: string;
  phone: string;
  profilePicture?: string;
  bio: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface IUserRegistrationData {
  password: string;
  region: string;
  name: string;
  role: UserRole; // Enum for user roles
  phone: string;
}

export interface IUserRegistrationResponseData {
  id: string;
  region: string;
  email: string;
  name: string;
  role: string;
  phone: string;
  profilePicture?: string;
  bio: string;
  address: string;
  uploadResult?: ICloudinaryUploadResult;
}
