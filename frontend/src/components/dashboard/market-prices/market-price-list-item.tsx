'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '@/redux/store';
import { useDeleteMarketPriceMutation } from '@/redux/market-prices/marketPriceApi';
import { IMarketPrice } from '@/types/market-prices/market-price';
import { Button } from '@/components/ui/button';
import { Crop, MapPin, Calendar, DollarSign, Eye, Edit, Trash2 } from 'lucide-react';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import toast from 'react-hot-toast';

interface IMarketPriceListItemProps {
  price: IMarketPrice;
}

export function MarketPriceListItem({ price }: IMarketPriceListItemProps) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';
  const [deleteMarketPrice, { isLoading: isDeleting }] = useDeleteMarketPriceMutation();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleView = () => {
    if (isAdmin && pathname.startsWith('/admin-dashboard')) {
      router.push(`/admin-dashboard/market-prices/${price.id}/detail`);
    } else {
      router.push(`/dashboard/market-prices/${price.id}/detail`);
    }
  };

  const handleEdit = () => {
    router.push(`/admin-dashboard/market-prices/${price.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteMarketPrice(price.id).unwrap();
      toast.success('Market price deleted successfully');
      setShowDeleteDialog(false);
    } catch (error) {
      console.error('Failed to delete market price:', error);
      toast.error('Failed to delete market price');
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  // Create a descriptive label for the dialog
  const dialogDescription = `${price.crop} - ${price.region} (${price.price.toFixed(2)}/${price.unit})`;

  // Determine if Edit and Delete buttons should be shown
  const showEditDeleteButtons = isAdmin && !pathname.startsWith('/dashboard');

  return (
    <>
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
            {showEditDeleteButtons && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleEdit}
                  className="min-w-[80px]"
                  disabled={isDeleting}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDeleteDialog(true)}
                  className="text-destructive hover:text-destructive min-w-[80px]"
                  disabled={isDeleting}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </>
            )}
          </div>
        </td>
      </tr>

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Market Price"
        description={`Are you sure you want to delete the market price for "${dialogDescription}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        confirmText="Delete"
        isDestructive
      />
    </>
  );
}