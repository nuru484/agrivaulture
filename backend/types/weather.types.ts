export interface IWeatherData {
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    clouds: number;
    visibility: number;
    uvi: number;
    sunrise: number;
    sunset: number;
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  };
  daily: Array<{
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: {
      day: number;
      morn: number;
      eve: number;
      night: number;
      max: number;
      min: number;
    };
    feels_like: {
      day: number;
      morn: number;
      eve: number;
      night: number;
    };
    humidity: number;
    pressure: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    clouds: number;
    pop: number;
    rain?: number;
    uvi: number;
    dew_point: number;
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
    summary: string;
  }>;
  hourly: Array<{
    dt: number;
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    clouds: number;
    pop: number;
    rain?: { '1h': number };
    uvi: number;
    dew_point: number;
    visibility: number;
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}

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
