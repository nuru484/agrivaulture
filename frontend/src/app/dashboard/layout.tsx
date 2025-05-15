import type * as React from 'react';

import DashboardSidebar from '@/components/dashboard/Sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import ProtectRoutes from '@/hooks/ProtectRoutes';

interface AgriLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: AgriLayoutProps) {
  return (
    <ProtectRoutes>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger className="mr-2" />
          </header>
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ProtectRoutes>
  );
}
