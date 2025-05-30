'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '@/redux/store';
import { useDeleteMarketPriceMutation } from '@/redux/market-prices/marketPriceApi';
import { IMarketPrice } from '@/types/market-prices/market-price';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Crop, MapPin, DollarSign, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import toast from 'react-hot-toast';

interface IMarketPriceDetailProps {
  price: IMarketPrice;
}

export function MarketPriceDetail({ price }: IMarketPriceDetailProps) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';
  const [deleteMarketPrice, { isLoading: isDeleting }] = useDeleteMarketPriceMutation();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const getBackRoute = () => {
    if (isAdmin && pathname.startsWith('/admin-dashboard')) {
      return '/admin-dashboard/market-prices';
    }
    return '/dashboard/market-prices';
  };

  const getEditRoute = () => {
    if (isAdmin && pathname.startsWith('/admin-dashboard')) {
      return `/admin-dashboard/market-prices/${price.id}/edit`;
    }
    return `/dashboard/market-prices/${price.id}/edit`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return format(date, 'EEEE, MMMM dd, yyyy');
  };

  const handleEdit = () => {
    router.push(getEditRoute());
  };

  const handleDelete = async () => {
    try {
      await deleteMarketPrice(price.id).unwrap();
      toast.success('Market price deleted successfully');
      setShowDeleteDialog(false);
      router.push(getBackRoute());
    } catch (error) {
      console.error('Failed to delete market price:', error);
      toast.error('Failed to delete market price');
    }
  };

  // Descriptive label for dialog
  const dialogDescription = `${price.crop} - ${price.region} (${price.price.toFixed(2)}/${price.unit})`;

  // Determine if Edit and Delete buttons should be shown
  const showEditDeleteButtons = isAdmin && !pathname.startsWith('/dashboard');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push(getBackRoute())}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {showEditDeleteButtons && (
          <div className="flex gap-2 ml-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleEdit}
              disabled={isDeleting}
              className="min-w-[100px]"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDeleteDialog(true)}
              disabled={isDeleting}
              className="text-destructive hover:text-destructive min-w-[100px]"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        )}
      </div>

      <Card className="shadow-sm">
        <CardHeader />
        <CardContent className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Crop className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Crop</p>
                  <p className="text-sm text-muted-foreground">{price.crop}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Region</p>
                  <p className="text-sm text-muted-foreground">{price.region}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Price</p>
                  <p className="text-sm text-muted-foreground">{price.price.toFixed(2)} / {price.unit}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Date</p>
                  <p className="text-sm text-muted-foreground">{formatDate(price.date)}</p>
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

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Market Price"
        description={`Are you sure you want to delete the market price for "${dialogDescription}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        confirmText="Delete"
        isDestructive
      />
    </div>
  );
}