'use client';
import { CropRecordsCard } from '@/components/dashboard/cards/crop-records-card';
import { ExpensesCard } from '@/components/dashboard/cards/expenses-card';
import { YieldsCard } from '@/components/dashboard/cards/yields-card';
import { MarketPricesCard } from '@/components/dashboard/cards/market-prices-card';
import { FarmingTipsCard } from '@/components/dashboard/cards/farming-tips-card';

export default function UserDashboardPage() {

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Farmer Dashboard</h1>
            <p className="text-muted-foreground">Manage your farming activities and stay informed</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CropRecordsCard />
          <ExpensesCard/>
          <YieldsCard />
          <MarketPricesCard />
          <div className="col-span-1 lg:col-span-2">
          <FarmingTipsCard  />
          </div>
        </div>
      </div>
    </div>
  );
}