'use client';
import { format } from 'date-fns';
import { Shield, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog';
import toast from 'react-hot-toast';
import {
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
  useGetUsersListQuery,
} from '@/redux/userApi';
import { IUser } from '@/types/user';

interface UserListProps {
  currentUserId?: string;
  numberOfUsers?: number; 
}

export function UserList({ currentUserId, numberOfUsers }: UserListProps) {
  const { data, error, isLoading, isFetching } = useGetUsersListQuery();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();
  const [updateUserRole, { isLoading: isUpdatingRole }] = useUpdateUserRoleMutation();
  const [showDeleteDialog, setShowDeleteDialog] = useState<{ open: boolean; userId: string | null }>({ open: false, userId: null });

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId).unwrap();
      toast.success('User deleted successfully');
    } catch (error) {
      console.error('Failed to delete user:', error);
      toast.error('Failed to delete user');
    }
  };

  const handleToggleRole = async (userId: string, currentRole: 'FARMER' | 'ADMIN') => {
    const newRole = currentRole === 'FARMER' ? 'ADMIN' : 'FARMER';
    try {
      await updateUserRole({ id: userId, role: newRole }).unwrap();
      toast.success(`User role changed to ${newRole.toLowerCase()}`);
    } catch (error) {
      console.error('Failed to update user role:', error);
      toast.error('Failed to update user role');
    }
  };

  const isCurrentUser = (userId: string) => {
    return currentUserId && userId === currentUserId;
  };

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: numberOfUsers || 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Failed to load users. Please try again.</p>
      </div>
    );
  }

  const users = data?.data || [];
  const displayedUsers = typeof numberOfUsers === 'number' && numberOfUsers > 0 ? users.slice(0, numberOfUsers) : users;

  if (!displayedUsers.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No users found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedUsers.map((user: IUser) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                {user.name}
                {isCurrentUser(user.id) && (
                  <span className="ml-2 text-xs text-muted-foreground">(You)</span>
                )}
              </TableCell>
              <TableCell>{user.email || 'N/A'}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.region}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{format(new Date(user.createdAt), 'MMM dd, yyyy')}</TableCell>
              <TableCell className="text-right">
                {!isCurrentUser(user.id) ? (
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleRole(user.id, user.role)}
                      disabled={isUpdatingRole}
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      {user.role === 'FARMER' ? 'Make Admin' : 'Make Farmer'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowDeleteDialog({ open: true, userId: user.id })}
                      disabled={isDeleting}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    Current User
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isFetching && (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-lg" />
          ))}
        </div>
      )}

      <ConfirmationDialog
        open={showDeleteDialog.open}
        onOpenChange={(open) => setShowDeleteDialog({ open, userId: open ? showDeleteDialog.userId : null })}
        title="Delete User"
        description="Are you sure you want to delete this user? This action cannot be undone."
        onConfirm={() => showDeleteDialog.userId && handleDelete(showDeleteDialog.userId)}
        confirmText="Delete"
        isDestructive
      />
    </div>
  );
}