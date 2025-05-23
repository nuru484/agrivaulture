'use client';
import type React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import {
  Cloud,
  Droplets,
  Eye,
  Gauge,
  Info,
  Sunrise,
  Sunset,
  Thermometer,
  Wind,
} from 'lucide-react';
import { formatTime, kelvinToCelsius } from '@/lib/utils';
import Image from 'next/image';
import { CurrentWeatherProps } from '@/types/weather';

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  // Fallback values for missing data
  const defaultData = {
    datetime: new Date().toISOString(),
    temperature: 273.15, // 0°C
    feels_like: 273.15,
    humidity: 0,
    pressure: 1013,
    wind_speed: 0,
    wind_direction: 0,
    wind_gust: 0,
    cloud_coverage: 0,
    visibility: 10000,
    uv_index: 0,
    sunrise: new Date().toISOString(),
    sunset: new Date().toISOString(),
    weather_condition: 'Unknown',
    weather_description: 'No data available',
    weather_icon: '01d',
  };
  const safeData = { ...defaultData, ...data };

  // Convert temperatures from Kelvin to Celsius
  const tempC = kelvinToCelsius(safeData.temperature);
  const feelsLikeC = kelvinToCelsius(safeData.feels_like);

  // Format sunrise and sunset times

  const sunriseTime = formatTime(safeData.sunrise);
  const sunsetTime = formatTime(safeData.sunset);

  // Get wind direction as compass point
  const windDirection = getWindDirection(safeData.wind_direction);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">Current Weather</CardTitle>
            <CardDescription>
              {safeData?.datetime.replace(' at ', ' ')}
            </CardDescription>
          </div>
          <Badge className="text-sm">{safeData.weather_condition}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main weather display */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <Image
                src={`https://openweathermap.org/img/wn/${safeData.weather_icon}.png`}
                alt={safeData.weather_description}
                width={100}
                height={100}
              />
              <span className="text-sm text-muted-foreground capitalize">
                {safeData.weather_description}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold">{tempC.toFixed(1)}°C</span>
              <span className="text-sm text-muted-foreground">
                Feels like {feelsLikeC.toFixed(1)}°C
              </span>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:block h-auto"
          />

          {/* Weather details grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
            <WeatherDetail
              icon={<Wind className="h-4 w-4" />}
              label="Wind"
              value={`${safeData.wind_speed.toFixed(1)} m/s ${windDirection}`}
              tooltip={`Gusts up to ${safeData.wind_gust.toFixed(1)} m/s`}
            />

            <WeatherDetail
              icon={<Droplets className="h-4 w-4" />}
              label="Humidity"
              value={`${safeData.humidity}%`}
            />

            <WeatherDetail
              icon={<Gauge className="h-4 w-4" />}
              label="Pressure"
              value={`${safeData.pressure} hPa`}
            />

            <WeatherDetail
              icon={<Cloud className="h-4 w-4" />}
              label="Cloud Cover"
              value={`${safeData.cloud_coverage}%`}
            />

            <WeatherDetail
              icon={<Eye className="h-4 w-4" />}
              label="Visibility"
              value={`${(safeData.visibility / 1000).toFixed(1)} km`}
            />

            <WeatherDetail
              icon={<Thermometer className="h-4 w-4" />}
              label="UV Index"
              value={safeData.uv_index.toString()}
              tooltip={getUVIndexDescription(safeData.uv_index)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <div className="flex items-center gap-2">
          <Sunrise className="h-4 w-4 text-amber-500" />
          <span className="text-sm">Sunrise: {sunriseTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Sunset className="h-4 w-4 text-orange-500" />
          <span className="text-sm">Sunset: {sunsetTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

// Helper component for weather details
function WeatherDetail({
  icon,
  label,
  value,
  tooltip,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tooltip?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div className="flex flex-col">
        <span className="text-sm text-muted-foreground">{label}</span>
        <div className="flex items-center gap-1">
          <span className="font-medium">{value}</span>
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-3 w-3 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function to convert wind direction in degrees to compass direction
function getWindDirection(degrees: number): string {
  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

// Helper function to get UV index description
function getUVIndexDescription(uvIndex: number): string {
  if (uvIndex <= 2) return 'Low';
  if (uvIndex <= 5) return 'Moderate';
  if (uvIndex <= 7) return 'High';
  if (uvIndex <= 10) return 'Very High';
  return 'Extreme';
}
