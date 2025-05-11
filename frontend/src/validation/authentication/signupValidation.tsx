import { z } from 'zod';
import { UserRole } from '@/types/auth';

export const signupFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be 100 characters or less'),
  password: z
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(255, 'Password must be 255 characters or less'),
  role: z.nativeEnum(UserRole, {
    errorMap: () => ({ message: 'Role must be FARMER or USER' }),
  }),
  region: z
    .string()
    .min(1, 'Region is required')
    .max(100, 'Region must be 100 characters or less'),
  phone: z
    .string({
      required_error: 'Phone is required',
      invalid_type_error: 'Phone must be text',
    })
    .refine((val) => /^\+?[0-9]{10,15}$/.test(val), {
      message: 'Phone must be a valid number (10–15 digits)',
    }),
});

export type ISignupFormSchema = z.infer<typeof signupFormSchema>;
