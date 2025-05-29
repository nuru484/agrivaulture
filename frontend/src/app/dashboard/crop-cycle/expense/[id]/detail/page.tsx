'use client';
import { useGetExpenseQuery } from '@/redux/crop-cycle/cropExpenseApi';
import { ExpenseDetail } from '@/components/dashboard/crop-cycle/crop-expense/crop-expense-detail';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';

export default function ExpenseDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: expense, error, isLoading } = useGetExpenseQuery(id!);

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

  if (error || !expense?.data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Expense not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ExpenseDetail expense={expense.data} />
    </div>
  );
}