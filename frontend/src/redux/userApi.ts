// src/redux/userApi.ts
import { apiSlice } from './apiSlice';
import {
  IUsersResponse,
  IUserResponse,
  ITotalUsersResponse,
  IUpdateUserRoleRequest,
} from '@/types/user';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTotalUsers: builder.query<ITotalUsersResponse, void>({
      query: () => ({
        url: '/users/count',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    getUsersList: builder.query<IUsersResponse, void>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    updateUserRole: builder.mutation<IUserResponse, IUpdateUserRoleRequest>({
      query: ({ id, role }) => ({
        url: `/users/${id}/role`,
        method: 'PUT',
        body: { role },
      }),
      invalidatesTags: ['User'],
    }),

    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetTotalUsersQuery,
  useGetUsersListQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = userApi;