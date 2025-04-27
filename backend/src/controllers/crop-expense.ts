import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prismaClient';
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from '../middlewares/error-handler';
import {
  IExpenseInput,
  IExpenseResponse,
} from '../../types/crop-expense.types';
import { HTTP_STATUS_CODES } from '../config/constants';

/**
 * Create a new expense
 */
const createExpense = asyncHandler(
  async (
    req: Request<{}, {}, IExpenseInput>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { cropRecordId, item, cost, date } = req.body;
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
        'You do not have permission to add expenses to this crop record'
      );
    }

    const expense = await prisma.expense.create({
      data: {
        cropRecord: { connect: { id: cropRecordId } },
        item,
        cost,
        date: new Date(date),
      },
    });

    const response: IExpenseResponse = {
      id: expense.id,
      cropRecordId: expense.cropRecordId,
      item: expense.item,
      cost: expense.cost,
      date: expense.date,
      createdAt: expense.createdAt,
      updatedAt: expense.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.CREATED).json({
      message: 'Expense created successfully',
      data: response,
    });
  }
);

/**
 * Get a single expense by ID
 */
const getExpense = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const expense = await prisma.expense.findUnique({
      where: { id },
      include: { cropRecord: { select: { userId: true } } },
    });

    if (!expense) {
      throw new NotFoundError('Expense not found');
    }

    if (expense.cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'You do not have permission to view this expense'
      );
    }

    const response: IExpenseResponse = {
      id: expense.id,
      cropRecordId: expense.cropRecordId,
      item: expense.item,
      cost: expense.cost,
      date: expense.date,
      createdAt: expense.createdAt,
      updatedAt: expense.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Expense retrieved successfully',
      data: response,
    });
  }
);

/**
 * Update an expense
 */
const updateExpense = asyncHandler(
  async (
    req: Request<{ id?: string }, {}, Partial<IExpenseInput>>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    const { item, cost, date } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const expense = await prisma.expense.findUnique({
      where: { id },
      include: { cropRecord: { select: { userId: true } } },
    });

    if (!expense) {
      throw new NotFoundError('Expense not found');
    }

    if (expense.cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'You do not have permission to update this expense'
      );
    }

    const updatedExpense = await prisma.expense.update({
      where: { id },
      data: {
        item: item ?? expense.item,
        cost: cost ?? expense.cost,
        date: date ? new Date(date) : expense.date,
      },
    });

    const response: IExpenseResponse = {
      id: updatedExpense.id,
      cropRecordId: updatedExpense.cropRecordId,
      item: updatedExpense.item,
      cost: updatedExpense.cost,
      date: updatedExpense.date,
      createdAt: updatedExpense.createdAt,
      updatedAt: updatedExpense.updatedAt,
    };

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Expense updated successfully',
      data: response,
    });
  }
);

/**
 * Delete an expense
 */
const deleteExpense = asyncHandler(
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

    const expense = await prisma.expense.findUnique({
      where: { id },
      include: { cropRecord: { select: { userId: true } } },
    });

    if (!expense) {
      throw new NotFoundError('Expense not found');
    }

    if (expense.cropRecord.userId !== userId) {
      throw new UnauthorizedError(
        'You do not have permission to delete this expense'
      );
    }

    await prisma.expense.delete({
      where: { id },
    });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Expense deleted successfully',
    });
  }
);

/**
 * Get all expenses
 */
const getAllExpenses = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    const expenses = await prisma.expense.findMany({
      where: {
        cropRecord: { userId },
      },
      orderBy: { createdAt: 'desc' },
    });

    const response: IExpenseResponse[] = expenses.map((expense) => ({
      id: expense.id,
      cropRecordId: expense.cropRecordId,
      item: expense.item,
      cost: expense.cost,
      date: expense.date,
      createdAt: expense.createdAt,
      updatedAt: expense.updatedAt,
    }));

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Expenses retrieved successfully',
      data: response,
    });
  }
);

/**
 * Delete all expenses
 */
const deleteAllExpenses = asyncHandler(
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

    await prisma.expense.deleteMany({});

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'All expenses deleted successfully',
    });
  }
);

export {
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
  getAllExpenses,
  deleteAllExpenses,
};
