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
    socialAuth: builder.mutation({
      query: ({ email, name, avatar }) => ({
        url: 'auth/social-auth',
        method: 'POST',
        body: {
          email,
          name,
          avatar,
        },
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
    logOut: builder.query({
      query: () => ({
        url: 'auth/logout',
        method: 'GET',
        credentials: 'include' as const,
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

    loadUser: builder.query({
      query: () => ({
        url: 'auth/me',
        method: 'GET',
        credentials: 'include' as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const userData = result.data.data;
          dispatch(
            userLoggedIn({
              user: userData,
            })
          );
        } catch (error: unknown) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useSocialAuthMutation,
  useLogOutQuery,
} = authApi;
