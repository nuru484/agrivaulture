import { apiSlice } from '../apiSlice';
import {
  IMarketPriceResponse,
  IMarketPricesResponse,
  ICreateMarketPriceRequest,
  IUpdateMarketPriceRequest,
} from '@/types/market-prices/market-price';

export const marketPriceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMarketPrices: builder.query<IMarketPricesResponse, void>({
      query: () => ({
        url: '/market-prices',
        method: 'GET',
      }),
      providesTags: ['MarketPrice'],
    }),

    getMarketPrice: builder.query<IMarketPriceResponse, string>({
      query: (id) => ({
        url: `/market-prices/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'MarketPrice', id }],
    }),

    createMarketPrice: builder.mutation<IMarketPriceResponse, ICreateMarketPriceRequest>({
      query: (price) => ({
        url: '/market-prices',
        method: 'POST',
        body: price,
      }),
      invalidatesTags: ['MarketPrice'],
    }),

    updateMarketPrice: builder.mutation<IMarketPriceResponse, IUpdateMarketPriceRequest>({
      query: ({ id, ...price }) => ({
        url: `/market-prices/${id}`,
        method: 'PUT',
        body: price,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'MarketPrice', id },
        'MarketPrice',
      ],
    }),

    deleteMarketPrice: builder.mutation<void, string>({
      query: (id) => ({
        url: `/market-prices/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['MarketPrice'],
    }),

    deleteAllMarketPrices: builder.mutation<void, void>({
      query: () => ({
        url: '/market-prices',
        method: 'DELETE',
      }),
      invalidatesTags: ['MarketPrice'],
    }),
  }),
});

export const {
  useGetAllMarketPricesQuery,
  useGetMarketPriceQuery,
  useCreateMarketPriceMutation,
  useUpdateMarketPriceMutation,
  useDeleteMarketPriceMutation,
  useDeleteAllMarketPricesMutation,
} = marketPriceApi;