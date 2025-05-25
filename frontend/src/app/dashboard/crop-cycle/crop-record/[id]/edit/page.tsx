// src/app/dashboard/crop-cycle/crop-record/[id]/edit/page.tsx
'use client';
import { useGetCropRecordQuery } from '@/redux/crop-cycle/cropRecordApi';
import { CropRecordForm } from '@/components/dashboard/crop-cycle/crop-record/crop-record-form';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';

export default function EditCropPage() {
  const { id } = useParams<{ id: string }>();

  const { data: crop, error, isLoading } = useGetCropRecordQuery(id!);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Skeleton className="h-64 w-full max-w-2xl mx-auto" />
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
      <CropRecordForm crop={crop.data} mode="edit" />
    </div>
  );
}
