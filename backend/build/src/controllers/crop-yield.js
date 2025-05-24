"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllYields = exports.getAllYields = exports.deleteYield = exports.updateYield = exports.getYield = exports.createYield = void 0;
const prismaClient_1 = __importDefault(require("../config/prismaClient"));
const error_handler_1 = require("../middlewares/error-handler");
const constants_1 = require("../config/constants");
/**
 * Create a new yield
 */
const createYield = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { cropRecordId, quantity, unit, date } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if crop record exists and belongs to the user
    const cropRecord = await prismaClient_1.default.cropRecord.findUnique({
        where: { id: cropRecordId },
        select: { userId: true },
    });
    if (!cropRecord) {
        throw new error_handler_1.NotFoundError('Crop record not found');
    }
    if (cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('You do not have permission to add yields to this crop record');
    }
    const yieldRecord = await prismaClient_1.default.yield.create({
        data: {
            cropRecord: { connect: { id: cropRecordId } },
            quantity,
            unit,
            date: new Date(date),
        },
    });
    const response = {
        id: yieldRecord.id,
        cropRecordId: yieldRecord.cropRecordId,
        quantity: yieldRecord.quantity,
        unit: yieldRecord.unit,
        date: yieldRecord.date,
        createdAt: yieldRecord.createdAt,
        updatedAt: yieldRecord.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.CREATED).json({
        message: 'Yield created successfully',
        data: response,
    });
});
exports.createYield = createYield;
/**
 * Get a single yield by ID
 */
const getYield = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const yieldRecord = await prismaClient_1.default.yield.findUnique({
        where: { id },
        include: { cropRecord: { select: { userId: true } } },
    });
    if (!yieldRecord) {
        throw new error_handler_1.NotFoundError('Yield not found');
    }
    if (yieldRecord.cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('You do not have permission to view this yield');
    }
    const response = {
        id: yieldRecord.id,
        cropRecordId: yieldRecord.cropRecordId,
        quantity: yieldRecord.quantity,
        unit: yieldRecord.unit,
        date: yieldRecord.date,
        createdAt: yieldRecord.createdAt,
        updatedAt: yieldRecord.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Yield retrieved successfully',
        data: response,
    });
});
exports.getYield = getYield;
/**
 * Update a yield
 */
const updateYield = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const { quantity, unit, date } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const yieldRecord = await prismaClient_1.default.yield.findUnique({
        where: { id },
        include: { cropRecord: { select: { userId: true } } },
    });
    if (!yieldRecord) {
        throw new error_handler_1.NotFoundError('Yield not found');
    }
    if (yieldRecord.cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('You do not have permission to update this yield');
    }
    const updatedYield = await prismaClient_1.default.yield.update({
        where: { id },
        data: {
            quantity: quantity ?? yieldRecord.quantity,
            unit: unit ?? yieldRecord.unit,
            date: date ? new Date(date) : yieldRecord.date,
        },
    });
    const response = {
        id: updatedYield.id,
        cropRecordId: updatedYield.cropRecordId,
        quantity: updatedYield.quantity,
        unit: updatedYield.unit,
        date: updatedYield.date,
        createdAt: updatedYield.createdAt,
        updatedAt: updatedYield.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Yield updated successfully',
        data: response,
    });
});
exports.updateYield = updateYield;
/**
 * Delete a yield
 */
const deleteYield = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const yieldRecord = await prismaClient_1.default.yield.findUnique({
        where: { id },
        include: { cropRecord: { select: { userId: true } } },
    });
    if (!yieldRecord) {
        throw new error_handler_1.NotFoundError('Yield not found');
    }
    if (yieldRecord.cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('You do not have permission to delete this yield');
    }
    await prismaClient_1.default.yield.delete({
        where: { id },
    });
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Yield deleted successfully',
    });
});
exports.deleteYield = deleteYield;
/**
 * Get all yields
 */
const getAllYields = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const yields = await prismaClient_1.default.yield.findMany({
        where: {
            cropRecord: { userId },
        },
        orderBy: { createdAt: 'desc' },
    });
    const response = yields.map((yieldRecord) => ({
        id: yieldRecord.id,
        cropRecordId: yieldRecord.cropRecordId,
        quantity: yieldRecord.quantity,
        unit: yieldRecord.unit,
        date: yieldRecord.date,
        createdAt: yieldRecord.createdAt,
        updatedAt: yieldRecord.updatedAt,
    }));
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Yields retrieved successfully',
        data: response,
    });
});
exports.getAllYields = getAllYields;
/**
 * Delete all yields
 */
const deleteAllYields = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    if (user?.role !== 'ADMIN') {
        throw new error_handler_1.UnauthorizedError('You do not have permission to delete all yields');
    }
    await prismaClient_1.default.yield.deleteMany({});
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'All yields deleted successfully',
    });
});
exports.deleteAllYields = deleteAllYields;
