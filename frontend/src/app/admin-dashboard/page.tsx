'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { UserTotalCard } from '@/components/admin-dashboard/user/user-total-card';
import { UserList } from '@/components/admin-dashboard/user/user-list';
import { CropRecordsCard } from '@/components/dashboard/cards/crop-records-card';
import { ExpensesCard } from '@/components/dashboard/cards/expenses-card';
import { YieldsCard } from '@/components/dashboard/cards/yields-card';
import { MarketPricesCard } from '@/components/dashboard/cards/market-prices-card';
import { FarmingTipsCard } from '@/components/dashboard/cards/farming-tips-card';

export default function AdminDashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const currentUserId = user?.id || null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage system data and users</p>
          </div>
          <UserTotalCard />
        </div>
        <UserList currentUserId={currentUserId} numberOfUsers={3} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CropRecordsCard />
          <ExpensesCard />
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