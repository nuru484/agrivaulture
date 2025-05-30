'use client';
import { Button } from '@/components/ui/button';
import { FarmingTipList } from '@/components/dashboard/farming-tips/farming-tip-list';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function FarmingTipsPage() {
  const router = useRouter();
   const user = useSelector((state: RootState) => state.auth.user);

  const isAdmin = user?.role === 'ADMIN';

  const handleCreateNew = () => {
    router.push('/admin-dashboard//farming-tips/create');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Farming Tips</h1>
            <p className="text-muted-foreground">
              Explore expert farming tips to enhance your crop management
            </p>
          </div>
          {isAdmin && (
            <Button onClick={handleCreateNew}>
              <Plus className="mr-2 h-4 w-4" />
              Create New Tip
            </Button>
          )}
        </div>

        <FarmingTipList />
      </div>
    </div>
  );
}