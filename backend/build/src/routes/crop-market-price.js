"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/crop-market-price.ts
const express_1 = require("express");
const crop_market_price_1 = require("../controllers/crop-market-price");
const authorize_roles_1 = require("../middlewares/authorize-roles");
const user_profile_types_1 = require("../../types/user-profile.types");
const cropMarketPriceRoutes = (0, express_1.Router)();
// Create a new market price
cropMarketPriceRoutes.post('/market-prices', (0, authorize_roles_1.authorizeRole)([user_profile_types_1.UserRole.ADMIN]), crop_market_price_1.createMarketPrice);
// Get a single market price by ID
cropMarketPriceRoutes.get('/market-prices/:id', crop_market_price_1.getMarketPrice);
// Update a market price by ID
cropMarketPriceRoutes.put('/market-prices/:id', (0, authorize_roles_1.authorizeRole)([user_profile_types_1.UserRole.ADMIN]), crop_market_price_1.updateMarketPrice);
// Delete a market price by ID
cropMarketPriceRoutes.delete('/market-prices/:id', (0, authorize_roles_1.authorizeRole)([user_profile_types_1.UserRole.ADMIN]), crop_market_price_1.deleteMarketPrice);
// Get all market prices
cropMarketPriceRoutes.get('/market-prices', crop_market_price_1.getAllMarketPrices);
// Delete all market prices
cropMarketPriceRoutes.delete('/market-prices', (0, authorize_roles_1.authorizeRole)([user_profile_types_1.UserRole.ADMIN]), crop_market_price_1.deleteAllMarketPrices);
exports.default = cropMarketPriceRoutes;
