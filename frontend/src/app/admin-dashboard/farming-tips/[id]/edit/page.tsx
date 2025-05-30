'use client';
import { useParams } from 'next/navigation';
import { useGetFarmingTipQuery } from '@/redux/farmin-tips/farmingTipApi';
import { FarmingTipForm } from '@/components/dashboard/farming-tips/farming-tip-form';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

export default function UpdateFarmingTipPage() {
  const { id } = useParams<{ id: string }>();
  const { data: tip, error, isLoading } = useGetFarmingTipQuery(id);

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 space-y-6">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>
        <Skeleton className="h-10 w-full" />
        <div className="space-y-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  if (error || !tip?.data) {
    return (
      <div className="container mx-auto p-6">
        <Card className="border-destructive/50">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-destructive text-6xl mb-4">⚠️</div>
            <CardTitle className="text-destructive mb-2">Farming Tip Not Found</CardTitle>
            <CardDescription>
              The requested farming tip could not be found or loaded.
            </CardDescription>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <FarmingTipForm mode="edit" tip={tip.data} />
    </div>
  );
}