import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prismaClient';
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from '../middlewares/error-handler';
import { IYieldInput, IYieldResponse } from '../../types/crop-yield.types';
import { HTTP_STATUS_CODES } from '../config/constants';

/**
 * Create a new yield
 */
const createYield = asyncHandler(
  async (
    req: Request<{}, {}, IYieldInput>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { cropRecordId, quantity, unit, date } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    // Check if crop record exists and belongs to the user
    const cropRecord = await prisma.cropRecord.findUnique({
      where: { id: cropRecordId },
      select: { userId: true },
    });

    if (!cropRecord) {
      throw new NotFoundError('Crop record not found');
    }

    if (cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'You do not have permission to add yields to this crop record'
      );
    }

    const yieldRecord = await prisma.yield.create({
      data: {
        cropRecord: { connect: { id: cropRecordId } },
        quantity,
        unit,
        date: new Date(date),
      },
    });

    const response: IYieldResponse = {
      id: yieldRecord.id,
      cropRecordId: yieldRecord.cropRecordId,
      quantity: yieldRecord.quantity,
      unit: yieldRecord.unit,
      date: yieldRecord.date,
      createdAt: yieldRecord.createdAt,
      updatedAt: yieldRecord.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.CREATED).json({
      message: 'Yield created successfully',
      data: response,
    });
  }
);

/**
 * Get a single yield by ID
 */
const getYield = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const yieldRecord = await prisma.yield.findUnique({
      where: { id },
      include: { cropRecord: { select: { userId: true } } },
    });

    if (!yieldRecord) {
      throw new NotFoundError('Yield not found');
    }

    if (yieldRecord.cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'You do not have permission to view this yield'
      );
    }

    const response: IYieldResponse = {
      id: yieldRecord.id,
      cropRecordId: yieldRecord.cropRecordId,
      quantity: yieldRecord.quantity,
      unit: yieldRecord.unit,
      date: yieldRecord.date,
      createdAt: yieldRecord.createdAt,
      updatedAt: yieldRecord.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Yield retrieved successfully',
      data: response,
    });
  }
);

/**
 * Update a yield
 */
const updateYield = asyncHandler(
  async (
    req: Request<{ id?: string }, {}, Partial<IYieldInput>>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    const { quantity, unit, date } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const yieldRecord = await prisma.yield.findUnique({
      where: { id },
      include: { cropRecord: { select: { userId: true } } },
    });

    if (!yieldRecord) {
      throw new NotFoundError('Yield not found');
    }

    if (yieldRecord.cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'You do not have permission to update this yield'
      );
    }

    const updatedYield = await prisma.yield.update({
      where: { id },
      data: {
        quantity: quantity ?? yieldRecord.quantity,
        unit: unit ?? yieldRecord.unit,
        date: date ? new Date(date) : yieldRecord.date,
      },
    });

    const response: IYieldResponse = {
      id: updatedYield.id,
      cropRecordId: updatedYield.cropRecordId,
      quantity: updatedYield.quantity,
      unit: updatedYield.unit,
      date: updatedYield.date,
      createdAt: updatedYield.createdAt,
      updatedAt: updatedYield.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Yield updated successfully',
      data: response,
    });
  }
);

/**
 * Delete a yield
 */
const deleteYield = asyncHandler(
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

    const yieldRecord = await prisma.yield.findUnique({
      where: { id },
      include: { cropRecord: { select: { userId: true } } },
    });

    if (!yieldRecord) {
      throw new NotFoundError('Yield not found');
    }

    if (yieldRecord.cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'You do not have permission to delete this yield'
      );
    }

    await prisma.yield.delete({
      where: { id },
    });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Yield deleted successfully',
    });
  }
);

/**
 * Get all yields
 */
const getAllYields = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const yields = await prisma.yield.findMany({
      where: {
        cropRecord: { userId },
      },
      orderBy: { createdAt: 'desc' },
    });

    const response: IYieldResponse[] = yields.map((yieldRecord) => ({
      id: yieldRecord.id,
      cropRecordId: yieldRecord.cropRecordId,
      quantity: yieldRecord.quantity,
      unit: yieldRecord.unit,
      date: yieldRecord.date,
      createdAt: yieldRecord.createdAt,
      updatedAt: yieldRecord.updatedAt,
    }));

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Yields retrieved successfully',
      data: response,
    });
  }
);

/**
 * Delete all yields
 */
const deleteAllYields = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    // Check if user has ADMIN role
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (user?.role !== 'ADMIN') {
      throw new UnauthorizedError(
        'You do not have permission to delete all yields'
      );
    }

    await prisma.yield.deleteMany({});

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'All yields deleted successfully',
    });
  }
);

export {
  createYield,
  getYield,
  updateYield,
  deleteYield,
  getAllYields,
  deleteAllYields,
};
