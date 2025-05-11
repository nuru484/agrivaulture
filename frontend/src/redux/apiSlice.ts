import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from './auth/authSlice';
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
      // unwrap your API wrapper so result.data is directly your user payload
      transformResponse: (
        response: IApiResponse<IUserRegistrationResponseData>
      ) => response.data,

      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const { data: user } = await queryFulfilled;
          dispatch(userLoggedIn({ user }));
        } catch (err) {
          console.error('refreshToken failed:', err);
        }
      },
    }),
  }),
});

export const { useRefreshTokenMutation } = apiSlice;
