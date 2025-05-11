export const apiSliceTags = [] as const;

export interface IApiResponse<T> {
  message: string;
  data: T;
}
