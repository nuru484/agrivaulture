"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllCropRecords = exports.getAllCropRecords = exports.deleteCropRecord = exports.updateCropRecord = exports.getCropRecord = exports.createCropRecord = void 0;
const prismaClient_1 = __importDefault(require("../config/prismaClient"));
const error_handler_1 = require("../middlewares/error-handler");
const constants_1 = require("../config/constants");
/**
 * Create a new crop record
 */
const createCropRecord = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { cropType, plantingDate, harvestingDate, notes } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const cropRecord = await prismaClient_1.default.cropRecord.create({
        data: {
            userId,
            cropType,
            plantingDate: new Date(plantingDate),
            harvestingDate: harvestingDate ? new Date(harvestingDate) : null,
            notes,
        },
    });
    const response = {
        id: cropRecord.id,
        userId: cropRecord.userId,
        cropType: cropRecord.cropType,
        plantingDate: cropRecord.plantingDate,
        harvestingDate: cropRecord.harvestingDate,
        notes: cropRecord.notes,
        createdAt: cropRecord.createdAt,
        updatedAt: cropRecord.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.CREATED).json({
        message: 'Crop record created successfully',
        data: response,
    });
});
exports.createCropRecord = createCropRecord;
/**
 * Get a single crop record by ID
 */
const getCropRecord = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const cropRecord = await prismaClient_1.default.cropRecord.findUnique({
        where: { id },
        include: { user: { select: { id: true } } },
    });
    if (!cropRecord) {
        throw new error_handler_1.NotFoundError('Crop record not found');
    }
    if (cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, you do not own this crop record');
    }
    const response = {
        id: cropRecord.id,
        userId: cropRecord.userId,
        cropType: cropRecord.cropType,
        plantingDate: cropRecord.plantingDate,
        harvestingDate: cropRecord.harvestingDate,
        notes: cropRecord.notes,
        createdAt: cropRecord.createdAt,
        updatedAt: cropRecord.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Crop record retrieved successfully',
        data: response,
    });
});
exports.getCropRecord = getCropRecord;
/**
 * Update a crop record
 */
const updateCropRecord = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const { cropType, plantingDate, harvestingDate, notes } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const cropRecord = await prismaClient_1.default.cropRecord.findUnique({
        where: { id },
        include: { user: { select: { id: true } } },
    });
    if (!cropRecord) {
        throw new error_handler_1.NotFoundError('Crop record not found');
    }
    if (cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, you do not own this crop record');
    }
    const updatedCropRecord = await prismaClient_1.default.cropRecord.update({
        where: { id },
        data: {
            cropType: cropType ?? cropRecord.cropType,
            plantingDate: plantingDate
                ? new Date(plantingDate)
                : cropRecord.plantingDate,
            harvestingDate: harvestingDate
                ? new Date(harvestingDate)
                : cropRecord.harvestingDate,
            notes: notes ?? cropRecord.notes,
        },
    });
    const response = {
        id: updatedCropRecord.id,
        userId: updatedCropRecord.userId,
        cropType: updatedCropRecord.cropType,
        plantingDate: updatedCropRecord.plantingDate,
        harvestingDate: updatedCropRecord.harvestingDate,
        notes: updatedCropRecord.notes,
        createdAt: updatedCropRecord.createdAt,
        updatedAt: updatedCropRecord.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Crop record updated successfully',
        data: response,
    });
});
exports.updateCropRecord = updateCropRecord;
/**
 * Delete a crop record
 */
const deleteCropRecord = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const cropRecord = await prismaClient_1.default.cropRecord.findUnique({
        where: { id },
        include: { user: { select: { id: true } } },
    });
    if (!cropRecord) {
        throw new error_handler_1.NotFoundError('Crop record not found');
    }
    if (cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, you do not own this crop record');
    }
    await prismaClient_1.default.cropRecord.delete({
        where: { id },
    });
    // Change status code to 200 OK to include a response body
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Crop record deleted successfully',
    });
});
exports.deleteCropRecord = deleteCropRecord;
/**
 * Get all crop records for the authenticated user
 */
const getAllCropRecords = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const cropRecords = await prismaClient_1.default.cropRecord.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
    });
    const response = cropRecords.map((record) => ({
        id: record.id,
        userId: record.userId,
        cropType: record.cropType,
        plantingDate: record.plantingDate,
        harvestingDate: record.harvestingDate,
        notes: record.notes,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
    }));
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Crop records retrieved successfully',
        data: response,
    });
});
exports.getAllCropRecords = getAllCropRecords;
/**
 * Delete all crop records for the authenticated user
 */
const deleteAllCropRecords = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    await prismaClient_1.default.cropRecord.deleteMany({
        where: { userId },
    });
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'All crop records deleted successfully',
    });
});
exports.deleteAllCropRecords = deleteAllCropRecords;
