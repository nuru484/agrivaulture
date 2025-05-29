// src/app/dashboard/crop-cycle/yield/[id]/detail/page.tsx
'use client';
import { useGetYieldQuery } from '@/redux/crop-cycle/cropYieldApi';
import { YieldDetail } from '@/components/dashboard/crop-cycle/crop-yield/crop-yield-detail';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';

export default function YieldDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: yieldRecord, error, isLoading } = useGetYieldQuery(id!);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  if (error || !yieldRecord?.data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Yield not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <YieldDetail yield={yieldRecord.data} />
    </div>
  );
}