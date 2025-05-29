'use client';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Trash2, Scale, Calendar, Eye, Edit } from 'lucide-react';
import toast from 'react-hot-toast';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import { useDeleteYieldMutation } from '@/redux/crop-cycle/cropYieldApi';
import { IYield } from '@/types/crop-cycle/crop-yield';

// Yield Card Component
interface IYieldCardProps {
  yield: IYield;
}

export function YieldCard({ yield: yieldRecord }: IYieldCardProps) {
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteYield, { isLoading: isDeleting }] = useDeleteYieldMutation();

  const handleView = () => {
    router.push(`/dashboard/crop-cycle/yield/${yieldRecord.id}/detail`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/crop-cycle/yield/${yieldRecord.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteYield(yieldRecord.id).unwrap();
      toast.success('Yield deleted successfully');
    } catch (error) {
      console.error('Failed to delete yield:', error);
      toast.error('Failed to delete yield');
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  return (
    <>
      <Card className="w-full max-w-full hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        <CardHeader className="pb-3 px-3 sm:px-6">
          <div className="flex items-start justify-between gap-2 min-w-0">
            <CardTitle className="text-base sm:text-lg font-semibold text-card-foreground truncate flex-1 min-w-0">
              {yieldRecord.quantity} {yieldRecord.unit}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pb-4 px-3 sm:px-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center text-xs sm:text-sm text-muted-foreground min-w-0">
              <Scale className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">Quantity: {yieldRecord.quantity} {yieldRecord.unit}</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-muted-foreground min-w-0">
              <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">Date: {formatDate(yieldRecord.date)}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0 px-3 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <div className="flex gap-2 sm:hidden w-full">
              <Button
                variant="outline"
                size="sm"
                onClick={handleView}
                className="flex-1 min-w-0"
              >
                <Eye className="mr-1 h-3 w-3" />
                <span className="text-xs">View</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleEdit}
                className="flex-1 min-w-0"
              >
                <Edit className="mr-1 h-3 w-3" />
                <span className="text-xs">Edit</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDeleteDialog(true)}
                className="flex-1 min-w-0 text-destructive hover:text-destructive"
                disabled={isDeleting}
              >
                <Trash2 className="mr-1 h-3 w-3" />
                <span className="text-xs">Delete</span>
              </Button>
            </div>
            <div className="hidden sm:flex gap-2 w-full">
              <Button
                variant="outline"
                size="sm"
                onClick={handleView}
                className="flex-1 min-w-0"
              >
                <Eye className="mr-2 h-4 w-4" />
                View
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleEdit}
                className="flex-1 min-w-0"
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDeleteDialog(true)}
                className="flex-1 min-w-0 text-destructive hover:text-destructive"
                disabled={isDeleting}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Yield"
        description={`Are you sure you want to delete the yield of ${yieldRecord.quantity} ${yieldRecord.unit}? This action cannot be undone.`}
        onConfirm={handleDelete}
        confirmText="Delete"
        isDestructive
      />
    </>
  );
}