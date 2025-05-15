import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn, userLoggedOut } from './auth/authSlice';
import { apiSliceTags } from '@/types/api';
import type { IUserRegistrationResponseData } from '@/types/auth';
import type { IApiResponse } from '@/types/api';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
    credentials: 'include',
  }),
  tagTypes: apiSliceTags,

  endpoints: (builder) => ({
    refreshToken: builder.mutation<IUserRegistrationResponseData, void>({
      query: () => ({
        url: 'auth/refresh-token',
        method: 'POST',
      }),
      transformResponse: (
        response: IApiResponse<IUserRegistrationResponseData>
      ) => response.data,

      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const { data: user } = await queryFulfilled;
          dispatch(userLoggedIn({ user }));
        } catch (err: unknown) {
          console.error('refreshToken failed:', err);
          if (err && typeof err === 'object' && 'status' in err && (err as { status?: number }).status === 401) {
            dispatch(userLoggedOut());
          }
        }
      },
    }),
  }),
});

export const { useRefreshTokenMutation } = apiSlice;