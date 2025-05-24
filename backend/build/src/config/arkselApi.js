"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const logger_js_1 = __importDefault(require("../utils/logger.js"));
const env_js_1 = __importDefault(require("./env.js"));
const config = {
    method: 'post',
    url: env_js_1.default.ARKESEL_SMS_URL || 'https://sms.arkesel.com/api/v2/sms/send',
    headers: {
        'api-key': env_js_1.default.ARKESEL_API_KEY || (() => { throw new Error('ARKESEL_API_KEY is not defined'); })(),
    },
};
const sendSMS = async ({ sender = env_js_1.default.ARKESEL_SENDER_ID, message = 'Welcome, afatech international school.', recipients = ['233546488115'], } = {}) => {
    try {
        const response = await (0, axios_1.default)({
            ...config,
            data: { sender, message, recipients },
        });
        if (!response.data) {
            throw new Error('No response data received');
        }
        logger_js_1.default.info(JSON.stringify(response.data));
        return response.data;
    }
    catch (error) {
        logger_js_1.default.error('SMS sending failed:', error);
        throw error;
    }
};
exports.default = sendSMS;
