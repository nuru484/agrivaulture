// src/types/api.ts
export const apiSliceTags = ['User','Weather', 'Crop', 'Expense', 'Yield', 'FarmingTip','MarketPrice', 'Dashboard'] as const;

export interface IApiResponse<T> {
  message: string;
  user: T;
}
