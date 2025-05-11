// src/components/authentication/LoginDialog.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import LoginForm from '@/components/authentication/LoginForm';
import {
  loginFormSchema,
  ILoginFormSchema,
} from '@/validation/authentication/loginValidation';
import { useLoginMutation } from '@/redux/auth/authApi';
import { extractApiErrorMessage } from '@/utils/extractApiErrorMessage';
import { Button } from '@/components/ui/button';

interface LoginDialogProps {
  triggerProps?: React.ComponentProps<typeof Button>;
}

export default function LoginDialog({ triggerProps }: LoginDialogProps) {
  const router = useRouter();

  const [loginUser, { isLoading }] = useLoginMutation();

  const form = useForm<ILoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  async function onSubmit(data: z.infer<typeof loginFormSchema>) {
    try {
      await loginUser(data).unwrap();
      toast.success('Login Successful');
      router.push('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      const apiError = extractApiErrorMessage(err);
      toast.error(apiError || 'Login Failed. Please try again.');
    }
  }

  return (
    <LoginForm
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
      triggerProps={triggerProps}
    />
  );
}
