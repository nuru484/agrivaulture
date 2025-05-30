
// src/app/dashboard/crop-cycle/crop-record/[id]/expense/create/page.tsx
'use client';
import { ExpenseForm } from '@/components/dashboard/crop-cycle/crop-expense/crop-expense-form';
import { useParams } from 'next/navigation';

export default function NewExpensePage() {
  const { id: cropRecordId } = useParams<{ id: string }>();


  return (
    <div className="container mx-auto px-4 py-8">
      <ExpenseForm mode="create" cropRecordId={cropRecordId} />
    </div>
  );
}