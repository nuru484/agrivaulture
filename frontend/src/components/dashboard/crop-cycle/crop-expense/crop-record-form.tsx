// src/components/dashboard/crop-cycle/crop-expense/crop-record-form.tsx
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter,  } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle,  } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Save, } from 'lucide-react';
import toast from 'react-hot-toast';
import {
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
} from '@/redux/crop-cycle/cropExpenseApi';
import { IExpense } from '@/types/crop-cycle/crop-expense';


// Expense Form Schema
const expenseFormSchema = z.object({
  cropRecordId: z.string().min(1, 'Crop record is required'),
  item: z.string().min(1, 'Item is required'),
  cost: z.number().min(0, 'Cost must be a positive number'),
  date: z.string().min(1, 'Date is required'),
});

type ExpenseFormValues = z.infer<typeof expenseFormSchema>;


interface IExpenseFormProps {
  expense?: IExpense;
  mode: 'create' | 'edit';
  cropRecordId: string;
}

export function ExpenseForm({ expense, mode, cropRecordId }: IExpenseFormProps) {
  const router = useRouter();
  const [createExpense, { isLoading: isCreating }] = useCreateExpenseMutation();
  const [updateExpense, { isLoading: isUpdating }] = useUpdateExpenseMutation();

  const form = useForm<ExpenseFormValues>({
    resolver: zodResolver(expenseFormSchema),
    defaultValues: {
      cropRecordId: expense?.cropRecordId || cropRecordId,
      item: expense?.item || '',
      cost: expense?.cost || 0,
      date: expense?.date ? expense.date.split('T')[0] : '',
    },
  });

  const onSubmit = async (values: ExpenseFormValues) => {
    try {
      const submitData = {
        ...values
      };

      if (mode === 'create') {
        await createExpense(submitData).unwrap();
        console.log('Expense created:', submitData);
        toast.success('Expense created successfully');
      } else {
        await updateExpense({ id: expense!.id, ...submitData }).unwrap();
        toast.success('Expense updated successfully');
      }

      router.push(`/dashboard/crop-cycle/crop-record/${cropRecordId}/detail`);
    } catch (error) {
      console.error(`Failed to ${mode} expense:`, error);
      toast.error(`Failed to ${mode} expense`);
    }
  };

  const isLoading = isCreating || isUpdating;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push(`/dashboard/crop-cycle/crop-record/${cropRecordId}/detail`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{mode === 'create' ? 'Create New Expense' : 'Edit Expense'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="item"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Item</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Fertilizer, Seeds" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cost</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="e.g., 50.00"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push(`/dashboard/crop-cycle/crop-record/${cropRecordId}/detail`)}
                  disabled={isLoading}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading} className="flex-1">
                  <Save className="mr-2 h-4 w-4" />
                  {isLoading
                    ? 'Saving...'
                    : mode === 'create'
                    ? 'Create Expense'
                    : 'Update Expense'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}