import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prismaClient';
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from '../middlewares/error-handler';
import {
  IFarmingTipInput,
  IFarmingTipResponse,
} from '../../types/farming-tip.types';
import { HTTP_STATUS_CODES } from '../config/constants';

/**
 * Create a new farming tip
 */
const createFarmingTip = asyncHandler(
  async (
    req: Request<{}, {}, IFarmingTipInput>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { tip, crop, region, date } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    // Check if user has ADMIN role
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    const farmingTip = await prisma.farmingTip.create({
      data: {
        tip,
        crop: crop ?? null,
        region: region ?? null,
        date: new Date(date),
      },
    });

    const response: IFarmingTipResponse = {
      id: farmingTip.id,
      tip: farmingTip.tip,
      crop: farmingTip.crop ?? undefined,
      region: farmingTip.region ?? undefined,
      date: farmingTip.date,
      createdAt: farmingTip.createdAt,
      updatedAt: farmingTip.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.CREATED).json({
      message: 'Farming tip created successfully',
      data: response,
    });
  }
);

/**
 * Get a single farming tip by ID
 */
const getFarmingTip = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    const farmingTip = await prisma.farmingTip.findUnique({
      where: { id },
    });

    if (!farmingTip) {
      throw new NotFoundError('Farming tip not found');
    }

    const response: IFarmingTipResponse = {
      id: farmingTip.id,
      tip: farmingTip.tip,
      crop: farmingTip.crop ?? undefined,
      region: farmingTip.region ?? undefined,
      date: farmingTip.date,
      createdAt: farmingTip.createdAt,
      updatedAt: farmingTip.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Farming tip retrieved successfully',
      data: response,
    });
  }
);

/**
 * Update a farming tip
 */
const updateFarmingTip = asyncHandler(
  async (
    req: Request<{ id?: string }, {}, Partial<IFarmingTipInput>>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    const { tip, crop, region, date } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    // Check if user has ADMIN role
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    const farmingTip = await prisma.farmingTip.findUnique({
      where: { id },
    });

    if (!farmingTip) {
      throw new NotFoundError('Farming tip not found');
    }

    const updatedFarmingTip = await prisma.farmingTip.update({
      where: { id },
      data: {
        tip: tip ?? farmingTip.tip,
        crop: crop !== undefined ? crop : farmingTip.crop,
        region: region !== undefined ? region : farmingTip.region,
        date: date ? new Date(date) : farmingTip.date,
      },
    });

    const response: IFarmingTipResponse = {
      id: updatedFarmingTip.id,
      tip: updatedFarmingTip.tip,
      crop: updatedFarmingTip.crop ?? undefined,
      region: updatedFarmingTip.region ?? undefined,
      date: updatedFarmingTip.date,
      createdAt: updatedFarmingTip.createdAt,
      updatedAt: updatedFarmingTip.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Farming tip updated successfully',
      data: response,
    });
  }
);

/**
 * Delete a farming tip
 */
const deleteFarmingTip = asyncHandler(
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

    // Check if user has ADMIN role
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    const farmingTip = await prisma.farmingTip.findUnique({
      where: { id },
    });

    if (!farmingTip) {
      throw new NotFoundError('Farming tip not found');
    }

    await prisma.farmingTip.delete({
      where: { id },
    });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Farming tip deleted successfully',
    });
  }
);

/**
 * Get all farming tips
 */
const getAllFarmingTips = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const farmingTips = await prisma.farmingTip.findMany({
      orderBy: { createdAt: 'desc' },
    });

    const response: IFarmingTipResponse[] = farmingTips.map((farmingTip) => ({
      id: farmingTip.id,
      tip: farmingTip.tip,
      crop: farmingTip.crop ?? undefined,
      region: farmingTip.region ?? undefined,
      date: farmingTip.date,
      createdAt: farmingTip.createdAt,
      updatedAt: farmingTip.updatedAt,
    }));

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Farming tips retrieved successfully',
      data: response,
    });
  }
);

/**
 * Delete all farming tips
 */
const deleteAllFarmingTips = asyncHandler(
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

    await prisma.farmingTip.deleteMany({});

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'All farming tips deleted successfully',
    });
  }
);

export {
  createFarmingTip,
  getFarmingTip,
  updateFarmingTip,
  deleteFarmingTip,
  getAllFarmingTips,
  deleteAllFarmingTips,
};
