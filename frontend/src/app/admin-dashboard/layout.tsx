// src/app/admin-dashboard/layout.tsx
import type * as React from 'react';
import AdminSidebar from '@/components/admin-dashboard/Sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import ProtectAdminRoutes from '@/components/authentication/ProtectAdminRoutes';
import ModeToggleButton from '@/components/ModeToggleButton';
import LogoutButton from '@/components/authentication/LogoutButton';
import SwitchRole from '@/components/admin-dashboard/SwitchRole';

interface AgriLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: AgriLayoutProps) {
  return (
    <ProtectAdminRoutes>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center justify-between border-b px-4">
            <SidebarTrigger className="mr-2" />

            <div className="flex gap-2">
              <SwitchRole />
              <ModeToggleButton />
              <LogoutButton />
            </div>
          </header>
          <main className="container m-auto flex-1 p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ProtectAdminRoutes>
  );
}
