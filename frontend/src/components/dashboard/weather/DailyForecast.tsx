'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CalendarDays,
  Cloud,
  CloudRain,
  Droplets,
  Sunrise,
  Sunset,
  Thermometer,
  Wind,
} from 'lucide-react';
import { format, parseISO, parse } from 'date-fns';
import { kelvinToCelsius, formatTime } from '@/lib/utils';
import Image from 'next/image';

// Define the simplified weather data interface
export interface ISimplifiedWeatherData {
  timezone: string;
  timezone_offset: number;
  current_weather: unknown;
  daily_forecast: Array<{
    datetime: string;
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: number;
    temperature: {
      day: number;
      morning: number;
      evening: number;
      night: number;
      maximum: number;
      minimum: number;
    };
    feels_like: {
      day: number;
      morning: number;
      evening: number;
      night: number;
    };
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
    weather_condition: string;
    weather_description: string;
    weather_icon: string;
    summary: string;
  }>;
  hourly_forecast: Array<unknown>;
}

interface DailyForecastProps {
  data: Array<{
    date: string;
    temperature_min: number;
    temperature_max: number;
    humidity: number;
    wind_speed: number;
    precipitation_probability: number;
    precipitation_amount: number;
    weather_condition: string;
    weather_description: string;
    weather_icon: string;
    sunrise: string;
    sunset: string;
  }>;
}

// Helper function to transform daily_forecast to DailyForecastProps data
function transformDailyForecast(
  dailyForecast: ISimplifiedWeatherData['daily_forecast']
): DailyForecastProps['data'] {
  return dailyForecast.map((day) => {
    // Parse the non-ISO date string for datetime
    let parsedDate: Date;
    try {
      parsedDate = parse(
        day.datetime,
        "MMMM d, yyyy 'at' h:mm:ss a",
        new Date()
      );
      if (isNaN(parsedDate.getTime())) {
        throw new Error('Invalid date');
      }
    } catch (error) {
      console.warn(`Invalid date format for datetime: ${day.datetime}`);
      parsedDate = new Date(); // Fallback to current date
      console.log(error);
    }

    // Parse sunrise and sunset
    let parsedSunrise: Date;
    let parsedSunset: Date;
    try {
      parsedSunrise = parse(
        day.sunrise,
        "MMMM d, yyyy 'at' h:mm:ss a",
        new Date()
      );
      parsedSunset = parse(
        day.sunset,
        "MMMM d, yyyy 'at' h:mm:ss a",
        new Date()
      );
      if (isNaN(parsedSunrise.getTime()) || isNaN(parsedSunset.getTime())) {
        throw new Error('Invalid sunrise/sunset');
      }
    } catch (error) {
      console.log(error);
      console.warn(
        `Invalid date format for sunrise/sunset: ${day.sunrise}, ${day.sunset}`
      );
      parsedSunrise = new Date();
      parsedSunset = new Date();
    }

    return {
      date: parsedDate.toISOString(),
      temperature_min: day.temperature?.minimum || 273.15,
      temperature_max: day.temperature?.maximum || 273.15,
      humidity: day.humidity || 0,
      wind_speed: day.wind_speed || 0,
      precipitation_probability: day.probability_of_precipitation || 0,
      precipitation_amount: day.rain_volume || 0,
      weather_condition: day.weather_condition || 'Unknown',
      weather_description: day.weather_description || 'No data',
      weather_icon: day.weather_icon || '01d',
      sunrise: parsedSunrise.toISOString(),
      sunset: parsedSunset.toISOString(),
    };
  });
}

export default function DailyForecast({
  data: rawData,
}: {
  data: ISimplifiedWeatherData['daily_forecast'];
}) {
  // Transform the raw daily_forecast data
  const data = transformDailyForecast(rawData);

  // If no data, show empty state
  if (!data || data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>7-Day Forecast</CardTitle>
          <CardDescription>No forecast data available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              7-Day Forecast
            </CardTitle>
            <CardDescription>
              Weather forecast for the next 7 days
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {data.map((day, index) => (
            <DailyForecastCard key={index} day={day} isToday={index === 0} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function DailyForecastCard({
  day,
  isToday,
}: {
  day: DailyForecastProps['data'][0];
  isToday: boolean;
}) {
  // Convert temperatures from Kelvin to Celsius
  const minTempC = kelvinToCelsius(day.temperature_min);
  const maxTempC = kelvinToCelsius(day.temperature_max);

  // Format date
  const date = parseISO(day.date);
  const formattedDate = format(date, 'EEEE, MMM d');

  return (
    <div className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Date and weather condition */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-medium">{formattedDate}</span>
              {isToday && <Badge variant="outline">Today</Badge>}
            </div>
            <span className="text-sm text-muted-foreground capitalize">
              {day.weather_description}
            </span>
          </div>
        </div>

        {/* Weather icon */}
        <div className="flex items-center">
          <Image
            src={`/profile.jpg`}
            alt={day.weather_description}
            width={40}
            height={40}
          />
        </div>

        {/* Temperature range */}
        <div className="flex items-center gap-2">
          <Thermometer className="h-4 w-4 text-destructive" />
          <span className="font-medium">{maxTempC.toFixed(1)}°C</span>
          <span className="text-muted-foreground">/</span>
          <Thermometer className="h-4 w-4 text-blue-500" />
          <span className="font-medium">{minTempC.toFixed(1)}°C</span>
        </div>

        {/* Weather details */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-1">
            <Wind className="h-4 w-4" />
            <span>{day.wind_speed.toFixed(1)} m/s</span>
          </div>

          <div className="flex items-center gap-1">
            <Droplets className="h-4 w-4" />
            <span>{day.humidity}%</span>
          </div>

          <div className="flex items-center gap-1">
            <CloudRain className="h-4 w-4" />
            <span>{(day.precipitation_probability * 100).toFixed(0)}%</span>
          </div>

          {day.precipitation_amount > 0 && (
            <div className="flex items-center gap-1">
              <Cloud className="h-4 w-4" />
              <span>{day.precipitation_amount.toFixed(1)} mm</span>
            </div>
          )}
        </div>

        {/* Sun times */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Sunrise className="h-4 w-4 text-amber-500" />
            <span className="text-sm">{formatTime(day.sunrise)}</span>
          </div>

          <div className="flex items-center gap-1">
            <Sunset className="h-4 w-4 text-orange-500" />
            <span className="text-sm">{formatTime(day.sunset)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
