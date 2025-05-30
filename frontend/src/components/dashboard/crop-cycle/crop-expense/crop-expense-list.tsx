// src/components/dashboard/crop-cycle/crop-expense/crop-record-list.tsx
import { useGetAllExpensesQuery } from "@/redux/crop-cycle/cropExpenseApi";
import { Skeleton } from "@/components/ui/skeleton";
import { ExpenseCard } from "./crop-expense-card";
import { IExpense } from "@/types/crop-cycle/crop-expense";


export function ExpenseList({ cropRecordId }: { cropRecordId: string }) {
  const { data, error, isLoading, isFetching } = useGetAllExpensesQuery();

  const expenses = data?.data?.filter((expense) => expense.cropRecordId === cropRecordId) || [];

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
          Failed to load expenses. Please try again.
        </p>
      </div>
    );
  }

  if (!expenses.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No expenses found for this crop.</p>
        <p className="text-sm text-muted-foreground">
          Start by creating your first expense record.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {expenses.map((expense: IExpense) => (
          <ExpenseCard key={expense.id} expense={expense} />
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