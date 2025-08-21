"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/crop-expense.ts
const express_1 = require("express");
const crop_expense_1 = require("../controllers/crop-expense");
const cropExpenseRoutes = (0, express_1.Router)();
// Create a new expense
cropExpenseRoutes.post('/expenses', crop_expense_1.createExpense);
// Get a single expense by ID
cropExpenseRoutes.get('/expenses/:id', crop_expense_1.getExpense);
// Update an expense by ID
cropExpenseRoutes.put('/expenses/:id', crop_expense_1.updateExpense);
// Delete an expense by ID
cropExpenseRoutes.delete('/expenses/:id', crop_expense_1.deleteExpense);
// Get all expenses
cropExpenseRoutes.get('/expenses', crop_expense_1.getAllExpenses);
// Delete all expenses
cropExpenseRoutes.delete('/expenses', crop_expense_1.deleteAllExpenses);
exports.default = cropExpenseRoutes;
