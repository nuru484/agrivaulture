'use client';
import { useGetCropRecordQuery } from '@/redux/crop-cycle/crop-record';
import { CropRecordDetail } from '@/components/dashboard/crop-cycle/crop-record/crop-record-detail';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';

export default function CropDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: crop, error, isLoading } = useGetCropRecordQuery(id!);

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

  if (error || !crop?.data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Crop not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CropRecordDetail crop={crop.data} />
    </div>
  );
}
