"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.ts
const express_1 = require("express");
const user_1 = require("../controllers/user");
const userRoutes = (0, express_1.Router)();
// Get total number of users
userRoutes.get('/users/count', user_1.getTotalUsers);
// Get list of users
userRoutes.get('/users', user_1.getUsersList);
// Update user role
userRoutes.put('/users/:id/role', user_1.updateUserRole);
// Delete a user
userRoutes.delete('/users/:id', user_1.deleteUser);
exports.default = userRoutes;
