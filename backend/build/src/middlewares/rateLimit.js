"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordResetLimiter = exports.rateLimiter = exports.createRateLimiter = exports.RateLimitExceededError = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const error_handler_1 = require("./error-handler");
// Custom rate limit exceeded error
class RateLimitExceededError extends error_handler_1.CustomError {
    constructor(message = 'Rate limit exceeded') {
        super(429, message, {
            layer: 'middleware',
            severity: error_handler_1.ErrorSeverity.MEDIUM,
            code: 'RATE_LIMIT_EXCEEDED',
        });
    }
}
exports.RateLimitExceededError = RateLimitExceededError;
// Create enhanced memory-based rate limiter
const createRateLimiter = (windowMs = 15 * 60 * 1000, maxRequests = 100, message = 'Too many requests, please try again later.') => {
    return (0, express_rate_limit_1.default)({
        windowMs,
        max: maxRequests,
        message,
        standardHeaders: true,
        legacyHeaders: false,
        // Advanced key generation - combine IP with user ID when available
        keyGenerator: (req) => {
            const userId = req.user?.id ? `-user-${req.user.id}` : '';
            return `${req.ip}${userId}`;
        },
        // Custom handler for rate limit exceeded
        handler: (_req, res, next) => {
            const retryAfter = Math.ceil(windowMs / 1000);
            res.set('Retry-After', String(retryAfter));
            next(new RateLimitExceededError(message));
        },
        // Skip rate limiting for certain requests
        skip: (req) => {
            // Skip health checks
            if (req.path === '/health' || req.path === '/ping')
                return true;
            // Skip for internal requests with secret header
            const bypassToken = req.get('X-Rate-Limit-Bypass');
            return bypassToken === process.env.RATE_LIMIT_BYPASS_SECRET;
        },
    });
};
exports.createRateLimiter = createRateLimiter;
// Different limiters for different endpoints
exports.rateLimiter = (0, exports.createRateLimiter)(15 * 60 * 1000, // 15 minutes
100, // 100 requests
'Too many authentication attempts, please try again later.');
exports.passwordResetLimiter = (0, exports.createRateLimiter)(60 * 60 * 1000, // 1 hour
5, // 5 requests
'Too many password reset attempts, please try again later.');
exports.default = exports.rateLimiter;
