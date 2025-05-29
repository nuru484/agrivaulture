'use client';
import { Button } from '@/components/ui/button';
import { MarketPriceList } from '@/components/dashboard/market-prices/market-price-list';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function MarketPricesPage() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';

  const handleCreateNew = () => {
    router.push('/dashboard/crop-cycle/market-prices/create');
  };

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
          {isAdmin && (
            <Button onClick={handleCreateNew}>
              <Plus className="mr-2 h-4 w-4" />
              Add New Price
            </Button>
          )}
        </div>

        <MarketPriceList />
      </div>
    </div>
  );
}