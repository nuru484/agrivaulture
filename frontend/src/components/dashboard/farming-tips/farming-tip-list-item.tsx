'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '@/redux/store';
import { useDeleteFarmingTipMutation } from '@/redux/farmin-tips/farmingTipApi';
import { IFarmingTip } from '@/types/farming-tips/farming-tip';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Crop, MapPin, Eye, Edit, Trash2 } from 'lucide-react';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import toast from 'react-hot-toast';

interface IFarmingTipListItemProps {
  tip: IFarmingTip;
}

export function FarmingTipListItem({ tip }: IFarmingTipListItemProps) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';
  const [deleteFarmingTip, { isLoading: isDeleting }] = useDeleteFarmingTipMutation();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleView = () => {
    if (pathname.startsWith('/admin-dashboard')) {
      router.push(`/admin-dashboard/farming-tips/${tip.id}/detail`);
    } else {
      router.push(`/dashboard/farming-tips/${tip.id}/detail`);
    }
  };

  const handleEdit = () => {
    router.push(`/admin-dashboard/farming-tips/${tip.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteFarmingTip(tip.id).unwrap();
      toast.success('Farming tip deleted successfully');
      setShowDeleteDialog(false);
    } catch (error) {
      console.error('Failed to delete farming tip:', error);
      toast.error('Failed to delete farming tip');
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  // Truncate tip text to 50 characters
  const truncatedTip = tip.tip.length > 50 ? `${tip.tip.slice(0, 47)}...` : tip.tip;

  // Determine if Edit and Delete buttons should be shown
  const showEditDeleteButtons = isAdmin && !pathname.startsWith('/dashboard');

  return (
    <>
      <Card className="w-full hover:shadow-lg transition-shadow duration-200">
        <CardContent className="flex items-center justify-between py-4 px-4 sm:px-6">
          <div className="flex-1 space-y-2 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {truncatedTip}
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {tip.crop && (
                <div className="flex items-center gap-1">
                  <Crop className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate max-w-[60px] sm:max-w-none">{tip.crop}</span>
                </div>
              )}
              {tip.region && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate max-w-[60px] sm:max-w-none">{tip.region}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
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
        </CardContent>
      </Card>

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Farming Tip"
        description={`Are you sure you want to delete "${truncatedTip}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        confirmText="Delete"
        isDestructive
      />
    </>
  );
}