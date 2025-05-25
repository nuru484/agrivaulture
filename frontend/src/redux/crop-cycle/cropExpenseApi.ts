// src/redux/crop-cycle/cropExpenseApi.ts
import { apiSlice } from '../apiSlice';
import {
  IExpensesResponse,
  IExpenseResponse,
  ICreateExpenseRequest,
  IUpdateExpenseRequest,
} from '@/types/crop-cycle/crop-expense';

export const expenseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllExpenses: builder.query<IExpensesResponse, void>({
      query: () => ({
        url: '/expenses',
        method: 'GET',
      }),
      providesTags: ['Expense'],
    }),

    getExpense: builder.query<IExpenseResponse, string>({
      query: (id) => ({
        url: `/expenses/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'Expense', id }],
    }),

    createExpense: builder.mutation<IExpenseResponse, ICreateExpenseRequest>({
      query: (expense) => ({
        url: '/expenses',
        method: 'POST',
        body: expense,
      }),
      invalidatesTags: ['Expense'],
    }),

    updateExpense: builder.mutation<IExpenseResponse, IUpdateExpenseRequest>({
      query: ({ id, ...expense }) => ({
        url: `/expenses/${id}`,
        method: 'PUT',
        body: expense,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Expense', id },
        'Expense',
      ],
    }),

    deleteExpense: builder.mutation<void, string>({
      query: (id) => ({
        url: `/expenses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Expense'],
    }),

    deleteAllExpenses: builder.mutation<void, void>({
      query: () => ({
        url: '/expenses',
        method: 'DELETE',
      }),
      invalidatesTags: ['Expense'],
    }),
  }),
});

export const {
  useGetAllExpensesQuery,
  useGetExpenseQuery,
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
  useDeleteAllExpensesMutation,
} = expenseApi;
