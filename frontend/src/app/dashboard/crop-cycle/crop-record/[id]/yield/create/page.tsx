// src/app/dashboard/crop-cycle/crop-record/[id]/yield/create/page.tsx
'use client';
import { YieldForm } from '@/components/dashboard/crop-cycle/crop-yield/crop-yield-form';
import { useParams } from 'next/navigation';

export default function NewExpensePage() {
  const { id: cropRecordId } = useParams<{ id: string }>();


  return (
    <div className="container mx-auto px-4 py-8">
      <YieldForm mode="create" cropRecordId={cropRecordId} />
    </div>
  );
}