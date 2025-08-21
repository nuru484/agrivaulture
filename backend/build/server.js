"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./src/config/env"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./src/routes/index"));
const error_handler_1 = require("./src/middlewares/error-handler");
const rateLimit_1 = __importDefault(require("./src/middlewares/rateLimit"));
const app = (0, express_1.default)();
const allowedOrigins = new Set(process.env.CORS_ACCESS ? process.env.CORS_ACCESS.split(',') : []);
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.has(origin)) {
            callback(null, true);
        }
        else {
            callback(new error_handler_1.UnauthorizedError('Not allowed by CORS', {
                layer: 'cors',
                code: 'CORS_NOT_ALLOWED',
                context: { origin },
            }), false);
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)(':method :url :status :response-time ms'));
app.use(rateLimit_1.default);
app.use('/api/v1', index_1.default);
app.use(error_handler_1.errorHandler);
const port = env_1.default.PORT || 3000;
app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});
exports.default = app;
