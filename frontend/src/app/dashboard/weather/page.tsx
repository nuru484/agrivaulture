// src/app/dashboard/weather/page.tsx
'use client';
import { useState } from 'react';
import {
  useGetLatestWeatherQuery,
  useGetWeatherByDateQuery,
} from '@/redux/weather/weatherApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DatePicker } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Thermometer, Clock, CalendarDays } from 'lucide-react';
import { format } from 'date-fns';
import CurrentWeather from '@/components/dashboard/weather/CurrentWeather';
import DailyForecast from '@/components/dashboard/weather/DailyForecast';
import HourlyForecast from '@/components/dashboard/weather/HourlyForecast';
import WeatherCharts from '@/components/dashboard/weather/WeatherCharts';
import WeatherRecommendation from '@/components/dashboard/weather/WeatherRecomdation';
import { cn } from '@/lib/utils';
import { extractApiErrorMessage } from '@/utils/extractApiErrorMessage';

// Predefined regions for the demo
const regions = [
  { id: 'Tamale, GHA', name: 'Tamale' },
  { id: 'Accra, GHA', name: 'Accra' },
  { id: 'Kumasi, GHA', name: 'Kumasi' },
  { id: 'Zabzugu, GHA', name: 'Zabzugu' },
];

export default function WeatherPage() {
  const [selectedRegion, setSelectedRegion] = useState('Tamale, GHA');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [searchRegion, setSearchRegion] = useState('');
  const [searchDate, setSearchDate] = useState<Date | undefined>();
  const [favoriteRegions, setFavoriteRegions] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState('current');

  // RTK Query hooks
  const {
    data: currentWeatherData,
    isLoading: isLoadingCurrent,
    error: currentError,
  } = useGetLatestWeatherQuery(selectedRegion);

  const {
    data: dateWeatherData,
    isLoading: isLoadingDate,
    error: dateError,
    isFetching: isFetchingDate,
  } = useGetWeatherByDateQuery(
    {
      region: searchRegion || selectedRegion,
      date: searchDate ? format(searchDate, 'yyyy-MM-dd') : '',
    },
    { skip: !searchDate }
  );

  console.log(dateWeatherData);

  // Handle search submission
  const handleSearch = () => {
    setSelectedRegion(searchRegion || selectedRegion);
    setSelectedDate(searchDate);
  };

  // Toggle favorite region
  const toggleFavorite = (regionId: string) => {
    if (favoriteRegions.includes(regionId)) {
      setFavoriteRegions(favoriteRegions.filter((id) => id !== regionId));
    } else {
      setFavoriteRegions([...favoriteRegions, regionId]);
    }
  };

  const isLoading = searchDate
    ? isLoadingDate || isFetchingDate
    : isLoadingCurrent;

  const error = searchDate ? dateError : currentError;

  console.log('Date Error:', dateError);
  console.log('Current Error:', currentError);

  const errorMessage = extractApiErrorMessage(error);

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Agricultural Weather Dashboard
        </h1>
        <p className="text-muted-foreground">
          Monitor weather conditions to optimize your agricultural operations
        </p>
      </div>

      {/* Search and Filter Section */}
      <Card>
        <CardHeader>
          <CardTitle>Weather Search</CardTitle>
          <CardDescription>
            Search for weather data by region and date
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Region</label>
              <Select
                value={searchRegion || selectedRegion}
                onValueChange={setSearchRegion}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.id} value={region.id}>
                      <div className="flex items-center justify-between w-full">
                        <span>{region.name}</span>
                        {favoriteRegions.includes(region.id) && (
                          <Bookmark className="h-4 w-4 ml-2 fill-current" />
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <DatePicker
                date={searchDate}
                setDate={setSearchDate}
                className="w-full"
              />
            </div>

            <div className="flex items-end">
              <Button onClick={handleSearch} className="w-full">
                Search Weather
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <Badge
                key={region.id}
                variant={
                  favoriteRegions.includes(region.id) ? 'default' : 'outline'
                }
                className={cn(
                  'cursor-pointer',
                  favoriteRegions.includes(region.id) ? 'bg-primary' : ''
                )}
                onClick={() => toggleFavorite(region.id)}
              >
                {region.name}
                <Bookmark
                  className={cn(
                    'h-3 w-3 ml-1',
                    favoriteRegions.includes(region.id)
                      ? 'fill-primary-foreground'
                      : ''
                  )}
                />
              </Badge>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            {selectedDate ? format(selectedDate, 'PPP') : 'Current weather'}
          </div>
        </CardFooter>
      </Card>

      {/* View Mode Tabs */}
      <Tabs value={viewMode} onValueChange={setViewMode} className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="current">
            <Thermometer className="h-4 w-4 mr-2" />
            Current
          </TabsTrigger>
          <TabsTrigger value="hourly">
            <Clock className="h-4 w-4 mr-2" />
            Hourly
          </TabsTrigger>
          <TabsTrigger value="daily">
            <CalendarDays className="h-4 w-4 mr-2" />
            7-Day
          </TabsTrigger>
        </TabsList>

        {/* Error State */}
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {errorMessage ||
                'Failed to load weather data. Please try again later.'}
            </AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="space-y-4 mt-4">
            <Skeleton className="h-[300px] w-full rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="h-[200px] rounded-lg" />
              <Skeleton className="h-[200px] rounded-lg" />
              <Skeleton className="h-[200px] rounded-lg" />
            </div>
          </div>
        )}

        {/* Weather Content */}
        {!isLoading && currentWeatherData?.data && (
          <>
            <TabsContent value="current" className="space-y-6 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  {currentWeatherData?.data && (
                    <CurrentWeather
                      data={currentWeatherData.data.current_weather}
                    />
                  )}
                </div>
                <div>
                  {currentWeatherData?.data && (
                    <WeatherRecommendation data={currentWeatherData.data} />
                  )}
                </div>
              </div>
              <WeatherCharts data={currentWeatherData.data ?? {}} />
            </TabsContent>

            <TabsContent value="hourly" className="mt-4">
              <HourlyForecast
                data={
                  Array.isArray(currentWeatherData.data.hourly_forecast)
                    ? currentWeatherData?.data.hourly_forecast
                    : []
                }
              />
            </TabsContent>

            <TabsContent value="daily" className="mt-4">
              <DailyForecast
                data={
                  Array.isArray(currentWeatherData?.data.daily_forecast)
                    ? currentWeatherData?.data.daily_forecast
                    : []
                }
              />
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
