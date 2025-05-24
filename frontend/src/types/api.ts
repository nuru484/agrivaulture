export const apiSliceTags = ['Weather', 'Crops', 'Crop'] as const;

export interface IApiResponse<T> {
  message: string;
  user: T;
}
