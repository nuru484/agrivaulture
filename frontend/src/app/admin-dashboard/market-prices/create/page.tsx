'use client';
import { MarketPriceForm } from '@/components/dashboard/market-prices/market-price-form';

export default function CreateMarketPricePage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <MarketPriceForm mode="create" />
    </div>
  );
}