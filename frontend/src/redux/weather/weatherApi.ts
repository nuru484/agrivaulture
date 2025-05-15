// src/redux/weather/weatherApi.ts
import { apiSlice } from '../apiSlice';
import { IWeatherDataResponse } from '@/types/weather';

// Adjust this to match your actual response structure
export interface WeatherDataResponse {
  message: string;
  data: IWeatherDataResponse;
}

export const weatherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLatestWeather: builder.query<WeatherDataResponse, string>({
      // `region` is a string like "Tamale, GHA"
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

export const { useGetLatestWeatherQuery, useGetWeatherByDateQuery } =
  weatherApi;
