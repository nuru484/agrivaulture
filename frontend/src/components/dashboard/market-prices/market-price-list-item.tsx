'use client';
import { IMarketPrice } from '@/types/market-prices/market-price';
import { Button } from '@/components/ui/button';
import { Crop, MapPin, Calendar, DollarSign, Eye, Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface IMarketPriceListItemProps {
  price: IMarketPrice;
}

export function MarketPriceListItem({ price }: IMarketPriceListItemProps) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';

  const handleView = () => {
    router.push(`/dashboard/crop-cycle/market-prices/${price.id}`);
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  return (
    <tr className="border-b hover:bg-muted/50 transition-colors">
      <td className="py-3 px-4 text-sm">
        <div className="flex items-center gap-2">
          <Crop className="h-4 w-4 text-muted-foreground" />
          {price.crop}
        </div>
      </td>
      <td className="py-3 px-4 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          {price.region}
        </div>
      </td>
      <td className="py-3 px-4 text-sm">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          {price.price.toFixed(2)} / {price.unit}
        </div>
      </td>
      <td className="py-3 px-4 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          {formatDate(price.date)}
        </div>
      </td>
      <td className="py-3 px-4 text-sm text-right">
        <div className="flex gap-2 justify-end">
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
      </td>
    </tr>
  );
}