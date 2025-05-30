"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_1 = require("../controllers/dashboard");
const dashboardRoutes = (0, express_1.Router)();
// Get user dashboard data
dashboardRoutes.get('/dashboard/user', dashboard_1.getUserDashboard);
exports.default = dashboardRoutes;
