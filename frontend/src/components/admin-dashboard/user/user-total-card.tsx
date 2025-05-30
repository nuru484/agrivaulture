'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetTotalUsersQuery } from '@/redux/userApi';

export function UserTotalCard() {
  const { data, error, isLoading } = useGetTotalUsersQuery();

  if (isLoading) {
    return (
      <Card className="w-full max-w-xs">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-16" />
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className="w-full max-w-xs">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Failed to load total users.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Total Users</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{data.data.total}</p>
      </CardContent>
    </Card>
  );
}