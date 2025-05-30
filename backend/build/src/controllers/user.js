"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserRole = exports.getUsersList = exports.getTotalUsers = void 0;
const prismaClient_1 = __importDefault(require("../config/prismaClient"));
const error_handler_1 = require("../middlewares/error-handler");
const constants_1 = require("../config/constants");
/**
 * Get total number of users
 */
const getTotalUsers = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId || req.user?.role !== 'ADMIN') {
        throw new error_handler_1.UnauthorizedError('Unauthorized, admin access required');
    }
    const totalUsers = await prismaClient_1.default.user.count();
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Total users retrieved successfully',
        data: { total: totalUsers },
    });
});
exports.getTotalUsers = getTotalUsers;
/**
 * Get list of users
 */
const getUsersList = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId || req.user?.role !== 'ADMIN') {
        throw new error_handler_1.UnauthorizedError('Unauthorized, admin access required');
    }
    const users = await prismaClient_1.default.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true,
            region: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: { createdAt: 'desc' },
    });
    const response = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        region: user.region,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }));
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Users list retrieved successfully',
        data: response,
    });
});
exports.getUsersList = getUsersList;
/**
 * Update user role
 */
const updateUserRole = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const { role } = req.body;
    const userId = req.user?.id;
    if (!userId || req.user?.role !== 'ADMIN') {
        throw new error_handler_1.UnauthorizedError('Unauthorized, admin access required');
    }
    if (!['FARMER', 'ADMIN'].includes(role)) {
        throw new error_handler_1.NotFoundError('Invalid role provided');
    }
    const user = await prismaClient_1.default.user.findUnique({
        where: { id },
    });
    if (!user) {
        throw new error_handler_1.NotFoundError('User not found');
    }
    const updatedUser = await prismaClient_1.default.user.update({
        where: { id },
        data: { role },
    });
    const response = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        role: updatedUser.role,
        region: updatedUser.region,
        createdAt: updatedUser.createdAt,
        updatedAt: updatedUser.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'User role updated successfully',
        data: response,
    });
});
exports.updateUserRole = updateUserRole;
/**
 * Delete a user
 */
const deleteUser = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId || req.user?.role !== 'ADMIN') {
        throw new error_handler_1.UnauthorizedError('Unauthorized, admin access required');
    }
    const user = await prismaClient_1.default.user.findUnique({
        where: { id },
    });
    if (!user) {
        throw new error_handler_1.NotFoundError('User not found');
    }
    await prismaClient_1.default.user.delete({
        where: { id },
    });
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'User deleted successfully',
    });
});
exports.deleteUser = deleteUser;
