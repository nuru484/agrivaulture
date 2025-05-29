// src/components/dashboard/crop-cycle/crop-expense/crop-expense-detail.tsx
'use client';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Trash2, DollarSign, Calendar,Edit } from 'lucide-react';
import toast from 'react-hot-toast';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import {
  useDeleteExpenseMutation,
} from '@/redux/crop-cycle/cropExpenseApi';
import { IExpense } from '@/types/crop-cycle/crop-expense';

interface IExpenseDetailProps {
  expense: IExpense;
}

export function ExpenseDetail({ expense }: IExpenseDetailProps) {
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteExpense, { isLoading: isDeleting }] = useDeleteExpenseMutation();

  const handleEdit = () => {
    router.push(`/dashboard/crop-cycle/expense/${expense.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteExpense(expense.id).unwrap();
      toast.success('Expense deleted successfully');
      router.push(`/dashboard/crop-cycle/crop-record/${expense.cropRecordId}/detail`);
    } catch (error) {
      console.error('Failed to delete expense:', error);
      toast.error('Failed to delete expense');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return format(date, 'EEEE, MMMM dd, yyyy');
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push(`/dashboard/crop-cycle/crop-record/${expense.cropRecordId}/detail`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex gap-2 ml-auto">
            <Button variant="outline" onClick={handleEdit}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(true)}
              disabled={isDeleting}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{expense.item}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Cost</p>
                    <p className="text-muted-foreground">${expense.cost.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-muted-foreground">{formatDate(expense.date)}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>Created: {format(new Date(expense.createdAt), 'MMM dd, yyyy')}</p>
                  <p>Updated: {format(new Date(expense.updatedAt), 'MMM dd, yyyy')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Expense"
        description={`Are you sure you want to delete "${expense.item}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        confirmText="Delete"
        isDestructive
      />
    </>
  );
}