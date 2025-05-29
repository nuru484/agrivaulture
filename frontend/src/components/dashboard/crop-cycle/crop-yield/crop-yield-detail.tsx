'use client';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Trash2, Scale, Calendar, Edit } from 'lucide-react';
import toast from 'react-hot-toast';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import { useDeleteYieldMutation } from '@/redux/crop-cycle/cropYieldApi';
import { IYield } from '@/types/crop-cycle/crop-yield';

interface IYieldDetailProps {
  yield: IYield;
}

export function YieldDetail({ yield: yieldRecord }: IYieldDetailProps) {
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteYield, { isLoading: isDeleting }] = useDeleteYieldMutation();

  const handleEdit = () => {
    router.push(`/dashboard/crop-cycle/yield/${yieldRecord.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteYield(yieldRecord.id).unwrap();
      toast.success('Yield deleted successfully');
      router.push(`/dashboard/crop-cycle/crop-record/${yieldRecord.cropRecordId}/detail`);
    } catch (error) {
      console.error('Failed to delete yield:', error);
      toast.error('Failed to delete yield');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return format(date, 'EEEE, MMMM dd, yyyy');
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push(`/dashboard/crop-cycle/crop-record/${yieldRecord.cropRecordId}/detail`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex gap-2 ml-auto">
            <Button variant="outline" onClick={handleEdit}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(true)}
              disabled={isDeleting}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{yieldRecord.quantity} {yieldRecord.unit}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Scale className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Quantity</p>
                    <p className="text-muted-foreground">{yieldRecord.quantity} {yieldRecord.unit}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-muted-foreground">{formatDate(yieldRecord.date)}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>Created: {format(new Date(yieldRecord.createdAt), 'MMM dd, yyyy')}</p>
                  <p>Updated: {format(new Date(yieldRecord.updatedAt), 'MMM dd, yyyy')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

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