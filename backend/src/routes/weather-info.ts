import { Router } from 'express';
import {
  fetchWeather,
  getLatestWeather,
  getWeatherByDate,
} from '../controllers/weather-info';
import { authorizeRole } from '../middlewares/authorize-roles';
import { UserRole } from '../../types/user-profile.types';

const weatherRoutes = Router();

// Fetch and store weather data (admin only)
weatherRoutes.post(
  '/weather/fetch',
  // authorizeRole([UserRole.ADMIN]),
  fetchWeather
);

// Get latest weather data for a region
weatherRoutes.get('/weather/:region', getLatestWeather);

// Get weather data for a specific date
weatherRoutes.get('/weather/:region/:date', getWeatherByDate);

export default weatherRoutes;
