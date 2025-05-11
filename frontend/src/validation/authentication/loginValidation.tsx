import { z } from 'zod';

export const loginFormSchema = z.object({
  phone: z
    .string({
      required_error: 'Phone is required',
      invalid_type_error: 'Phone must be text',
    })
    .refine((val) => /^\+?[0-9]{10,15}$/.test(val), {
      message: 'Phone must be a valid number (10–15 digits)',
    }),
  password: z
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(255, 'Password must be 255 characters or less'),
});

export type ILoginFormSchema = z.infer<typeof loginFormSchema>;
