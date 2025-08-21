"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDashboard = void 0;
const prismaClient_1 = __importDefault(require("../config/prismaClient"));
const error_handler_1 = require("../middlewares/error-handler");
const constants_1 = require("../config/constants");
/**
 * Get normal user dashboard data
 */
const getUserDashboard = (0, error_handler_1.asyncHandler)(async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new error_handler_1.UnauthorizedError('Unauthorized, no user provided');
    }
    const user = await prismaClient_1.default.user.findUnique({
        where: { id: userId },
        select: {
            city: true,
            region: true,
            role: true,
        },
    });
    if (!user) {
        throw new error_handler_1.NotFoundError('User not found');
    }
    // Fetch crop records
    const cropRecords = await prismaClient_1.default.cropRecord.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: 5, // Limit to 5 for simplicity
    });
    const cropRecordsResponse = cropRecords.map((record) => ({
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
    const expenses = await prismaClient_1.default.expense.findMany({
        where: { cropRecord: { userId } },
        orderBy: { createdAt: 'desc' },
        take: 5,
    });
    const expensesResponse = expenses.map((expense) => ({
        id: expense.id,
        cropRecordId: expense.cropRecordId,
        item: expense.item,
        cost: expense.cost,
        date: expense.date,
        createdAt: expense.createdAt,
        updatedAt: expense.updatedAt,
    }));
    // Fetch yields
    const yields = await prismaClient_1.default.yield.findMany({
        where: { cropRecord: { userId } },
        orderBy: { createdAt: 'desc' },
        take: 5,
    });
    const yieldsResponse = yields.map((yieldRecord) => ({
        id: yieldRecord.id,
        cropRecordId: yieldRecord.cropRecordId,
        quantity: yieldRecord.quantity,
        unit: yieldRecord.unit,
        date: yieldRecord.date,
        createdAt: yieldRecord.createdAt,
        updatedAt: yieldRecord.updatedAt,
    }));
    // Fetch market prices
    const marketPrices = await prismaClient_1.default.marketPrice.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
    });
    const marketPricesResponse = marketPrices.map((price) => ({
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
    const farmingTips = await prismaClient_1.default.farmingTip.findMany({
        orderBy: { createdAt: 'desc' },
        take: 3,
    });
    const farmingTipsResponse = farmingTips.map((tip) => ({
        id: tip.id,
        tip: tip.tip,
        crop: tip.crop ?? undefined,
        region: tip.region ?? undefined,
        date: tip.date,
        createdAt: tip.createdAt,
        updatedAt: tip.updatedAt,
    }));
    res.status(constants_1.HTTP_STATUS_CODES.OK).json({
        message: 'User dashboard data retrieved successfully',
        data: {
            cropRecords: cropRecordsResponse,
            expenses: expensesResponse,
            yields: yieldsResponse,
            marketPrices: marketPricesResponse,
            farmingTips: farmingTipsResponse,
        },
    });
});
exports.getUserDashboard = getUserDashboard;
