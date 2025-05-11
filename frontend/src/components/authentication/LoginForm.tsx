'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { ILoginFormSchema } from '@/validation/authentication/loginValidation';
import { UseFormReturn } from 'react-hook-form';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeAllDialogs,
  openSignupDialog,
  openLoginDialog,
  selectActiveDialog,
} from '@/redux/authDialogSlice';

interface LoginFormContentProps {
  form: UseFormReturn<ILoginFormSchema>;
  onSubmit: (data: ILoginFormSchema) => Promise<void>;
  isLoading: boolean;
  triggerProps?: React.ComponentProps<typeof Button>;
}

export default function LoginForm({
  form,
  onSubmit,
  isLoading,
  triggerProps = {},
}: LoginFormContentProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const activeDialog = useSelector(selectActiveDialog);

  const handleSubmit = async (data: ILoginFormSchema) => {
    try {
      await onSubmit(data);
      dispatch(closeAllDialogs());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSwitchToSignup = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openSignupDialog());
  };

  const isOpen = activeDialog === 'login';

  return (
    <>
      <Button
        size="sm"
        onClick={() => dispatch(openLoginDialog())}
        {...triggerProps}
      >
        Log In
      </Button>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => !open && dispatch(closeAllDialogs())}
      >
        <DialogContent className="sm:max-w-[425px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+233546488115"
                        type="tel"
                        className="bg-muted"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          className="bg-muted pr-10"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-2 text-muted-foreground"
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-muted-foreground"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing Login...
                  </>
                ) : (
                  'Log In'
                )}
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-foreground text-sm space-y-2">
            <p>
              Forgot your password?{' '}
              <Link
                href="/forgot-password"
                className="underline hover:text-muted-foreground"
              >
                Reset Password
              </Link>
            </p>
            <p>
              Don&apos;t have an account?{' '}
              <Button
                className="bg-transparent border-none underline text-foreground hover:text-muted-foreground hover:bg-transparent p-0 h-auto cursor-pointer"
                onClick={handleSwitchToSignup}
              >
                Sign Up
              </Button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
