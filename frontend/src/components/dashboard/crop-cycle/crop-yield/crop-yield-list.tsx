'use client';
import { useGetAllYieldsQuery } from '@/redux/crop-cycle/cropYieldApi';
import { Skeleton } from '@/components/ui/skeleton';
import { YieldCard } from './crop-yield-card';
import { IYield } from '@/types/crop-cycle/crop-yield';

export function YieldList({ cropRecordId }: { cropRecordId: string }) {
  const { data, error, isLoading, isFetching } = useGetAllYieldsQuery();

  const yields = data?.data?.filter((yieldRecord) => yieldRecord.cropRecordId === cropRecordId) || [];

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          Failed to load yields. Please try again.
        </p>
      </div>
    );
  }

  if (!yields.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No yields found for this crop.</p>
        <p className="text-sm text-muted-foreground">
          Start by creating your first yield record.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {yields.map((yieldRecord: IYield) => (
          <YieldCard key={yieldRecord.id} yield={yieldRecord} />
        ))}
      </div>

      {isFetching && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}