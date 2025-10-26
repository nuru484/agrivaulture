"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LoginDialog from "@/components/authentication/LoginDialog";
import SignupDialog from "../authentication/SignupDialog";
import { useDispatch } from "react-redux";
import {
  openLoginDialog,
  openSignupDialog,
} from "@/redux/auth/authDialogSlice";
import ModeToggleButton from "@/components/ModeToggleButton";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(openLoginDialog());
  };

  const handleGetStartedClick = () => {
    dispatch(openSignupDialog());
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-lg font-bold">Agrivaulture</span>
        </Link>

        <div className="flex items-center gap-3">
          <ModeToggleButton />

          <Button
            variant="default"
            onClick={handleGetStartedClick}
            className="hidden sm:inline-flex"
          >
            Get Started
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLoginClick}
            className=""
          >
            Login
          </Button>

          <LoginDialog showTrigger={false} />

          <SignupDialog showTrigger={false} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
