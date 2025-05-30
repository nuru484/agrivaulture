'use client';
import { useGetAllFarmingTipsQuery } from '@/redux/farmin-tips/farmingTipApi';
import { FarmingTipListItem } from './farming-tip-list-item';
import { IFarmingTip } from '@/types/farming-tips/farming-tip';
import { Skeleton } from '@/components/ui/skeleton';

export function FarmingTipList() {
  const { data, error, isLoading, isFetching } = useGetAllFarmingTipsQuery();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-20 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (error || !data?.data || !data.data.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">
          {error ? 'Failed to load farming tips. Please try again.' : 'No farming tips found.'}
        </p>
      </div>
    );
  }

  return (
    <div className="container m-auto space-y-4">
      {data.data.map((tip: IFarmingTip) => (
        <FarmingTipListItem key={tip.id} tip={tip} />
      ))}
      {isFetching && (
        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-lg" />
          ))}
        </div>
      )}
    </div>
  );
}