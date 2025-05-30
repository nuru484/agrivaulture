'use client';

import { useState, useEffect } from 'react';
import { useFetchWeatherMutation } from '@/redux/weather/weatherApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Cloud } from 'lucide-react';
import { extractApiErrorMessage } from '@/utils/extractApiErrorMessage';

export default function FetchWeatherForm() {
  const [region, setRegion] = useState('');
  const [fetchWeather, { isLoading, error, data }] = useFetchWeatherMutation();

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!region) return;
    await fetchWeather({ region });
  };

  return (
    <Card className="mx-auto mt-12 max-w-xl rounded-2xl border border-border bg-background shadow-xl transition hover:shadow-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-foreground">
          <Cloud className="h-6 w-6 text-primary" />
          Weather Lookup
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Enter a region (e.g., <code>Tamale, GHA</code>) to fetch and store weather data.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="region" className="text-sm font-medium text-foreground">
              Region
            </Label>
            <Input
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="e.g., Tamale, GHA"
              className="h-10 rounded-md border border-input bg-background px-3 text-sm shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading || !region}
            className="w-full text-base font-medium"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Fetching...
              </>
            ) : (
              'Fetch Weather'
            )}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-6">
            <AlertTitle className="text-destructive">Error</AlertTitle>
            <AlertDescription>
              {extractApiErrorMessage(error) || 'Failed to fetch weather data.'}
            </AlertDescription>
          </Alert>
        )}

        {data && (
          <Alert className="mt-6 border border-primary/40 bg-primary/10 text-sm">
            <AlertTitle className="text-primary font-semibold">Success</AlertTitle>
            <AlertDescription>
              Weather data for <span className="font-medium">{data.data.region}</span> on{' '}
              <span className="font-medium">
                {new Date(data.data.date).toLocaleDateString()}
              </span>{' '}
              stored successfully.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
