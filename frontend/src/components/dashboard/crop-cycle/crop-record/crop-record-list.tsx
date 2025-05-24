'use client';
import { useGetAllCropRecordsQuery } from '@/redux/crop-cycle/crop-record';
import { CropRecordCard } from './crop-record-card';
import { ICropRecord } from '@/types/crop-cycle/crop-record';
import { Skeleton } from '@/components/ui/skeleton';

export function CropRecordList() {
  const { data, error, isLoading, isFetching } = useGetAllCropRecordsQuery();

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
          Failed to load crops. Please try again.
        </p>
      </div>
    );
  }

  if (!data || !data.data || !data.data.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No crops found.</p>
        <p className="text-sm text-muted-foreground">
          Start by creating your first crop record.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((crop: ICropRecord) => (
          <CropRecordCard key={crop.id} crop={crop} />
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
