import { apiSlice } from './apiSlice';
import { ICropRecord } from '@/types/crop-cycle/crop-record';
import { IExpense } from '@/types/crop-cycle/crop-expense';
import { IYield } from '@/types/crop-cycle/crop-yield';
import { IMarketPrice } from '@/types/market-prices/market-price';
import { IFarmingTip } from '@/types/farming-tips/farming-tip';
import { IUser } from '@/types/user';

interface IUserDashboardResponse {
  message: string;
  data: {
    cropRecords: ICropRecord[];
    expenses: IExpense[];
    yields: IYield[];
    marketPrices: IMarketPrice[];
    farmingTips: IFarmingTip[];
  };
}

interface IAdminDashboardResponse {
  message: string;
  data: {
    totalUsers: number;
    users: IUser[];
    cropRecords: ICropRecord[];
    expenses: IExpense[];
    yields: IYield[];
    marketPrices: IMarketPrice[];
    farmingTips: IFarmingTip[];
  };
}

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserDashboard: builder.query<IUserDashboardResponse, void>({
      query: () => ({
        url: '/dashboard/user',
        method: 'GET',
      }),
      providesTags: ['Dashboard'],
    }),
    getAdminDashboard: builder.query<IAdminDashboardResponse, void>({
      query: () => ({
        url: '/dashboard/admin',
        method: 'GET',
      }),
      providesTags: ['Dashboard'],
    }),
  }),
});

export const {
  useGetUserDashboardQuery,
  useGetAdminDashboardQuery,
} = dashboardApi;