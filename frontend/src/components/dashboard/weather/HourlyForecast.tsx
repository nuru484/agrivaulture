// src/components/dashboard/weather/HourlyForecast.tsx
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Thermometer, Droplets, Wind, CloudRain } from 'lucide-react';
import { format, parse } from 'date-fns';
import { kelvinToCelsius } from '@/lib/utils';
import Image from 'next/image';

// Define the hourly forecast data interface
interface IHourlyWeatherData {
  datetime: string;
  temperature: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  wind_direction: number;
  wind_gust: number;
  cloud_coverage: number;
  probability_of_precipitation: number;
  rain_volume: number;
  uv_index: number;
  dew_point: number;
  visibility: number;
  weather_condition: string;
  weather_description: string;
  weather_icon: string;
}

interface HourlyForecastProps {
  data: IHourlyWeatherData[];
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  // If no data, show empty state
  if (!data || data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Hourly Forecast</CardTitle>
          <CardDescription>No hourly forecast data available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Thermometer className="h-5 w-5" />
          Hourly Forecast
        </CardTitle>
        <CardDescription>Weather forecast for the next hours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {data.map((hour, index) => (
            <HourlyForecastCard key={index} hour={hour} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function HourlyForecastCard({ hour }: { hour: IHourlyWeatherData }) {
  // Convert temperature from Kelvin to Celsius
  const tempC = kelvinToCelsius(hour.temperature);

  // Parse and format datetime
  let parsedDate: Date;
  try {
    parsedDate = parse(
      hour.datetime,
      "MMMM d, yyyy 'at' h:mm:ss a",
      new Date()
    );
    if (isNaN(parsedDate.getTime())) {
      throw new Error('Invalid date');
    }
  } catch (error) {
    console.log(error);
    console.warn(`Invalid date format for datetime: ${hour.datetime}`);
    parsedDate = new Date(); // Fallback to current date
  }
  const formattedDate = format(parsedDate, 'h:mm a, EEE, MMM d');

  return (
    <div className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Date and weather condition */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="font-medium">{formattedDate}</span>
            <span className="text-sm text-muted-foreground capitalize">
              {hour.weather_description}
            </span>
          </div>
        </div>

        {/* Weather icon */}
        <div className="flex items-center">
          <Image
            src={`/weather-icons/${hour.weather_icon}.png`} // Adjust path to your weather icons
            alt={hour.weather_description}
            width={40}
            height={40}
          />
        </div>

        {/* Temperature */}
        <div className="flex items-center gap-2">
          <Thermometer className="h-4 w-4 text-destructive" />
          <span className="font-medium">{tempC.toFixed(1)}°C</span>
        </div>

        {/* Weather details */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-1">
            <Wind className="h-4 w-4" />
            <span>{hour.wind_speed.toFixed(1)} m/s</span>
          </div>
          <div className="flex items-center gap-1">
            <Droplets className="h-4 w-4" />
            <span>{hour.humidity}%</span>
          </div>
          <div className="flex items-center gap-1">
            <CloudRain className="h-4 w-4" />
            <span>{(hour.probability_of_precipitation * 100).toFixed(0)}%</span>
          </div>
          {hour.rain_volume > 0 && (
            <div className="flex items-center gap-1">
              <CloudRain className="h-4 w-4" />
              <span>{hour.rain_volume.toFixed(1)} mm</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
