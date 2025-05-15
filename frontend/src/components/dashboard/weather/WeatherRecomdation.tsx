'use client';
import type React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  AlertCircle,
  CloudRain,
  Droplets,
  Leaf,
  Sun,
  Thermometer,
  Wind,
} from 'lucide-react';
import { kelvinToCelsius } from '@/lib/utils';

// Define the simplified weather data interface (as provided)
export interface ISimplifiedWeatherData {
  timezone: string;
  timezone_offset: number;
  current_weather: {
    datetime: string;
    temperature: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    wind_direction: number;
    wind_gust: number;
    cloud_coverage: number;
    visibility: number;
    uv_index: number;
    sunrise: string;
    sunset: string;
    weather_condition: string;
    weather_description: string;
    weather_icon: string;
  };
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
  hourly_forecast: Array<{
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
  }>;
}

interface WeatherRecommendationProps {
  data: {
    current: {
      temperature: number;
      humidity: number;
      wind_speed: number;
      weather_condition: string;
      uv_index: number;
    };
    hourly?: Array<{
      datetime: string;
      precipitation_probability: number;
      precipitation_amount: number;
      weather_condition: string;
    }>;
  };
}

// Helper function to transform backend data to WeatherRecommendationProps
function transformWeatherData(
  data: ISimplifiedWeatherData
): WeatherRecommendationProps['data'] {
  return {
    current: {
      temperature: data.current_weather.temperature,
      humidity: data.current_weather.humidity,
      wind_speed: data.current_weather.wind_speed,
      weather_condition: data.current_weather.weather_condition,
      uv_index: data.current_weather.uv_index,
    },
    hourly: data.hourly_forecast.map((hour) => ({
      datetime: hour.datetime,
      precipitation_probability: hour.probability_of_precipitation,
      precipitation_amount: hour.rain_volume,
      weather_condition: hour.weather_condition,
    })),
  };
}

