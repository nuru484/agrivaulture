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
import {
  useCreateCropRecordMutation,
  useUpdateCropRecordMutation,
} from '@/redux/crop-cycle/crop-record';
import toast from 'react-hot-toast';
import { ICropRecord } from '@/types/crop-cycle/crop-record';

const cropFormSchema = z.object({
  cropType: z.string().min(1, 'Crop type is required'),
  plantingDate: z.string().min(1, 'Planting date is required'),
  harvestingDate: z.string().optional(),
  notes: z.string().optional(),
});

type CropFormValues = z.infer<typeof cropFormSchema>;

interface ICropFormProps {
  crop?: ICropRecord;
  mode: 'create' | 'edit';
}

export function CropRecordForm({ crop, mode }: ICropFormProps) {
  const router = useRouter();
  const [createCrop, { isLoading: isCreating }] = useCreateCropRecordMutation();
  const [updateCrop, { isLoading: isUpdating }] = useUpdateCropRecordMutation();

  const form = useForm<CropFormValues>({
    resolver: zodResolver(cropFormSchema),
    defaultValues: {
      cropType: crop?.cropType || '',
      plantingDate: crop?.plantingDate ? crop.plantingDate.split('T')[0] : '',
      harvestingDate: crop?.harvestingDate
        ? crop.harvestingDate.split('T')[0]
        : '',
      notes: crop?.notes || '',
    },
  });

  const onSubmit = async (values: CropFormValues) => {
    try {
      const submitData = {
        ...values,
        plantingDate: new Date(values.plantingDate).toISOString(),
        harvestingDate: values.harvestingDate
          ? new Date(values.harvestingDate).toISOString()
          : undefined,
      };

      if (mode === 'create') {
        await createCrop(submitData).unwrap();
        toast.success('Crop created successfully');
      } else {
        await updateCrop({ id: crop!.id, ...submitData }).unwrap();
        toast.success('Crop updated successfully');
      }

      router.push('/dashboard/crop-cycle');
    } catch (error) {
      console.error(`Failed to ${mode} crop:`, error);
      toast.error(`Failed to ${mode} crop`);
    }
  };

  const isLoading = isCreating || isUpdating;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push('/dashboard/crop-cycle')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {mode === 'create' ? 'Create New Crop' : 'Edit Crop'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="cropType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Crop Type</FormLabel>
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

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="plantingDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Planting Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="harvestingDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Harvesting Date (Optional)</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add any notes about this crop..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard/crop-cycle')}
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
                    ? 'Create Crop'
                    : 'Update Crop'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
