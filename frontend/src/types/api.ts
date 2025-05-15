export const apiSliceTags = ['Weather'] as const;

export interface IApiResponse<T> {
  message: string;
  user: T;
}
