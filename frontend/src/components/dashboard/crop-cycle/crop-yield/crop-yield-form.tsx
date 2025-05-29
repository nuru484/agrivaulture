'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Save } from 'lucide-react';
import toast from 'react-hot-toast';
import {
  useCreateYieldMutation,
  useUpdateYieldMutation,
} from '@/redux/crop-cycle/cropYieldApi';
import { IYield } from '@/types/crop-cycle/crop-yield';

// Yield Form Schema
const yieldFormSchema = z.object({
  cropRecordId: z.string().min(1, 'Crop record is required'),
  quantity: z.number().min(0, 'Quantity must be a positive number'),
  unit: z.string().min(1, 'Unit is required'),
  date: z.string().min(1, 'Date is required'),
});

type YieldFormValues = z.infer<typeof yieldFormSchema>;

interface IYieldFormProps {
  yield?: IYield;
  mode: 'create' | 'edit';
  cropRecordId: string;
}

export function YieldForm({ yield: yieldRecord, mode, cropRecordId }: IYieldFormProps) {
  const router = useRouter();
  const [createYield, { isLoading: isCreating }] = useCreateYieldMutation();
  const [updateYield, { isLoading: isUpdating }] = useUpdateYieldMutation();

  const form = useForm<YieldFormValues>({
    resolver: zodResolver(yieldFormSchema),
    defaultValues: {
      cropRecordId: yieldRecord?.cropRecordId || cropRecordId,
      quantity: yieldRecord?.quantity || 0,
      unit: yieldRecord?.unit || '',
      date: yieldRecord?.date ? yieldRecord.date.split('T')[0] : '',
    },
  });

  const onSubmit = async (values: YieldFormValues) => {
    try {
      const submitData = {
        ...values,
      };

      if (mode === 'create') {
        await createYield(submitData).unwrap();
        toast.success('Yield created successfully');
      } else {
        await updateYield({ id: yieldRecord!.id, ...submitData }).unwrap();
        toast.success('Yield updated successfully');
      }

      router.push(`/dashboard/crop-cycle/crop-record/${cropRecordId}/detail`);
    } catch (error) {
      console.error(`Failed to ${mode} yield:`, error);
      toast.error(`Failed to ${mode} yield`);
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
          <CardTitle>{mode === 'create' ? 'Create New Yield' : 'Edit Yield'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="e.g., 100"
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
                name="unit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., kg, tons" {...field} />
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
                    ? 'Create Yield'
                    : 'Update Yield'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}