'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { navItems } from './staticData';
import SignupDialog from '@/components/authentication/SignupDialog';
import LoginDialog from '@/components/authentication/LoginDialog';
import { useDispatch } from 'react-redux';
import {
  openLoginDialog,
  openSignupDialog,
} from '@/redux/auth/authDialogSlice';
import ModeToggleButton from '@/components/ModeToggleButton';

const MobileNav: React.FC<{ setIsOpen: (isOpen: boolean) => void }> = ({
  setIsOpen,
}) => {
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setIsOpen(false);
    dispatch(openLoginDialog());
  };

  const handleSignupClick = () => {
    setIsOpen(false);
    dispatch(openSignupDialog());
  };

  return (
    <nav className="flex flex-col gap-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      ))}
      <div className="flex flex-col gap-2 mt-4">
        <Button variant="outline" onClick={handleLoginClick}>
          Login
        </Button>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <span className="hidden text-lg font-bold sm:inline-block mt-2">
              AgrInfo
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggleButton />
          <LoginDialog />
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="md:hidden space-x-2">
            <ModeToggleButton />
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          </div>

          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
                <span className="text-lg font-bold">AgrInfo</span>
              </Link>
            </div>
            <MobileNav setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
