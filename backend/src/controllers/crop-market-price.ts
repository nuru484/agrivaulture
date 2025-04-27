import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prismaClient';
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from '../middlewares/error-handler';
import {
  IMarketPriceInput,
  IMarketPriceResponse,
} from '../../types/crop-market-price.types';
import { HTTP_STATUS_CODES } from '../config/constants';

/**
 * Create a new market price
 */
const createMarketPrice = asyncHandler(
  async (
    req: Request<{}, {}, IMarketPriceInput>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { crop, region, price, unit, date } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    // Check if user has ADMIN role
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    const marketPrice = await prisma.marketPrice.create({
      data: {
        crop,
        region,
        price,
        unit,
        date: new Date(date),
      },
    });

    const response: IMarketPriceResponse = {
      id: marketPrice.id,
      crop: marketPrice.crop,
      region: marketPrice.region,
      price: marketPrice.price,
      unit: marketPrice.unit,
      date: marketPrice.date,
      createdAt: marketPrice.createdAt,
      updatedAt: marketPrice.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.CREATED).json({
      message: 'Market price created successfully',
      data: response,
    });
  }
);

/**
 * Get a single market price by ID
 */
const getMarketPrice = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const marketPrice = await prisma.marketPrice.findUnique({
      where: { id },
    });

    if (!marketPrice) {
      throw new NotFoundError('Market price not found');
    }

    const response: IMarketPriceResponse = {
      id: marketPrice.id,
      crop: marketPrice.crop,
      region: marketPrice.region,
      price: marketPrice.price,
      unit: marketPrice.unit,
      date: marketPrice.date,
      createdAt: marketPrice.createdAt,
      updatedAt: marketPrice.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Market price retrieved successfully',
      data: response,
    });
  }
);

/**
 * Update a market price
 */
const updateMarketPrice = asyncHandler(
  async (
    req: Request<{ id?: string }, {}, Partial<IMarketPriceInput>>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    const { crop, region, price, unit, date } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    // Check if user has ADMIN role
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    const marketPrice = await prisma.marketPrice.findUnique({
      where: { id },
    });

    if (!marketPrice) {
      throw new NotFoundError('Market price not found');
    }

    const updatedMarketPrice = await prisma.marketPrice.update({
      where: { id },
      data: {
        crop: crop ?? marketPrice.crop,
        region: region ?? marketPrice.region,
        price: price ?? marketPrice.price,
        unit: unit ?? marketPrice.unit,
        date: date ? new Date(date) : marketPrice.date,
      },
    });

    const response: IMarketPriceResponse = {
      id: updatedMarketPrice.id,
      crop: updatedMarketPrice.crop,
      region: updatedMarketPrice.region,
      price: updatedMarketPrice.price,
      unit: updatedMarketPrice.unit,
      date: updatedMarketPrice.date,
      createdAt: updatedMarketPrice.createdAt,
      updatedAt: updatedMarketPrice.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Market price updated successfully',
      data: response,
    });
  }
);

/**
 * Delete a market price
 */
const deleteMarketPrice = asyncHandler(
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

    const marketPrice = await prisma.marketPrice.findUnique({
      where: { id },
    });

    if (!marketPrice) {
      throw new NotFoundError('Market price not found');
    }

    await prisma.marketPrice.delete({
      where: { id },
    });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Market price deleted successfully',
    });
  }
);

/**
 * Get all market prices
 */
const getAllMarketPrices = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const marketPrices = await prisma.marketPrice.findMany({
      orderBy: { createdAt: 'desc' },
    });

    const response: IMarketPriceResponse[] = marketPrices.map((price) => ({
      id: price.id,
      crop: price.crop,
      region: price.region,
      price: price.price,
      unit: price.unit,
      date: price.date,
      createdAt: price.createdAt,
      updatedAt: price.updatedAt,
    }));

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Market prices retrieved successfully',
      data: response,
    });
  }
);

/**
 * Delete all market prices
 */
const deleteAllMarketPrices = asyncHandler(
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

    if (!user || user.role !== 'ADMIN') {
      throw new UnauthorizedError('Only admins can delete all market prices');
    }

    await prisma.marketPrice.deleteMany({});

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'All market prices deleted successfully',
    });
  }
);

export {
  createMarketPrice,
  getMarketPrice,
  updateMarketPrice,
  deleteMarketPrice,
  getAllMarketPrices,
  deleteAllMarketPrices,
};
