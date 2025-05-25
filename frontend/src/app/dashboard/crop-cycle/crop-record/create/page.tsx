// src/app/dashboard/crop-cycle/crop-record/create/page.tsx
'use client';
import { CropRecordForm } from '@/components/dashboard/crop-cycle/crop-record/crop-record-form';

export default function NewCropPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CropRecordForm mode="create" />
    </div>
  );
}
