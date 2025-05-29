// src/components/dashboard/farming-tips/farming-tip-form.tsx
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {   useCreateFarmingTipMutation,
  useUpdateFarmingTipMutation, } from '@/redux/farmin-tips/farmingTipApi';
import toast from 'react-hot-toast';
import { IFarmingTip } from '@/types/farming-tips/farming-tip';

const farmingTipFormSchema = z.object({
  tip: z.string().min(1, 'Tip is required'),
  crop: z.string().optional(),
  region: z.string().optional(),
  date: z.string().min(1, 'Date is required'),
});

type FarmingTipFormValues = z.infer<typeof farmingTipFormSchema>;

interface IFarmingTipFormProps {
  tip?: IFarmingTip;
  mode: 'create' | 'edit';
}

export function FarmingTipForm({ tip, mode }: IFarmingTipFormProps) {
  const router = useRouter();
  const [createFarmingTip, { isLoading: isCreating }] = useCreateFarmingTipMutation();
  const [updateFarmingTip, { isLoading: isUpdating }] = useUpdateFarmingTipMutation();

  const form = useForm<FarmingTipFormValues>({
    resolver: zodResolver(farmingTipFormSchema),
    defaultValues: {
      tip: tip?.tip || '',
      crop: tip?.crop || '',
      region: tip?.region || '',
      date: tip?.date ? tip.date.split('T')[0] : '',
    },
  });

  const onSubmit = async (values: FarmingTipFormValues) => {
    try {
      const submitData = {
        ...values,
        date: new Date(values.date).toISOString(),
        crop: values.crop || undefined,
        region: values.region || undefined,
      };

      if (mode === 'create') {
        await createFarmingTip(submitData).unwrap();
        toast.success('Farming tip created successfully');
      } else {
        await updateFarmingTip({ id: tip!.id, ...submitData }).unwrap();
        toast.success('Farming tip updated successfully');
      }

      router.push('/dashboard/crop-cycle/farming-tips');
    } catch (error) {
      console.error(`Failed to ${mode} farming tip:`, error);
      toast.error(`Failed to ${mode} farming tip`);
    }
  };

  const isLoading = isCreating || isUpdating;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push('/dashboard/crop-cycle/farming-tips')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {mode === 'create' ? 'Create New Farming Tip' : 'Edit Farming Tip'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="tip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tip</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter the farming tip..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="crop"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Crop (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Tomatoes, Corn, Wheat"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Region (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Midwest, Coastal"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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
                  onClick={() => router.push('/dashboard/crop-cycle/farming-tips')}
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
                    ? 'Create Tip'
                    : 'Update Tip'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}