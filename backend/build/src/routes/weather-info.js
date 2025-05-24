"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weather_info_1 = require("../controllers/weather-info");
const weatherRoutes = (0, express_1.Router)();
// Fetch and store weather data (admin only)
weatherRoutes.post('/weather/fetch', 
// authorizeRole([UserRole.ADMIN]),
weather_info_1.fetchWeather);
// Get latest weather data for a region
weatherRoutes.get('/weather/:region', weather_info_1.getLatestWeather);
// Get weather data for a specific date
weatherRoutes.get('/weather/:region/:date', weather_info_1.getWeatherByDate);
exports.default = weatherRoutes;
