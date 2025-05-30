'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetUserDashboardQuery } from '@/redux/dashboardApi';
import { ICropRecord } from '@/types/crop-cycle/crop-record';
import { format } from 'date-fns';

export function CropRecordsCard() {
  const { data, error, isLoading } = useGetUserDashboardQuery();

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Crop Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-12 w-full rounded-lg" />
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Crop Records</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Failed to load crop records.</p>
        </CardContent>
      </Card>
    );
  }

  // Extract and validate data once
  const cropRecords = data.data?.cropRecords || [];


  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibeled">Crop Records</CardTitle>
      </CardHeader>
      <CardContent>
        {cropRecords.length === 0 ? (
          <p className="text-sm text-muted-foreground">No crop records found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crop Type</TableHead>
                <TableHead>Planting Date</TableHead>
                <TableHead>Harvesting Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cropRecords.map((record: ICropRecord) => {
              

                const { id, cropType, plantingDate, harvestingDate } = record;
                
                return (
                  <TableRow key={id}>
                    <TableCell>{cropType || 'N/A'}</TableCell>
                    <TableCell>
                      {plantingDate 
                        ? format(new Date(plantingDate), 'MMM dd, yyyy')
                        : 'N/A'}
                    </TableCell>
                    <TableCell>
                      {harvestingDate
                        ? format(new Date(harvestingDate), 'MMM dd, yyyy')
                        : 'N/A'}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}