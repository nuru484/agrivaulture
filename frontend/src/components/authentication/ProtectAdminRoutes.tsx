'use client';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '@/redux/store';
import { DashboardSkeleton } from "./ProtectRoutes";


interface ProtectAdminRoutesProps {
  children: React.ReactNode;
}

export default function ProtectAdminRoutes({ children }: ProtectAdminRoutesProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.role === 'ADMIN';
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin) {
      router.push('/dashboard');
    }
  }, [isAdmin, router]);

  if (!user || !isAdmin) {
    return <DashboardSkeleton />;
  }

  return <>{children}</>;
}