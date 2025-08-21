"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
const express_1 = require("express");
const routes = (0, express_1.Router)();
const authenticate_jwt_1 = __importDefault(require("../middlewares/authenticate-jwt"));
const authentication_1 = require("./authentication");
const crop_record_1 = __importDefault(require("./crop-record"));
const crop_market_price_1 = __importDefault(require("./crop-market-price"));
const crop_expense_1 = __importDefault(require("./crop-expense"));
const crop_yield_1 = __importDefault(require("./crop-yield"));
const farming_tip_1 = __importDefault(require("./farming-tip"));
const weather_info_1 = __importDefault(require("./weather-info"));
const user_1 = __importDefault(require("./user"));
const dashboard_1 = __importDefault(require("./dashboard"));
routes.use(authentication_1.authenticationRouter);
routes.use(authenticate_jwt_1.default, crop_record_1.default);
routes.use(authenticate_jwt_1.default, crop_market_price_1.default);
routes.use(authenticate_jwt_1.default, crop_expense_1.default);
routes.use(authenticate_jwt_1.default, crop_yield_1.default);
routes.use(authenticate_jwt_1.default, farming_tip_1.default);
routes.use(authenticate_jwt_1.default, weather_info_1.default);
routes.use(authenticate_jwt_1.default, user_1.default);
routes.use(authenticate_jwt_1.default, dashboard_1.default);
exports.default = routes;
