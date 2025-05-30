'use client';
import FetchWeatherForm from '@/components/admin-dashboard/FetchWeatherForm';

export default function AdminWeatherPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Weather Management</h1>
            <p className="text-muted-foreground">
              Manage and fetch weather data for different regions. Use the form below to
              enter a region (e.g., <code>Tamale, GHA</code>) and fetch the latest weather
              information.

            </p>
          </div>
         
        </div>
        <div className='w-full'>
        <FetchWeatherForm />

        </div>


      </div>
    </div>
  );
}