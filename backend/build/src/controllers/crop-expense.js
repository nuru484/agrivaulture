"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllExpenses = exports.getAllExpenses = exports.deleteExpense = exports.updateExpense = exports.getExpense = exports.createExpense = void 0;
const prismaClient_1 = __importDefault(require("../config/prismaClient"));
const error_handler_1 = require("../middlewares/error-handler");
const constants_1 = require("../config/constants");
/**
 * Create a new expense
 */
const createExpense = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { cropRecordId, item, cost, date } = req.body;
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
        throw new error_handler_1.UnauthorizedError('You do not have permission to add expenses to this crop record');
    }
    const expense = await prismaClient_1.default.expense.create({
        data: {
            cropRecord: { connect: { id: cropRecordId } },
            item,
            cost,
            date: new Date(date),
        },
    });
    const response = {
        id: expense.id,
        cropRecordId: expense.cropRecordId,
        item: expense.item,
        cost: expense.cost,
        date: expense.date,
        createdAt: expense.createdAt,
        updatedAt: expense.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.CREATED).json({
        message: 'Expense created successfully',
        data: response,
    });
});
exports.createExpense = createExpense;
/**
 * Get a single expense by ID
 */
const getExpense = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const expense = await prismaClient_1.default.expense.findUnique({
        where: { id },
        include: { cropRecord: { select: { userId: true } } },
    });
    if (!expense) {
        throw new error_handler_1.NotFoundError('Expense not found');
    }
    if (expense.cropRecord.userId !== userId && req.user?.role !== 'ADMIN') {
        throw new error_handler_1.UnauthorizedError('You do not have permission to view this expense');
    }
    const response = {
        id: expense.id,
        cropRecordId: expense.cropRecordId,
        item: expense.item,
        cost: expense.cost,
        date: expense.date,
        createdAt: expense.createdAt,
        updatedAt: expense.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Expense retrieved successfully',
        data: response,
    });
});
exports.getExpense = getExpense;
/**
 * Update an expense
 */
const updateExpense = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const { item, cost, date } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const expense = await prismaClient_1.default.expense.findUnique({
        where: { id },
        include: { cropRecord: { select: { userId: true } } },
    });
    if (!expense) {
        throw new error_handler_1.NotFoundError('Expense not found');
    }
    if (expense.cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('You do not have permission to update this expense');
    }
    const updatedExpense = await prismaClient_1.default.expense.update({
        where: { id },
        data: {
            item: item ?? expense.item,
            cost: cost ?? expense.cost,
            date: date ? new Date(date) : expense.date,
        },
    });
    const response = {
        id: updatedExpense.id,
        cropRecordId: updatedExpense.cropRecordId,
        item: updatedExpense.item,
        cost: updatedExpense.cost,
        date: updatedExpense.date,
        createdAt: updatedExpense.createdAt,
        updatedAt: updatedExpense.updatedAt,
    };
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Expense updated successfully',
        data: response,
    });
});
exports.updateExpense = updateExpense;
/**
 * Delete an expense
 */
const deleteExpense = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const expense = await prismaClient_1.default.expense.findUnique({
        where: { id },
        include: { cropRecord: { select: { userId: true } } },
    });
    if (!expense) {
        throw new error_handler_1.NotFoundError('Expense not found');
    }
    if (expense.cropRecord.userId !== userId) {
        throw new error_handler_1.UnauthorizedError('You do not have permission to delete this expense');
    }
    await prismaClient_1.default.expense.delete({
        where: { id },
    });
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Expense deleted successfully',
    });
});
exports.deleteExpense = deleteExpense;
/**
 * Get all expenses
 */
const getAllExpenses = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const expenses = await prismaClient_1.default.expense.findMany({
        where: {
            cropRecord: { userId },
        },
        orderBy: { createdAt: 'desc' },
    });
    const response = expenses.map((expense) => ({
        id: expense.id,
        cropRecordId: expense.cropRecordId,
        item: expense.item,
        cost: expense.cost,
        date: expense.date,
        createdAt: expense.createdAt,
        updatedAt: expense.updatedAt,
    }));
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'Expenses retrieved successfully',
        data: response,
    });
});
exports.getAllExpenses = getAllExpenses;
/**
 * Delete all expenses
 */
const deleteAllExpenses = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    // Check if user has ADMIN role
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: { role: true },
    });
    await prismaClient_1.default.expense.deleteMany({});
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'All expenses deleted successfully',
    });
});
exports.deleteAllExpenses = deleteAllExpenses;