export default function WeatherRecommendation({
  data: rawData,
}: {
  data: ISimplifiedWeatherData;
}) {
  // Transform the raw data to match WeatherRecommendationProps
  const data = transformWeatherData(rawData);

  // Get current weather data
  const { current } = data;
  const tempC = kelvinToCelsius(current.temperature);

  // Check if rain is expected in the next 12 hours
  const rainExpected = data.hourly
    ?.slice(0, 12)
    .some(
      (hour) =>
        hour.precipitation_probability > 0.3 ||
        hour.precipitation_amount > 0 ||
        hour.weather_condition.toLowerCase().includes('rain')
    );

  // Generate recommendations based on weather conditions
  const recommendations = generateRecommendations(
    tempC,
    current.humidity,
    current.wind_speed,
    current.weather_condition,
    current.uv_index,
    rainExpected ?? false
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-500" />
          Agricultural Recommendations
        </CardTitle>
        <CardDescription>
          Weather-based suggestions for your farm operations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.alert && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Weather Alert</AlertTitle>
            <AlertDescription>{recommendations.alert}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <h3 className="font-medium">Today&apos;s Summary</h3>
          <p className="text-sm text-muted-foreground">
            {recommendations.summary}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Recommended Activities</h3>
          <ul className="space-y-2">
            {recommendations.activities.map((activity, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Badge variant="outline" className="mt-0.5">
                  {activity.icon}
                </Badge>
                {activity.text}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

// Helper function to generate recommendations based on weather conditions
function generateRecommendations(
  temperature: number,
  humidity: number,
  windSpeed: number,
  weatherCondition: string,
  uvIndex: number,
  rainExpected: boolean
) {
  const recommendations = {
    alert: '',
    summary: '',
    activities: [] as Array<{ icon: React.ReactNode; text: string }>,
  };

  // Weather condition in lowercase for easier comparison
  const condition = weatherCondition.toLowerCase();

  // Set alert for extreme conditions
  if (temperature > 35) {
    recommendations.alert =
      'Extreme heat alert! Ensure proper hydration for crops and workers.';
  } else if (temperature < 0) {
    recommendations.alert =
      'Frost alert! Protect sensitive crops from freezing temperatures.';
  } else if (windSpeed > 15) {
    recommendations.alert =
      'High wind alert! Secure equipment and protect young plants.';
  }

  // Generate summary based on overall conditions
  if (condition.includes('rain') || condition.includes('drizzle')) {
    recommendations.summary = `Rainy conditions today with ${temperature.toFixed(
      1
    )}°C. Postpone activities that require dry conditions.`;
  } else if (condition.includes('cloud')) {
    recommendations.summary = `Cloudy day with ${temperature.toFixed(
      1
    )}°C. Good conditions for most field work.`;
  } else if (condition.includes('clear') || condition.includes('sun')) {
    recommendations.summary = `Clear and sunny with ${temperature.toFixed(
      1
    )}°C. Excellent day for most agricultural activities.`;
  } else if (condition.includes('snow') || condition.includes('sleet')) {
    recommendations.summary = `Snowy conditions with ${temperature.toFixed(
      1
    )}°C. Limited outdoor activities recommended.`;
  } else if (condition.includes('fog') || condition.includes('mist')) {
    recommendations.summary = `Foggy conditions with ${temperature.toFixed(
      1
    )}°C. Exercise caution with machinery operation.`;
  } else {
    recommendations.summary = `Current temperature is ${temperature.toFixed(
      1
    )}°C with ${humidity}% humidity.`;
  }

  // Add rain forecast if applicable
  if (rainExpected && !condition.includes('rain')) {
    recommendations.summary += ' Rain expected later today.';
  }

  // Generate activity recommendations
  if (condition.includes('rain') || condition.includes('drizzle')) {
    recommendations.activities.push(
      {
        icon: <CloudRain className="h-4 w-4" />,
        text: 'Focus on indoor activities like equipment maintenance.',
      },
      {
        icon: <Droplets className="h-4 w-4" />,
        text: 'Hold off on applying fertilizers to prevent runoff.',
      }
    );
  } else if (rainExpected) {
    recommendations.activities.push(
      {
        icon: <CloudRain className="h-4 w-4" />,
        text: 'Complete harvesting before rain arrives.',
      },
      {
        icon: <Droplets className="h-4 w-4" />,
        text: 'Consider applying fertilizers now for rain activation.',
      }
    );
  } else if (condition.includes('clear') || condition.includes('sun')) {
    recommendations.activities.push({
      icon: <Sun className="h-4 w-4" />,
      text: 'Ideal conditions for harvesting and field operations.',
    });

    if (uvIndex > 7) {
      recommendations.activities.push({
        icon: <Thermometer className="h-4 w-4" />,
        text: 'High UV index. Ensure workers take regular breaks and stay hydrated.',
      });
    }
  }

  // Wind-based recommendations
  if (windSpeed > 10) {
    recommendations.activities.push({
      icon: <Wind className="h-4 w-4" />,
      text: 'Avoid spraying pesticides due to high wind conditions.',
    });
  } else if (windSpeed < 5 && !condition.includes('rain')) {
    recommendations.activities.push({
      icon: <Wind className="h-4 w-4" />,
      text: 'Good conditions for spraying with low wind speeds.',
    });
  }

  // Temperature and humidity recommendations
  if (temperature > 30 && humidity > 70) {
    recommendations.activities.push({
      icon: <Thermometer className="h-4 w-4" />,
      text: 'Hot and humid conditions. Monitor for pest and disease pressure.',
    });
  } else if (temperature < 5) {
    recommendations.activities.push({
      icon: <Thermometer className="h-4 w-4" />,
      text: 'Cold conditions. Limit operations to midday when temperatures are highest.',
    });
  }

  // Ensure we have at least two recommendations
  if (recommendations.activities.length < 2) {
    recommendations.activities.push({
      icon: <Leaf className="h-4 w-4" />,
      text: 'Regular monitoring of crop conditions is recommended.',
    });
  }

  return recommendations;
}
