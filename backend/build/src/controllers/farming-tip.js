"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllFarmingTips = exports.getAllFarmingTips = exports.deleteFarmingTip = exports.updateFarmingTip = exports.getFarmingTip = exports.createFarmingTip = void 0;
const prismaClient_1 = __importDefault(require("../config/prismaClient"));
const error_handler_1 = require("../middlewares/error-handler");
const constants_1 = require("../config/constants");
/**
 * Create a new farming tip
 */
const createFarmingTip = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { tip, crop, region, date } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    const farmingTip = await prismaClient_1.default.farmingTip.create({
        data: {
            tip,
            crop: crop ?? null,
            region: region ?? null,
            date: new Date(date),
        },
    });
    const response = {
        id: farmingTip.id,
        tip: farmingTip.tip,
        crop: farmingTip.crop ?? undefined,
        region: farmingTip.region ?? undefined,
        date: farmingTip.date,
        createdAt: farmingTip.createdAt,
        updatedAt: farmingTip.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.CREATED).json({
        message: 'Farming tip created successfully',
        data: response,
    });
});
exports.createFarmingTip = createFarmingTip;
/**
 * Get a single farming tip by ID
 */
const getFarmingTip = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const farmingTip = await prismaClient_1.default.farmingTip.findUnique({
        where: { id },
    });
    if (!farmingTip) {
        throw new error_handler_1.NotFoundError('Farming tip not found');
    }
    const response = {
        id: farmingTip.id,
        tip: farmingTip.tip,
        crop: farmingTip.crop ?? undefined,
        region: farmingTip.region ?? undefined,
        date: farmingTip.date,
        createdAt: farmingTip.createdAt,
        updatedAt: farmingTip.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Farming tip retrieved successfully',
        data: response,
    });
});
exports.getFarmingTip = getFarmingTip;
/**
 * Update a farming tip
 */
const updateFarmingTip = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const { tip, crop, region, date } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    const farmingTip = await prismaClient_1.default.farmingTip.findUnique({
        where: { id },
    });
    if (!farmingTip) {
        throw new error_handler_1.NotFoundError('Farming tip not found');
    }
    const updatedFarmingTip = await prismaClient_1.default.farmingTip.update({
        where: { id },
        data: {
            tip: tip ?? farmingTip.tip,
            crop: crop !== undefined ? crop : farmingTip.crop,
            region: region !== undefined ? region : farmingTip.region,
            date: date ? new Date(date) : farmingTip.date,
        },
    });
    const response = {
        id: updatedFarmingTip.id,
        tip: updatedFarmingTip.tip,
        crop: updatedFarmingTip.crop ?? undefined,
        region: updatedFarmingTip.region ?? undefined,
        date: updatedFarmingTip.date,
        createdAt: updatedFarmingTip.createdAt,
        updatedAt: updatedFarmingTip.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Farming tip updated successfully',
        data: response,
    });
});
exports.updateFarmingTip = updateFarmingTip;
/**
 * Delete a farming tip
 */
const deleteFarmingTip = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    const farmingTip = await prismaClient_1.default.farmingTip.findUnique({
        where: { id },
    });
    if (!farmingTip) {
        throw new error_handler_1.NotFoundError('Farming tip not found');
    }
    await prismaClient_1.default.farmingTip.delete({
        where: { id },
    });
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Farming tip deleted successfully',
    });
});
exports.deleteFarmingTip = deleteFarmingTip;
/**
 * Get all farming tips
 */
const getAllFarmingTips = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const farmingTips = await prismaClient_1.default.farmingTip.findMany({
        orderBy: { createdAt: 'desc' },
    });
    const response = farmingTips.map((farmingTip) => ({
        id: farmingTip.id,
        tip: farmingTip.tip,
        crop: farmingTip.crop ?? undefined,
        region: farmingTip.region ?? undefined,
        date: farmingTip.date,
        createdAt: farmingTip.createdAt,
        updatedAt: farmingTip.updatedAt,
    }));
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Farming tips retrieved successfully',
        data: response,
    });
});
exports.getAllFarmingTips = getAllFarmingTips;
/**
 * Delete all farming tips
 */
const deleteAllFarmingTips = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    await prismaClient_1.default.farmingTip.deleteMany({});
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'All farming tips deleted successfully',
    });
});
exports.deleteAllFarmingTips = deleteAllFarmingTips;
