'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts';
import { format, parse } from 'date-fns';
import { kelvinToCelsius } from '@/lib/utils';

interface WeatherChartsProps {
  data: {
    hourly_forecast?: Array<{
      datetime: string;
      temperature: number;
      humidity: number;
      probability_of_precipitation: number;
      rain_volume: number;
    }>;
    daily_forecast?: Array<{
      datetime: string;
      temperature: {
        maximum: number;
        minimum: number;
      };
      humidity: number;
      probability_of_precipitation: number;
      rain_volume: number;
    }>;
  };
}

export default function WeatherCharts({ data }: WeatherChartsProps) {
  // Prepare hourly data for charts
  const hourlyData = data.hourly_forecast?.slice(0, 24).map((hour) => ({
    time: format(
      parse(hour.datetime, "MMMM d, yyyy 'at' h:mm:ss a", new Date()),
      'h a'
    ),
    temperature: kelvinToCelsius(hour.temperature),
    humidity: hour.humidity,
    precipitationProbability: hour.probability_of_precipitation * 100,
    precipitationAmount: hour.rain_volume,
  }));

  // Prepare daily data for charts
  const dailyData = data.daily_forecast?.slice(0, 7).map((day) => ({
    date: format(
      parse(day.datetime, "MMMM d, yyyy 'at' h:mm:ss a", new Date()),
      'EEE'
    ),
    min: kelvinToCelsius(day.temperature.minimum),
    max: kelvinToCelsius(day.temperature.maximum),
    humidity: day.humidity,
    precipitationProbability: day.probability_of_precipitation * 100,
    precipitationAmount: day.rain_volume,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Trends</CardTitle>
        <CardDescription>
          Visualize weather patterns to plan your agricultural activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="temperature">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="humidity">Humidity</TabsTrigger>
            <TabsTrigger value="precipitation">Precipitation</TabsTrigger>
          </TabsList>

          <TabsContent value="temperature">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hourlyData && (
                <ChartContainer
                  config={{
                    temperature: {
                      label: 'Temperature (°C)',
                      color: 'hsl(var(--chart-1))',
                    },
                  }}
                  className="h-[300px]"
                >
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="time"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={['auto', 'auto']}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              )}

              {dailyData && (
                <ChartContainer
                  config={{
                    min: {
                      label: 'Min Temp (°C)',
                      color: 'hsl(var(--chart-2))',
                    },
                    max: {
                      label: 'Max Temp (°C)',
                      color: 'hsl(var(--chart-1))',
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={['auto', 'auto']}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="min"
                      fill="hsl(var(--chart-2))"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="max"
                      fill="hsl(var(--chart-1))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              )}
            </div>
          </TabsContent>

          <TabsContent value="humidity">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hourlyData && (
                <ChartContainer
                  config={{
                    humidity: {
                      label: 'Humidity (%)',
                      color: 'hsl(var(--chart-3))',
                    },
                  }}
                  className="h-[300px]"
                >
                  <AreaChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="time"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={[0, 100]}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="humidity"
                      stroke="hsl(var(--chart-3))"
                      fill="hsl(var(--chart-3))"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ChartContainer>
              )}

              {dailyData && (
                <ChartContainer
                  config={{
                    humidity: {
                      label: 'Humidity (%)',
                      color: 'hsl(var(--chart-3))',
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={[0, 100]}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="humidity"
                      fill="hsl(var(--chart-3))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              )}
            </div>
          </TabsContent>

          <TabsContent value="precipitation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hourlyData && (
                <ChartContainer
                  config={{
                    precipitationProbability: {
                      label: 'Probability (%)',
                      color: 'hsl(var(--chart-4))',
                    },
                    precipitationAmount: {
                      label: 'Amount (mm)',
                      color: 'hsl(var(--chart-5))',
                    },
                  }}
                  className="h-[300px]"
                >
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="time"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <YAxis
                      yAxisId="left"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={[0, 100]}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={[0, 'auto']}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="precipitationProbability"
                      stroke="hsl(var(--chart-4))"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="precipitationAmount"
                      stroke="hsl(var(--chart-5))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              )}

              {dailyData && (
                <ChartContainer
                  config={{
                    precipitationProbability: {
                      label: 'Probability (%)',
                      color: 'hsl(var(--chart-4))',
                    },
                    precipitationAmount: {
                      label: 'Amount (mm)',
                      color: 'hsl(var(--chart-5))',
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <YAxis
                      yAxisId="left"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={[0, 100]}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={[0, 'auto']}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      yAxisId="left"
                      dataKey="precipitationProbability"
                      fill="hsl(var(--chart-4))"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      yAxisId="right"
                      dataKey="precipitationAmount"
                      fill="hsl(var(--chart-5))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
