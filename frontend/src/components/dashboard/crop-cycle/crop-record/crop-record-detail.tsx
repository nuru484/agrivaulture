'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Calendar, FileText, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import { useDeleteCropRecordMutation } from '@/redux/crop-cycle/cropRecordApi';
import toast from 'react-hot-toast';
import { ICropRecord } from '@/types/crop-cycle/crop-record';

interface ICropRecordDetailProps {
  crop: ICropRecord;
}

export function CropRecordDetail({ crop }: ICropRecordDetailProps) {
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteCrop, { isLoading: isDeleting }] = useDeleteCropRecordMutation();

  const handleEdit = () => {
    router.push(`/dashboard/crop-cycle/crop-record/${crop.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteCrop(crop.id).unwrap();
      toast.success('Crop deleted successfully');
      router.push('/dashboard/crop-cycle');
    } catch (error) {
      console.error('Failed to delete crop:', error);
      toast.error('Failed to delete crop');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return format(date, 'EEEE, MMMM dd, yyyy');
  };

  const isHarvested = crop.harvestingDate;

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push('/dashboard/crop-cycle')}
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
            <div className="flex items-start justify-between">
              <CardTitle className="text-2xl font-bold">
                {crop.cropType}
              </CardTitle>
              <Badge
                variant={isHarvested ? 'default' : 'secondary'}
                className="text-sm px-3 py-1"
              >
                {isHarvested ? 'Harvested' : 'Growing'}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Planting Date</p>
                    <p className="text-muted-foreground">
                      {formatDate(crop.plantingDate)}
                    </p>
                  </div>
                </div>

                {crop.harvestingDate && (
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Harvesting Date</p>
                      <p className="text-muted-foreground">
                        {formatDate(crop.harvestingDate)}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>
                    Created: {format(new Date(crop?.createdAt), 'MMM dd, yyyy')}
                  </p>
                  <p>
                    Updated: {format(new Date(crop?.updatedAt), 'MMM dd, yyyy')}
                  </p>
                </div>
              </div>
            </div>

            {crop.notes && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <p className="font-medium">Notes</p>
                </div>
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {crop.notes}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Crop"
        description={`Are you sure you want to delete "${crop.cropType}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        confirmText="Delete"
        isDestructive
      />
    </>
  );
}
