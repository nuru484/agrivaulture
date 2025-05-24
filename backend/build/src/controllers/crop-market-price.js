"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllMarketPrices = exports.getAllMarketPrices = exports.deleteMarketPrice = exports.updateMarketPrice = exports.getMarketPrice = exports.createMarketPrice = void 0;
const prismaClient_1 = __importDefault(require("../config/prismaClient"));
const error_handler_1 = require("../middlewares/error-handler");
const constants_1 = require("../config/constants");
/**
 * Create a new market price
 */
const createMarketPrice = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { crop, region, price, unit, date } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    const marketPrice = await prismaClient_1.default.marketPrice.create({
        data: {
            crop,
            region,
            price,
            unit,
            date: new Date(date),
        },
    });
    const response = {
        id: marketPrice.id,
        crop: marketPrice.crop,
        region: marketPrice.region,
        price: marketPrice.price,
        unit: marketPrice.unit,
        date: marketPrice.date,
        createdAt: marketPrice.createdAt,
        updatedAt: marketPrice.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.CREATED).json({
        message: 'Market price created successfully',
        data: response,
    });
});
exports.createMarketPrice = createMarketPrice;
/**
 * Get a single market price by ID
 */
const getMarketPrice = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const marketPrice = await prismaClient_1.default.marketPrice.findUnique({
        where: { id },
    });
    if (!marketPrice) {
        throw new error_handler_1.NotFoundError('Market price not found');
    }
    const response = {
        id: marketPrice.id,
        crop: marketPrice.crop,
        region: marketPrice.region,
        price: marketPrice.price,
        unit: marketPrice.unit,
        date: marketPrice.date,
        createdAt: marketPrice.createdAt,
        updatedAt: marketPrice.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Market price retrieved successfully',
        data: response,
    });
});
exports.getMarketPrice = getMarketPrice;
/**
 * Update a market price
 */
const updateMarketPrice = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const { crop, region, price, unit, date } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    const marketPrice = await prismaClient_1.default.marketPrice.findUnique({
        where: { id },
    });
    if (!marketPrice) {
        throw new error_handler_1.NotFoundError('Market price not found');
    }
    const updatedMarketPrice = await prismaClient_1.default.marketPrice.update({
        where: { id },
        data: {
            crop: crop ?? marketPrice.crop,
            region: region ?? marketPrice.region,
            price: price ?? marketPrice.price,
            unit: unit ?? marketPrice.unit,
            date: date ? new Date(date) : marketPrice.date,
        },
    });
    const response = {
        id: updatedMarketPrice.id,
        crop: updatedMarketPrice.crop,
        region: updatedMarketPrice.region,
        price: updatedMarketPrice.price,
        unit: updatedMarketPrice.unit,
        date: updatedMarketPrice.date,
        createdAt: updatedMarketPrice.createdAt,
        updatedAt: updatedMarketPrice.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Market price updated successfully',
        data: response,
    });
});
exports.updateMarketPrice = updateMarketPrice;
/**
 * Delete a market price
 */
const deleteMarketPrice = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
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
    const marketPrice = await prismaClient_1.default.marketPrice.findUnique({
        where: { id },
    });
    if (!marketPrice) {
        throw new error_handler_1.NotFoundError('Market price not found');
    }
    await prismaClient_1.default.marketPrice.delete({
        where: { id },
    });
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Market price deleted successfully',
    });
});
exports.deleteMarketPrice = deleteMarketPrice;
/**
 * Get all market prices
 */
const getAllMarketPrices = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const marketPrices = await prismaClient_1.default.marketPrice.findMany({
        orderBy: { createdAt: 'desc' },
    });
    const response = marketPrices.map((price) => ({
        id: price.id,
        crop: price.crop,
        region: price.region,
        price: price.price,
        unit: price.unit,
        date: price.date,
        createdAt: price.createdAt,
        updatedAt: price.updatedAt,
    }));
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Market prices retrieved successfully',
        data: response,
    });
});
exports.getAllMarketPrices = getAllMarketPrices;
/**
 * Delete all market prices
 */
const deleteAllMarketPrices = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    if (!user || user.role !== 'ADMIN') {
        throw new error_handler_1.UnauthorizedError('Only admins can delete all market prices');
    }
    await prismaClient_1.default.marketPrice.deleteMany({});
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'All market prices deleted successfully',
    });
});
exports.deleteAllMarketPrices = deleteAllMarketPrices;
