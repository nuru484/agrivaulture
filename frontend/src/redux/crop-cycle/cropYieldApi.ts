// src/redux/crop-cycle/cropYieldApi.ts
import { apiSlice } from '../apiSlice';
import {
  IYieldsResponse,
  IYieldResponse,
  ICreateYieldRequest,
  IUpdateYieldRequest,
} from '@/types/crop-cycle/crop-yield';

export const yieldApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllYields: builder.query<IYieldsResponse, void>({
      query: () => ({
        url: '/yields',
        method: 'GET',
      }),
      providesTags: ['Yield'],
    }),

    getYield: builder.query<IYieldResponse, string>({
      query: (id) => ({
        url: `/yields/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'Yield', id }],
    }),

    createYield: builder.mutation<IYieldResponse, ICreateYieldRequest>({
      query: (yieldData) => ({
        url: '/yields',
        method: 'POST',
        body: yieldData,
      }),
      invalidatesTags: ['Yield'],
    }),

    updateYield: builder.mutation<IYieldResponse, IUpdateYieldRequest>({
      query: ({ id, ...yieldData }) => ({
        url: `/yields/${id}`,
        method: 'PUT',
        body: yieldData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Yield', id },
        'Yield',
      ],
    }),

    deleteYield: builder.mutation<void, string>({
      query: (id) => ({
        url: `/yields/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Yield'],
    }),

    deleteAllYields: builder.mutation<void, void>({
      query: () => ({
        url: '/yields',
        method: 'DELETE',
      }),
      invalidatesTags: ['Yield'],
    }),
  }),
});

export const {
  useGetAllYieldsQuery,
  useGetYieldQuery,
  useCreateYieldMutation,
  useUpdateYieldMutation,
  useDeleteYieldMutation,
  useDeleteAllYieldsMutation,
} = yieldApi;