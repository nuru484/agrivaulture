"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const farming_tip_1 = require("../controllers/farming-tip");
const authorize_roles_1 = require("../middlewares/authorize-roles");
const user_profile_types_1 = require("../../types/user-profile.types");
const farmingTipRoutes = (0, express_1.Router)();
// Create a new farming tip
farmingTipRoutes.post('/farming-tips', (0, authorize_roles_1.authorizeRole)([user_profile_types_1.UserRole.ADMIN]), farming_tip_1.createFarmingTip);
// Get a single farming tip by ID
farmingTipRoutes.get('/farming-tips/:id', farming_tip_1.getFarmingTip);
// Update a farming tip by ID
farmingTipRoutes.put('/farming-tips/:id', (0, authorize_roles_1.authorizeRole)([user_profile_types_1.UserRole.ADMIN]), farming_tip_1.updateFarmingTip);
// Delete a farming tip by ID
farmingTipRoutes.delete('/farming-tips/:id', (0, authorize_roles_1.authorizeRole)([user_profile_types_1.UserRole.ADMIN]), farming_tip_1.deleteFarmingTip);
// Get all farming tips
farmingTipRoutes.get('/farming-tips', farming_tip_1.getAllFarmingTips);
// Delete all farming tips
farmingTipRoutes.delete('/farming-tips', (0, authorize_roles_1.authorizeRole)([user_profile_types_1.UserRole.ADMIN]), farming_tip_1.deleteAllFarmingTips);
exports.default = farmingTipRoutes;
