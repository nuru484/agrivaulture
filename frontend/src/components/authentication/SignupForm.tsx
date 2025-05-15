'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { ISignupFormSchema } from '@/validation/authentication/signupValidation';
import { UseFormReturn } from 'react-hook-form';
import { regionsInGhana } from './constants';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeAllDialogs,
  openSignupDialog,
  openLoginDialog,
  selectActiveDialog,
} from '@/redux/auth/authDialogSlice';

interface SignupFormContentProps {
  form: UseFormReturn<ISignupFormSchema>;
  onSubmit: (data: ISignupFormSchema) => Promise<void>;
  isLoading: boolean;
  triggerProps?: React.ComponentProps<typeof Button>;
}

export default function SignupForm({
  form,
  onSubmit,
  isLoading,
  triggerProps = {},
}: SignupFormContentProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const activeDialog = useSelector(selectActiveDialog);

  const handleSubmit = async (data: ISignupFormSchema) => {
    try {
      await onSubmit(data);
      dispatch(closeAllDialogs());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSwitchToLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openLoginDialog());
  };

  const isOpen = activeDialog === 'signup';

  return (
    <>
      <Button
        size="sm"
        onClick={() => dispatch(openSignupDialog())}
        {...triggerProps}
      >
        Sign Up
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
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
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Region</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-muted w-full">
                          <SelectValue placeholder="Select a region" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {regionsInGhana.map((region) => (
                          <SelectItem key={region.value} value={region.value}>
                            {region.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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

              {/* Hidden Role Field */}
              <input type="hidden" value="FARMER" {...form.register('role')} />

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-muted-foreground"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing Signup...
                  </>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </form>
          </Form>
          <p className="mt-4 text-foreground text-sm">
            Already have an account?{' '}
            <Button
              className="bg-transparent border-none underline text-foreground hover:text-muted-foreground hover:bg-transparent p-0 h-auto cursor-pointer"
              onClick={handleSwitchToLogin}
            >
              Log In
            </Button>
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
