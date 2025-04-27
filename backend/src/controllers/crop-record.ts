import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prismaClient';
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from '../middlewares/error-handler';
import {
  ICropRecordInput,
  ICropRecordResponse,
} from '../../types/crop-record.types';
import { HTTP_STATUS_CODES } from '../config/constants';

/**
 * Create a new crop record
 */
const createCropRecord = asyncHandler(
  async (
    req: Request<{}, {}, ICropRecordInput>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { cropType, plantingDate, harvestingDate, notes } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const cropRecord = await prisma.cropRecord.create({
      data: {
        userId,
        cropType,
        plantingDate: new Date(plantingDate),
        harvestingDate: harvestingDate ? new Date(harvestingDate) : null,
        notes,
      },
    });

    const response: ICropRecordResponse = {
      id: cropRecord.id,
      userId: cropRecord.userId,
      cropType: cropRecord.cropType,
      plantingDate: cropRecord.plantingDate,
      harvestingDate: cropRecord.harvestingDate,
      notes: cropRecord.notes,
      createdAt: cropRecord.createdAt,
      updatedAt: cropRecord.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.CREATED).json({
      message: 'Crop record created successfully',
      data: response,
    });
  }
);

/**
 * Get a single crop record by ID
 */
const getCropRecord = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const cropRecord = await prisma.cropRecord.findUnique({
      where: { id },
      include: { user: { select: { id: true } } },
    });

    if (!cropRecord) {
      throw new NotFoundError('Crop record not found');
    }

    if (cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'Unauthorized, you do not own this crop record'
      );
    }

    const response: ICropRecordResponse = {
      id: cropRecord.id,
      userId: cropRecord.userId,
      cropType: cropRecord.cropType,
      plantingDate: cropRecord.plantingDate,
      harvestingDate: cropRecord.harvestingDate,
      notes: cropRecord.notes,
      createdAt: cropRecord.createdAt,
      updatedAt: cropRecord.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Crop record retrieved successfully',
      data: response,
    });
  }
);

/**
 * Update a crop record
 */
const updateCropRecord = asyncHandler(
  async (
    req: Request<{ id?: string }, {}, Partial<ICropRecordInput>>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    const { cropType, plantingDate, harvestingDate, notes } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const cropRecord = await prisma.cropRecord.findUnique({
      where: { id },
      include: { user: { select: { id: true } } },
    });

    if (!cropRecord) {
      throw new NotFoundError('Crop record not found');
    }

    if (cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'Unauthorized, you do not own this crop record'
      );
    }

    const updatedCropRecord = await prisma.cropRecord.update({
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

    const response: ICropRecordResponse = {
      id: updatedCropRecord.id,
      userId: updatedCropRecord.userId,
      cropType: updatedCropRecord.cropType,
      plantingDate: updatedCropRecord.plantingDate,
      harvestingDate: updatedCropRecord.harvestingDate,
      notes: updatedCropRecord.notes,
      createdAt: updatedCropRecord.createdAt,
      updatedAt: updatedCropRecord.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Crop record updated successfully',
      data: response,
    });
  }
);

/**
 * Delete a crop record
 */
const deleteCropRecord = asyncHandler(
  async (
    req: Request<{ id?: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const cropRecord = await prisma.cropRecord.findUnique({
      where: { id },
      include: { user: { select: { id: true } } },
    });

    if (!cropRecord) {
      throw new NotFoundError('Crop record not found');
    }

    if (cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'Unauthorized, you do not own this crop record'
      );
    }

    await prisma.cropRecord.delete({
      where: { id },
    });

    // Change status code to 200 OK to include a response body
    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Crop record deleted successfully',
    });
  }
);

/**
 * Get all crop records for the authenticated user
 */
const getAllCropRecords = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const cropRecords = await prisma.cropRecord.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    const response: ICropRecordResponse[] = cropRecords.map((record) => ({
      id: record.id,
      userId: record.userId,
      cropType: record.cropType,
      plantingDate: record.plantingDate,
      harvestingDate: record.harvestingDate,
      notes: record.notes,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    }));

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Crop records retrieved successfully',
      data: response,
    });
  }
);

/**
 * Delete all crop records for the authenticated user
 */
const deleteAllCropRecords = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    await prisma.cropRecord.deleteMany({
      where: { userId },
    });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'All crop records deleted successfully',
    });
  }
);

export {
  createCropRecord,
  getCropRecord,
  updateCropRecord,
  deleteCropRecord,
  getAllCropRecords,
  deleteAllCropRecords,
};
