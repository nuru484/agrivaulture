import { Router } from 'express';
import {
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
  getAllExpenses,
  deleteAllExpenses,
} from '../controllers/crop-expense';

const cropExpenseRoutes = Router();

// Create a new expense
cropExpenseRoutes.post('/expenses', createExpense);

// Get a single expense by ID
cropExpenseRoutes.get('/expenses/:id', getExpense);

// Update an expense by ID
cropExpenseRoutes.put('/expenses/:id', updateExpense);

// Delete an expense by ID
cropExpenseRoutes.delete('/expenses/:id', deleteExpense);

// Get all expenses
cropExpenseRoutes.get('/expenses', getAllExpenses);

// Delete all expenses
cropExpenseRoutes.delete('/expenses', deleteAllExpenses);

export default cropExpenseRoutes;
