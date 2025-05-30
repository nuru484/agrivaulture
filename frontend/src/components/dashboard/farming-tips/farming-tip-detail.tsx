'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '@/redux/store';
import { useDeleteFarmingTipMutation } from '@/redux/farmin-tips/farmingTipApi';
import { IFarmingTip } from '@/types/farming-tips/farming-tip';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Crop, MapPin, FileText, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import toast from 'react-hot-toast';

interface IFarmingTipDetailProps {
  tip: IFarmingTip;
}

export function FarmingTipDetail({ tip }: IFarmingTipDetailProps) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';
  const [deleteFarmingTip, { isLoading: isDeleting }] = useDeleteFarmingTipMutation();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return format(date, 'EEEE, MMMM dd, yyyy');
  };

  const handleEdit = () => {
    router.push(`/admin-dashboard/farming-tips/${tip.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteFarmingTip(tip.id).unwrap();
      toast.success('Farming tip deleted successfully');
      setShowDeleteDialog(false);
      router.push(pathname.startsWith('/admin-dashboard') ? '/admin-dashboard/farming-tips' : '/dashboard/farming-tips');
    } catch (error) {
      console.error('Failed to delete farming tip:', error);
      toast.error('Failed to delete farming tip');
    }
  };

  // Truncate tip text for dialog
  const truncatedTip = tip.tip.length > 50 ? `${tip.tip.slice(0, 47)}...` : tip.tip;

  // Determine back route based on pathname
  const backRoute = pathname.startsWith('/admin-dashboard') ? '/admin-dashboard/farming-tips' : '/dashboard/farming-tips';

  // Determine if Edit and Delete buttons should be shown
  const showEditDeleteButtons = isAdmin && !pathname.startsWith('/dashboard');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push(backRoute)}
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
                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Date</p>
                  <p className="text-sm text-muted-foreground">{formatDate(tip.date)}</p>
                </div>
              </div>

              {tip.crop && (
                <div className="flex items-start gap-3">
                  <Crop className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Crop</p>
                    <p className="text-sm text-muted-foreground">{tip.crop}</p>
                  </div>
                </div>
              )}

              {tip.region && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Region</p>
                    <p className="text-sm text-muted-foreground">{tip.region}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="text-sm text-muted-foreground">
                <p>Created: {format(new Date(tip.createdAt), 'MMM dd, yyyy')}</p>
                <p>Updated: {format(new Date(tip.updatedAt), 'MMM dd, yyyy')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <p className="font-semibold text-foreground">Tip Details</p>
            </div>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                  {tip.tip}
                </p>
              </CardContent>
            </Card>
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
    </div>
  );
}