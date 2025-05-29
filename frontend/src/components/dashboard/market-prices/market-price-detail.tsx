'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Crop, MapPin, DollarSign, Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { IMarketPrice } from '@/types/market-prices/market-price';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface IMarketPriceDetailProps {
  price: IMarketPrice;
}

export function MarketPriceDetail({ price }: IMarketPriceDetailProps) {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return format(date, 'EEEE, MMMM dd, yyyy');
  };

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
        {isAdmin && (
          <div className="flex gap-2 ml-auto">
            <Button
              variant="outline"
              disabled // Placeholder for your implementation
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              disabled // Placeholder for your implementation
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {price.crop} - {price.region}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Crop className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Crop</p>
                  <p className="text-muted-foreground">{price.crop}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Region</p>
                  <p className="text-muted-foreground">{price.region}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Price</p>
                  <p className="text-muted-foreground">{price.price.toFixed(2)} / {price.unit}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-muted-foreground">{formatDate(price.date)}</p>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>Created: {format(new Date(price.createdAt), 'MMM dd, yyyy')}</p>
                <p>Updated: {format(new Date(price.updatedAt), 'MMM dd, yyyy')}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}