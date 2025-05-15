import { apiSlice } from '../apiSlice';
import { userLoggedIn, userRegistration } from './authSlice';
import {
  IUserRegistrationResponseData,
  IUserRegistrationData,
} from '@/types/auth';
import { IApiResponse } from '@/types/api';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      IApiResponse<IUserRegistrationResponseData>,
      IUserRegistrationData
    >({
      query: (data) => ({
        url: 'auth/register-user',
        method: 'POST',
        body: data,
        credentials: 'include' as const,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              user: result.data.data,
            })
          );
        } catch (error: unknown) {
          console.log(error);
        }
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
        credentials: 'include' as const,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              user: result.data,
            })
          );
        } catch (error: unknown) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation } = authApi;
