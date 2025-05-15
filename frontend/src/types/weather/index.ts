export interface IWeatherDataResponse {
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
