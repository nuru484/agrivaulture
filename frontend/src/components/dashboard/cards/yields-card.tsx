'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetUserDashboardQuery } from '@/redux/dashboardApi';
import { IYield } from '@/types/crop-cycle/crop-yield';
import { format } from 'date-fns';



export function YieldsCard() {
  const { data, error, isLoading } = useGetUserDashboardQuery();

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Yields</CardTitle>
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
          <CardTitle className="text-lg font-semibold">Yields</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Failed to load yields.</p>
        </CardContent>
      </Card>
    );
  }

  const yields = data.data?.yields;


  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Yields</CardTitle>
      </CardHeader>
      <CardContent>
        {yields.length === 0 ? (
          <p className="text-sm text-muted-foreground">No yields found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {yields.map((yieldRecord: IYield) => (
                <TableRow key={yieldRecord?.id}>
                  <TableCell>{yieldRecord?.quantity}</TableCell>
                  <TableCell>{yieldRecord?.unit}</TableCell>
                  <TableCell>{format(new Date(yieldRecord?.date), 'MMM dd, yyyy')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}