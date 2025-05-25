// src/app/dashboard/crop-cycle/page.tsx
'use client';
import { Button } from '@/components/ui/button';
import { CropRecordList } from '@/components/dashboard/crop-cycle/crop-record/crop-record-list';
import { Plus, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import {
  useDeleteAllCropRecordsMutation,
  useGetAllCropRecordsQuery,
} from '@/redux/crop-cycle/cropRecordApi';
import toast from 'react-hot-toast';

export default function CropsPage() {
  const router = useRouter();
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);

  const [deleteAllCrops, { isLoading: isDeletingAll }] =
    useDeleteAllCropRecordsMutation();
  const { data } = useGetAllCropRecordsQuery();

  const handleCreateNew = () => {
    router.push('/dashboard/crop-cycle/crop-record/create');
  };

  const handleDeleteAll = async () => {
    try {
      await deleteAllCrops().unwrap();
      toast.success('All crops deleted successfully');
    } catch (error) {
      console.error('Failed to delete all crops:', error);
      toast.error('Failed to delete all crops');
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Crop Records
              </h1>
              <p className="text-muted-foreground">
                Manage and track your crop planting and harvesting records
              </p>
            </div>
            <div className="flex gap-2">
              {(data?.data?.length ?? 0) > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteAllDialog(true)}
                  disabled={isDeletingAll}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete All
                </Button>
              )}

              <Button onClick={handleCreateNew}>
                <Plus className="mr-2 h-4 w-4" />
                Create New Crop
              </Button>
            </div>
          </div>

          <CropRecordList />
        </div>
      </div>

      <ConfirmationDialog
        open={showDeleteAllDialog}
        onOpenChange={setShowDeleteAllDialog}
        title="Delete All Crops"
        description="Are you sure you want to delete all crop records? This action cannot be undone."
        onConfirm={handleDeleteAll}
        confirmText="Delete All"
        isDestructive
      />
    </>
  );
}
