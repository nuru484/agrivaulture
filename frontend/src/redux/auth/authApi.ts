import { apiSlice } from '../apiSlice';
import { userLoggedIn, userLoggedOut, userRegistration } from './authSlice';
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
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              user: result.data.user,
            })
          );
        } catch (error: unknown) {
          console.log(error);
        }
      },
    }),

    login: builder.mutation<
      IApiResponse<IUserRegistrationResponseData>,
      { phone: string; password: string }
    >({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            userLoggedIn({
              user: result.data.user,
            })
          );
        } catch (error: unknown) {
          console.log(error);
        }
      },
    }),

    logout: builder.mutation<string, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(userLoggedOut());
        } catch (error: unknown) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation, useLogoutMutation } =
  authApi;
