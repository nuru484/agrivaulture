'use client';

import { useGetCropRecordQuery } from '@/redux/crop-cycle/cropRecordApi';
import { CropRecordDetail } from '@/components/dashboard/crop-cycle/crop-record/crop-record-detail';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useParams } from 'next/navigation';
import { ExpenseList } from '@/components/dashboard/crop-cycle/crop-expense/crop-record-list';
import { Plus, Receipt, TrendingUp } from 'lucide-react';

export default function CropDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: crop, error, isLoading } = useGetCropRecordQuery(id!);

  // Loading State
  if (isLoading) {
    return (
      <div className="container mx-auto p-6 space-y-6">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>
        <Skeleton className="h-10 w-full" />
        <div className="space-y-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  // Error State
  if (error || !crop?.data) {
    return (
      <div className="container mx-auto p-6">
        <Card className="border-destructive/50">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-destructive text-6xl mb-4">⚠️</div>
            <CardTitle className="text-destructive mb-2">Crop Not Found</CardTitle>
            <CardDescription>
              The requested crop record could not be found or loaded.
            </CardDescription>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Tab Action Handlers
  const handleCreateExpense = () => {
    // TODO: Implement create expense functionality
    console.log('Create expense for crop:', id);
  };

  const handleCreateYield = () => {
    // TODO: Implement create yield functionality
    console.log('Create yield record for crop:', id);
  };

  // Main Content
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Crop Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Crop Details</h1>
        <p className="text-muted-foreground">
          Manage and track your crop cycle information, expenses, and yields
        </p>
      </div>

      {/* Crop Record Detail Component */}
      <Card>
        <CardContent className="p-6">
          <CropRecordDetail crop={crop.data} />
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="expenses" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger 
              value="expenses" 
              className="flex items-center gap-2"
            >
              <Receipt className="h-4 w-4" />
              Expenses
            </TabsTrigger>
            <TabsTrigger 
              value="yield" 
              className="flex items-center gap-2"
            >
              <TrendingUp className="h-4 w-4" />
              Yield
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Expenses Tab */}
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  Expense Records
                </CardTitle>
                <CardDescription>
                  Track all expenses related to this crop cycle
                </CardDescription>
              </div>
              <Button 
                onClick={handleCreateExpense}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Expense
              </Button>
            </CardHeader>
            <CardContent>
              <ExpenseList cropRecordId={id} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Yield Tab */}
        <TabsContent value="yield" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Yield Records
                </CardTitle>
                <CardDescription>
                  Monitor harvest yields and production metrics
                </CardDescription>
              </div>
              <Button 
                onClick={handleCreateYield}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Record Yield
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Yield Tracking Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  Yield recording functionality will be available in the next update. 
                  You&#39;ll be able to track harvest quantities, quality metrics, and production analytics.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}