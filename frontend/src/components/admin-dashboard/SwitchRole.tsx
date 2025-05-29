'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function SwitchRole() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';

  // Initialize isAdminMode from local storage or default to true for admins
  const [isAdminMode, setIsAdminMode] = useState(() => {
    if (!isAdmin) return false;
    const savedMode = typeof window !== 'undefined' ? localStorage.getItem('isAdminMode') : null;
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    if (!isAdmin) return;
    localStorage.setItem('isAdminMode', JSON.stringify(isAdminMode));
    if (isAdminMode) {
      router.replace('/admin-dashboard');
    } else {
      router.replace('/dashboard');
    }
  }, [isAdminMode,isAdmin,router]); 

  // Only render the switch if the user is an admin
  if (!isAdmin) {
    return null;
  }

  const handleSwitchChange = (checked: boolean) => {
    setIsAdminMode(checked);
    localStorage.setItem('isAdminMode', JSON.stringify(checked));
    if (checked) {
      router.push('/admin-dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="admin-mode"
        checked={isAdminMode}
        onCheckedChange={handleSwitchChange}
      />
      <Label htmlFor="admin-mode">{isAdminMode ? 'Admin' : 'Normal'}</Label>
    </div>
  );
}