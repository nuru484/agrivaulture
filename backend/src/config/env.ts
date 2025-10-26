import { InternalServerError } from "../middlewares/error-handler";

export function assertEnv<T>(value: T | undefined, name: string): T {
  if (value === undefined) {
    throw new InternalServerError(
      `Missing required environment variable: ${name}`
    );
  }
  return value;
}

const ENV = {
  CORS_ACCESS: process.env.CORS_ACCESS,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,

  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
};

export default ENV;
