'use client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, Trash2, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import { useDeleteCropRecordMutation } from '@/redux/crop-cycle/cropRecordApi';
import toast from 'react-hot-toast';
import { ICropRecord } from '@/types/crop-cycle/crop-record';

interface ICropRecordCardProps {
  crop: ICropRecord;
}

export function CropRecordCard({ crop }: ICropRecordCardProps) {
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteCrop, { isLoading: isDeleting }] = useDeleteCropRecordMutation();

  const handleView = () => {
    router.push(`/dashboard/crop-cycle/crop-record/${crop.id}/detail`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/crop-cycle/crop-record/${crop.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteCrop(crop.id).unwrap();
      toast.success('Crop deleted successfully');
    } catch (error) {
      console.error('Failed to delete crop:', error);
      toast.error('Failed to delete crop');
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  const isHarvested = crop.harvestingDate;

  return (
    <>
      <Card className="w-full max-w-full hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        <CardHeader className="pb-3 px-3 sm:px-6">
          <div className="flex items-start justify-between gap-2 min-w-0">
            <CardTitle className="text-base sm:text-lg font-semibold text-card-foreground truncate flex-1 min-w-0">
              {crop.cropType}
            </CardTitle>
            <Badge
              variant={isHarvested ? 'default' : 'secondary'}
              className="flex-shrink-0 text-xs"
            >
              {isHarvested ? 'Harvested' : 'Growing'}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="pb-4 px-3 sm:px-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center text-xs sm:text-sm text-muted-foreground min-w-0">
              <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">
                Planted: {formatDate(crop.plantingDate)}
              </span>
            </div>

            {crop.harvestingDate && (
              <div className="flex items-center text-xs sm:text-sm text-muted-foreground min-w-0">
                <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">
                  Harvested: {formatDate(crop.harvestingDate)}
                </span>
              </div>
            )}

            {crop.notes && (
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 break-words">
                {crop.notes}
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0 px-3 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            {/* Mobile: Stack buttons vertically */}
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

            {/* Desktop: Horizontal layout */}
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
        title="Delete Crop"
        description={`Are you sure you want to delete "${crop.cropType}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        confirmText="Delete"
        isDestructive
      />
    </>
  );
}
