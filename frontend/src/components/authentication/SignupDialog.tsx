'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import SignupForm from '@/components/authentication/SignupForm';
import {
  signupFormSchema,
  ISignupFormSchema,
} from '@/validation/authentication/signupValidation';
import { useRegisterUserMutation } from '@/redux/auth/authApi';
import { extractApiErrorMessage } from '@/utils/extractApiErrorMessage';
import { Button } from '@/components/ui/button';

interface SignupDialogProps {
  triggerProps?: React.ComponentProps<typeof Button>;
}
export default function SignupDialog({ triggerProps }: SignupDialogProps) {
  const router = useRouter();

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const form = useForm<ISignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
  });

  async function onSubmit(data: z.infer<typeof signupFormSchema>) {
    try {
      await registerUser(data).unwrap();
      toast.success('Signup Successful');
      router.push('/dashboard');
    } catch (err) {
      console.error('Signup error:', err);
      const apiError = extractApiErrorMessage(err);
      toast.error(apiError || 'Signup Failed. Please try again.');
    }
  }

  return (
    <SignupForm
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
      triggerProps={triggerProps}
    />
  );
}
