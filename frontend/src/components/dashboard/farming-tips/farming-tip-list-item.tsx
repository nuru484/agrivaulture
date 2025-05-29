'use client';
import { IFarmingTip } from '@/types/farming-tips/farming-tip';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Crop, MapPin, Eye, Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';



interface IFarmingTipListItemProps {
  tip: IFarmingTip;
}

export function FarmingTipListItem({ tip }: IFarmingTipListItemProps) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const isAdmin = user?.role === 'ADMIN';

  const handleView = () => {
    router.push(`/dashboard/crop-cycle/farming-tips/${tip.id}`);
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow duration-200">
      <CardContent className="flex items-center justify-between py-4 px-6">
        <div className="flex-1 space-y-2 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            {tip.tip}
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            {tip.crop && (
              <div className="flex items-center gap-1">
                <Crop className="h-4 w-4" />
                <span>{tip.crop}</span>
              </div>
            )}
            {tip.region && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{tip.region}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(tip.date)}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 ml-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleView}
            className="min-w-[80px]"
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>
          {isAdmin && (
            <>
              <Button
                variant="outline"
                size="sm"
                disabled // Placeholder for your implementation
                className="min-w-[80px]"
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled // Placeholder for your implementation
                className="text-destructive hover:text-destructive min-w-[80px]"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}