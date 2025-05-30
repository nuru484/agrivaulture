"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEnv = assertEnv;
require('dotenv').config();
const error_handler_1 = require("../middlewares/error-handler");
function assertEnv(value, name) {
    if (value === undefined) {
        throw new error_handler_1.InternalServerError(`Missing required environment variable: ${name}`);
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
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    ARKESEL_API_KEY: process.env.ARKESEL_API_KEY,
    ARKESEL_SENDER_ID: process.env.ARKESEL_SENDER_ID,
    ARKESEL_SMS_URL: process.env.ARKESEL_SMS_URL,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
    COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
};
exports.default = ENV;
