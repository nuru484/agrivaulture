import nodemailer from 'nodemailer';
import ENV from './env';
import { assertEnv } from './env';

// Environment variables interface
interface EnvConfig {
  EMAIL_HOST: string;
  EMAIL_PORT: number;
  EMAIL_SECURE: string;
  EMAIL_USER: string;
  EMAIL_PASS: string;
}

// Create transport with proper typing
const transport = nodemailer.createTransport({
  host: assertEnv(ENV.SMTP_HOST, 'SMTP_HOST'),
  port: parseInt(assertEnv(ENV.SMTP_PORT, 'SMTP_PORT'), 10),
  secure: assertEnv(ENV.SMTP_SECURE, 'SMTP_SECURE') === 'true', // true for 465, false for other ports
  auth: {
    user: assertEnv(ENV.SMTP_USER, 'SMTP_USER'),
    pass: assertEnv(ENV.SMTP_PASSWORD, 'SMTP_PASSWORD'),
  },
} as nodemailer.TransportOptions);

export default transport;
