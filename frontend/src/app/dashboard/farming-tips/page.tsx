'use client';
import { FarmingTipList } from '@/components/dashboard/farming-tips/farming-tip-list';


export default function FarmingTipsPage() {
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
        
        </div>

        <FarmingTipList />
      </div>
    </div>
  );
}