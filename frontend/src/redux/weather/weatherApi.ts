import { apiSlice } from '../apiSlice';
import { IWeatherDataResponse } from '@/types/weather';

// Adjust this to match your actual response structure
export interface WeatherDataResponse {
  message: string;
  data: IWeatherDataResponse;
}

export interface IFetchWeatherPayload {
  region: string;
}

export interface IFetchWeatherResponse {
  message: string;
  data: {
    region: string;
    date: string;
  };
}

export const weatherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchWeather: builder.mutation<IFetchWeatherResponse, IFetchWeatherPayload>({
      query: (payload) => ({
        url: '/weather/fetch',
        method: 'POST',
        body: payload,
      }),
    }),
    getLatestWeather: builder.query<WeatherDataResponse, string>({
      query: (region) => ({
        url: `/weather/${region}`,
        method: 'GET',
      }),
    }),
    getWeatherByDate: builder.query<
      WeatherDataResponse,
      { region: string; date: string }
    >({
      query: ({ region, date }) => ({
        url: `/weather/${region}/${date}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useFetchWeatherMutation,
  useGetLatestWeatherQuery,
  useGetWeatherByDateQuery,
} = weatherApi;