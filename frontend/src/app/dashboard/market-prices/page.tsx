'use client';
import { MarketPriceList } from '@/components/dashboard/market-prices/market-price-list';


export default function MarketPricesPage() {
 

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Market Prices</h1>
            <p className="text-muted-foreground">
              Track current market prices for agricultural produce
            </p>
          </div>
         
        </div>

        <MarketPriceList />
      </div>
    </div>
  );
}