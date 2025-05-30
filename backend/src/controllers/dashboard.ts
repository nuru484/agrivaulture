import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prismaClient';
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from '../middlewares/error-handler';
import { HTTP_STATUS_CODES } from '../config/constants';
import {
  ICropRecordResponse,
} from '../../types/crop-record.types';
import {
  IExpenseResponse,
} from '../../types/crop-expense.types';
import {
  IYieldResponse,
} from '../../types/crop-yield.types';
import {
  IMarketPriceResponse,
} from '../../types/crop-market-price.types';
import {
  IFarmingTipResponse,
} from '../../types/farming-tip.types';

/**
 * Get normal user dashboard data
 */
const getUserDashboard = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        city: true,
        region: true,
        role: true,
      },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    // Fetch crop records
    const cropRecords = await prisma.cropRecord.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5, // Limit to 5 for simplicity
    });

    const cropRecordsResponse: ICropRecordResponse[] = cropRecords.map((record) => ({
      id: record.id,
      userId: record.userId,
      cropType: record.cropType,
      plantingDate: record.plantingDate,
      harvestingDate: record.harvestingDate,
      notes: record.notes,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    }));

    // Fetch expenses
    const expenses = await prisma.expense.findMany({
      where: { cropRecord: { userId } },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    const expensesResponse: IExpenseResponse[] = expenses.map((expense) => ({
      id: expense.id,
      cropRecordId: expense.cropRecordId,
      item: expense.item,
      cost: expense.cost,
      date: expense.date,
      createdAt: expense.createdAt,
      updatedAt: expense.updatedAt,
    }));

    // Fetch yields
    const yields = await prisma.yield.findMany({
      where: { cropRecord: { userId } },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    const yieldsResponse: IYieldResponse[] = yields.map((yieldRecord) => ({
      id: yieldRecord.id,
      cropRecordId: yieldRecord.cropRecordId,
      quantity: yieldRecord.quantity,
      unit: yieldRecord.unit,
      date: yieldRecord.date,
      createdAt: yieldRecord.createdAt,
      updatedAt: yieldRecord.updatedAt,
    }));

    // Fetch market prices
    const marketPrices = await prisma.marketPrice.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    const marketPricesResponse: IMarketPriceResponse[] = marketPrices.map((price) => ({
      id: price.id,
      crop: price.crop,
      region: price.region,
      price: price.price,
      unit: price.unit,
      date: price.date,
      createdAt: price.createdAt,
      updatedAt: price.updatedAt,
    }));

    // Fetch farming tips
    const farmingTips = await prisma.farmingTip.findMany({
      orderBy: { createdAt: 'desc' },
      take: 3,
    });

    const farmingTipsResponse: IFarmingTipResponse[] = farmingTips.map((tip) => ({
      id: tip.id,
      tip: tip.tip,
      crop: tip.crop ?? undefined,
      region: tip.region ?? undefined,
      date: tip.date,
      createdAt: tip.createdAt,
      updatedAt: tip.updatedAt,
    }));

   
    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'User dashboard data retrieved successfully',
      data: {
        cropRecords: cropRecordsResponse,
        expenses: expensesResponse,
        yields: yieldsResponse,
        marketPrices: marketPricesResponse,
        farmingTips: farmingTipsResponse,
      },
    });
  }
);


export { getUserDashboard };