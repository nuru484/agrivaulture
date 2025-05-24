"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_1 = __importDefault(require("./env"));
const env_2 = require("./env");
// Create transport with proper typing
const transport = nodemailer_1.default.createTransport({
    host: (0, env_2.assertEnv)(env_1.default.SMTP_HOST, 'SMTP_HOST'),
    port: parseInt((0, env_2.assertEnv)(env_1.default.SMTP_PORT, 'SMTP_PORT'), 10),
    secure: (0, env_2.assertEnv)(env_1.default.SMTP_SECURE, 'SMTP_SECURE') === 'true', // true for 465, false for other ports
    auth: {
        user: (0, env_2.assertEnv)(env_1.default.SMTP_USER, 'SMTP_USER'),
        pass: (0, env_2.assertEnv)(env_1.default.SMTP_PASSWORD, 'SMTP_PASSWORD'),
    },
});
exports.default = transport;
