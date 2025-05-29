// src/types/api.ts
export const apiSliceTags = ['Weather', 'Crop', 'Expense', 'Yield'] as const;

export interface IApiResponse<T> {
  message: string;
  user: T;
}
