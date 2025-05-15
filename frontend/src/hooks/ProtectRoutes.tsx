'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRefreshTokenMutation } from '@/redux/apiSlice';
import { userLoggedIn, userLoggedOut } from '@/redux/auth/authSlice';

interface ProtectedProps {
  children: React.ReactNode;
}

export default function ProtectRoutes({ children }: ProtectedProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [refreshToken, { isLoading }] = useRefreshTokenMutation();

  useEffect(() => {
    if (!user && !isLoading) {
      refreshToken()
        .unwrap()
        .then((response) => {
          dispatch(userLoggedIn({ user: response }));
        })
        .catch(async () => {
          dispatch(userLoggedOut());
          router.push('/');
        });
    }
  }, [user, isLoading, refreshToken, dispatch, router]);

  if (isLoading) return null;
  if (!user) {
    router.push('/');
    return null;
  }

  return <>{children}</>;
}
