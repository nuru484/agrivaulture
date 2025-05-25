// src/types/crop-cycle/crop-expense.ts

export interface IExpense {
  id: string;
  cropRecordId: string;
  item: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateExpenseRequest {
  cropRecordId: string;
  item: string;
  cost: number;
  date: string;
}

export interface IUpdateExpenseRequest extends Partial<ICreateExpenseRequest> {
  id: string;
}

export interface IExpensesResponse {
  message: string;
  data: IExpense[];
}

export interface IExpenseResponse {
  message: string;
  data: IExpense;
}
