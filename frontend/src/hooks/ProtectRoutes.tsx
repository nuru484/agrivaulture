'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRefreshTokenMutation } from '@/redux/apiSlice';

interface ProtectedProps {
  children: React.ReactNode;
}

export default function ProtectRoutes({ children }: ProtectedProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const [refreshToken, { isLoading }] = useRefreshTokenMutation();
  const hasAttemptedRefresh = useRef(false);

  // Initial check when component mounts
  useEffect(() => {
    if (!user && !isLoading && !hasAttemptedRefresh.current) {
      hasAttemptedRefresh.current = true;
      // Try to refresh token once
      refreshToken()
        .unwrap()
        .catch(() => {
          // If refresh fails, redirect to login
          router.push('/');
        });
    }
  }, [user, isLoading, refreshToken, router]);

  if (isLoading || !user) return null;

  return <>{children}</>;
}
