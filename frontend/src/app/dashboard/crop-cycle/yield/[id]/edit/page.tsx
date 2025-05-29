'use client';
import { useGetYieldQuery } from '@/redux/crop-cycle/cropYieldApi';
import { YieldForm } from '@/components/dashboard/crop-cycle/crop-yield/crop-yield-form';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';

export default function EditYieldPage() {
  const { id } = useParams<{ id: string }>();

  const { data: yieldRecord, error, isLoading } = useGetYieldQuery(id!);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Skeleton className="h-64 w-full max-w-2xl mx-auto" />
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
      <YieldForm yield={yieldRecord.data} mode="edit" cropRecordId={yieldRecord.data.cropRecordId} />
    </div>
  );
}