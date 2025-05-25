// src/redux/crop-cycle/cropRecordApi.ts
import { apiSlice } from '../apiSlice';
import {
  ICropRecordsResponse,
  ICropRecordResponse,
  ICreateCropRecordRequest,
  IUpdateCropRecordRequest,
} from '@/types/crop-cycle/crop-record';

export const cropApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCropRecords: builder.query<ICropRecordsResponse, void>({
      query: () => ({
        url: '/crop-records',
        method: 'GET',
      }),
      providesTags: ['Crop'],
    }),

    getCropRecord: builder.query<ICropRecordResponse, string>({
      query: (id) => ({
        url: `/crop-records/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'Crop', id }],
    }),

    createCropRecord: builder.mutation<
      ICropRecordResponse,
      ICreateCropRecordRequest
    >({
      query: (crop) => ({
        url: '/crop-records',
        method: 'POST',
        body: crop,
      }),
      invalidatesTags: ['Crop'],
    }),

    updateCropRecord: builder.mutation<
      ICropRecordResponse,
      IUpdateCropRecordRequest
    >({
      query: ({ id, ...crop }) => ({
        url: `/crop-records/${id}`,
        method: 'PUT',
        body: crop,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Crop', id },
        'Crop',
      ],
    }),

    deleteCropRecord: builder.mutation<void, string>({
      query: (id) => ({
        url: `/crop-records/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Crop'],
    }),

    deleteAllCropRecords: builder.mutation<void, void>({
      query: () => ({
        url: '/crop-records',
        method: 'DELETE',
      }),
      invalidatesTags: ['Crop'],
    }),
  }),
});

export const {
  useGetAllCropRecordsQuery,
  useGetCropRecordQuery,
  useCreateCropRecordMutation,
  useUpdateCropRecordMutation,
  useDeleteCropRecordMutation,
  useDeleteAllCropRecordsMutation,
} = cropApi;
