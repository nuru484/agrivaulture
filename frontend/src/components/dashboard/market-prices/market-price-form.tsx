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
import { ArrowLeft, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  useCreateMarketPriceMutation,
  useUpdateMarketPriceMutation,
} from '@/redux/market-prices/marketPriceApi';
import toast from 'react-hot-toast';
import { IMarketPrice, IMarketPriceFormValues } from '@/types/market-prices/market-price';



// Explicitly define the resolved type after transformation
const resolvedMarketPriceFormSchema = z.object({
  crop: z.string().min(1, 'Crop is required'),
  region: z.string().min(1, 'Region is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  unit: z.string().min(1, 'Unit is required'),
  date: z.string().min(1, 'Date is required'),
});

interface IMarketPriceFormProps {
  price?: IMarketPrice;
  mode: 'create' | 'edit';
}

export function MarketPriceForm({ price, mode }: IMarketPriceFormProps) {
  const router = useRouter();
  const [createMarketPrice, { isLoading: isCreating }] = useCreateMarketPriceMutation();
  const [updateMarketPrice, { isLoading: isUpdating }] = useUpdateMarketPriceMutation();

  const form = useForm<IMarketPriceFormValues>({
    resolver: zodResolver(resolvedMarketPriceFormSchema),
    defaultValues: {
      crop: price?.crop || '',
      region: price?.region || '',
      price: price?.price ?? 0,
      unit: price?.unit || '',
      date: price?.date ? price.date.split('T')[0] : '',
    },
  });

  const onSubmit = async (values: IMarketPriceFormValues) => {
    try {
      const submitData = {
        ...values,
        date: new Date(values.date).toISOString(),
      };

      if (mode === 'create') {
        await createMarketPrice(submitData).unwrap();
        toast.success('Market price created successfully');
      } else {
        await updateMarketPrice({ id: price!.id, ...submitData }).unwrap();
        toast.success('Market price updated successfully');
      }

      router.push('/dashboard/crop-cycle/market-prices');
    } catch (error) {
      console.error(`Failed to ${mode} market price:`, error);
      toast.error(`Failed to ${mode} market price`);
    }
  };

  const isLoading = isCreating || isUpdating;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push('/dashboard/crop-cycle/market-prices')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {mode === 'create' ? 'Create New Market Price' : 'Edit Market Price'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="crop"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Crop</FormLabel>
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
                    <FormLabel>Region</FormLabel>
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

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="e.g., 2.50"
                          value={field.value ?? ''}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
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
                        <Input
                          placeholder="e.g., kg, bushel"
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
                  onClick={() => router.push('/dashboard/crop-cycle/market-prices')}
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
                    ? 'Create Price'
                    : 'Update Price'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}