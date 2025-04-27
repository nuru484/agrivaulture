import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import prisma from '../config/prismaClient';
import {
  asyncHandler,
  NotFoundError,
  UnauthorizedError,
} from '../middlewares/error-handler';
import { HTTP_STATUS_CODES } from '../config/constants';
import { simplifyIWeatherData } from '../utils/simplifyWeatherData';
import { IWeatherData } from '../../types/weather.types';

/**
 * Fetch and store weather data for a region
 */
const fetchWeather = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { region } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new UnauthorizedError('Unauthorized, no user provided');
    }

    if (!region) {
      throw new Error('Region is required');
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    console.log('API Key:', apiKey); // Debugging line
    if (!apiKey) {
      throw new Error('OpenWeather API key is not configured');
    }

    // Step 1: Get coordinates using Geocoding API
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      region
    )}&limit=1&appid=${apiKey}`;

    let geoResponse;
    try {
      geoResponse = await axios.get(geoUrl);
    } catch (error) {
      throw new Error('Failed to retrieve coordinates for the region' + error);
    }

    if (!geoResponse.data || geoResponse.data.length === 0) {
      throw new NotFoundError(`No coordinates found for region: ${region}`);
    }

    const { lat, lon } = geoResponse.data[0];

    // Step 2: Fetch weather data using One Call API
    const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    let weatherResponse;
    try {
      weatherResponse = await axios.get(weatherUrl);
    } catch (error) {
      throw new Error(`Failed to retrieve weather data: ${error}`);
    }

    const data = weatherResponse.data;

    const dt = new Date(data.current.dt * 1000);
    const date = new Date(
      Date.UTC(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate())
    );

    // Step 3: Store or update weather data in database
    await prisma.weather.upsert({
      where: {
        region_date: {
          region,
          date,
        },
      },
      update: {
        data,
      },
      create: {
        region,
        date,
        data,
      },
    });

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Weather data fetched and stored successfully',
      data: { region, date },
    });
  }
);

/**
 * Get the latest weather data for a region
 */
const getLatestWeather = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { region } = req.params;

    const weather = await prisma.weather.findFirst({
      where: { region },
      orderBy: { date: 'desc' },
    });

    if (!weather) {
      throw new NotFoundError(`No weather data found for region: ${region}`);
    }

    if (!weather.data || typeof weather.data !== 'object') {
      throw new Error('Invalid weather data');
    }
    const data = simplifyIWeatherData(weather.data as unknown as IWeatherData);

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Latest weather data retrieved successfully',
      data,
    });
  }
);

/**
 * Get weather data for a region on a specific date
 */
const getWeatherByDate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { region, date: dateStr } = req.params;

    const dateParts = dateStr.split('-').map(Number);
    if (dateParts.length !== 3 || dateParts.some(isNaN)) {
      throw new Error('Invalid date format. Use  DD-MM-YYYY');
    }

    const [day, month, year] = dateParts;
    const date = new Date(Date.UTC(year, month - 1, day));
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    const weather = await prisma.weather.findFirst({
      where: {
        region,
        date,
      },
    });

    if (!weather) {
      throw new NotFoundError(
        `No weather data found for region: ${region} on date: ${dateStr}`
      );
    }

    const data = simplifyIWeatherData(weather.data as unknown as IWeatherData);

    res.status(HTTP_STATUS_CODES.OK).json({
      message: 'Weather data retrieved successfully',
      data,
    });
  }
);

export { fetchWeather, getLatestWeather, getWeatherByDate };
