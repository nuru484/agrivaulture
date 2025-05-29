// src/types/api.ts
export const apiSliceTags = ['Weather', 'Crop', 'Expense', 'Yield', 'FarmingTip','MarketPrice'] as const;

export interface IApiResponse<T> {
  message: string;
  user: T;
}
