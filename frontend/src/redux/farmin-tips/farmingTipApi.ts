import { apiSlice } from '../apiSlice';
import {
  IFarmingTipResponse,
  IFarmingTipsResponse,
  ICreateFarmingTipRequest,
  IUpdateFarmingTipRequest,
} from '@/types/farming-tips/farming-tip';

export const farmingTipApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFarmingTips: builder.query<IFarmingTipsResponse, void>({
      query: () => ({
        url: '/farming-tips',
        method: 'GET',
      }),
      providesTags: ['FarmingTip'],
    }),

    getFarmingTip: builder.query<IFarmingTipResponse, string>({
      query: (id) => ({
        url: `/farming-tips/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'FarmingTip', id }],
    }),

    createFarmingTip: builder.mutation<IFarmingTipResponse, ICreateFarmingTipRequest>({
      query: (tip) => ({
        url: '/farming-tips',
        method: 'POST',
        body: tip,
      }),
      invalidatesTags: ['FarmingTip'],
    }),

    updateFarmingTip: builder.mutation<IFarmingTipResponse, IUpdateFarmingTipRequest>({
      query: ({ id, ...tip }) => ({
        url: `/farming-tips/${id}`,
        method: 'PUT',
        body: tip,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'FarmingTip', id },
        'FarmingTip',
      ],
    }),

    deleteFarmingTip: builder.mutation<void, string>({
      query: (id) => ({
        url: `/farming-tips/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['FarmingTip'],
    }),

    deleteAllFarmingTips: builder.mutation<void, void>({
      query: () => ({
        url: '/farming-tips',
        method: 'DELETE',
      }),
      invalidatesTags: ['FarmingTip'],
    }),
  }),
});

export const {
  useGetAllFarmingTipsQuery,
  useGetFarmingTipQuery,
  useCreateFarmingTipMutation,
  useUpdateFarmingTipMutation,
  useDeleteFarmingTipMutation,
  useDeleteAllFarmingTipsMutation,
} = farmingTipApi;