'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetUserDashboardQuery } from '@/redux/dashboardApi';
import { IMarketPrice } from '@/types/market-prices/market-price';

export function MarketPricesCard() {
  const { data, error, isLoading } = useGetUserDashboardQuery();

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Market Prices</CardTitle>
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
          <CardTitle className="text-lg font-semibold">Market Prices</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Failed to load market prices.</p>
        </CardContent>
      </Card>
    );
  }

  // Extract and validate data once
  const marketPrices = data.data?.marketPrices || [];

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Market Prices</CardTitle>
      </CardHeader>
      <CardContent>
        {marketPrices.length === 0 ? (
          <p className="text-sm text-muted-foreground">No market prices found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crop</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Unit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketPrices.map((price: IMarketPrice) => {
                
                const { id, crop, region, price: priceValue, unit } = price;
                
                return (
                  <TableRow key={id}>
                    <TableCell>{crop || 'N/A'}</TableCell>
                    <TableCell>{region || 'N/A'}</TableCell>
                    <TableCell>{priceValue || 'N/A'}</TableCell>
                    <TableCell>{unit || 'N/A'}</TableCell>
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