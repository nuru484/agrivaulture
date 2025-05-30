'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetUserDashboardQuery } from '@/redux/dashboardApi';

import { IExpense} from '@/types/crop-cycle/crop-expense';
import { format } from 'date-fns';

export function ExpensesCard() {
  const { data, error, isLoading } = useGetUserDashboardQuery();

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-12 w-full rounded-lg" />
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Failed to load expenses.</p>
        </CardContent>
      </Card>
    );
  }

  // Extract and validate data once
  const expenses = data.data?.expenses || [];

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        {expenses.length === 0 ? (
          <p className="text-sm text-muted-foreground">No expenses found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense: IExpense) => {
            
                const { id, item, cost, date } = expense;
                
                return (
                  <TableRow key={id}>
                    <TableCell>{item || 'N/A'}</TableCell>
                    <TableCell>{cost || 'N/A'}</TableCell>
                    <TableCell>
                      {date 
                        ? format(new Date(date), 'MMM dd, yyyy')
                        : 'N/A'}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}