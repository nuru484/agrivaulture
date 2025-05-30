'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetUserDashboardQuery } from '@/redux/dashboardApi';
import { IFarmingTip } from '@/types/farming-tips/farming-tip';
import { format } from 'date-fns';

export function FarmingTipsCard() {
  const { data, error, isLoading } = useGetUserDashboardQuery();


  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Farming Tips</CardTitle>
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
          <CardTitle className="text-lg font-semibold">Farming Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Failed to load farming tips.</p>
        </CardContent>
      </Card>
    );
  }

  // Extract and validate data once
  const farmingTips = data.data?.farmingTips || [];

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Farming Tips</CardTitle>
      </CardHeader>
      <CardContent>
        {farmingTips.length === 0 ? (
          <p className="text-sm text-muted-foreground">No farming tips found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tip</TableHead>
                <TableHead>Crop</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {farmingTips.map((tip: IFarmingTip) => {
               
                const { id, tip: tipContent, crop, region, date } = tip;
                const truncatedTip = tipContent.length > 50 ? `${tipContent.slice(0, 30)}...` : tipContent;
                
                return (
                  <TableRow key={id}>
                    <TableCell>{truncatedTip || 'N/A'}</TableCell>
                    <TableCell>{crop || 'N/A'}</TableCell>
                    <TableCell>{region || 'N/A'}</TableCell>
                    <TableCell>
                      {date 
                        ? format(new Date(date), 'MMM dd, yyyy')
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