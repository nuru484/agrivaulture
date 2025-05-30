// src/app/admin-dashboard/users/page.tsx
'use client';
import { UserList } from '@/components/admin-dashboard/user/user-list';
import { UserTotalCard } from '@/components/admin-dashboard/user/user-total-card';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


export default function UsersPage() {
    const user = useSelector((state: RootState) => state.auth.user);
  
    const currentUserId = user?.id || null; // Get the current user's ID or null if not available
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground">Manage user accounts and roles</p>
          </div>
          <UserTotalCard/>
        </div>
        <UserList  currentUserId={currentUserId} />
      </div>
    </div>
  );
}