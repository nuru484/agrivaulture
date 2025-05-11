'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  CalendarDays,
  Cloud,
  LayoutDashboard,
  Sprout,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

// Navigation items with their paths and icons
const navigationItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Weather',
    path: '/dashboard/weather',
    icon: Cloud,
  },
  {
    name: 'Market Prices',
    path: '/dashboard/market-prices',
    icon: BarChart3,
  },
  {
    name: 'Farming Tips',
    path: '/dashboard/farming-tips',
    icon: Sprout,
  },
  {
    name: 'Crop Cycle',
    path: '/dashboard/crop-cycle',
    icon: CalendarDays,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border/20 shadow-sm"
    >
      <SidebarHeader className="flex items-center px-6 py-5 border-b border-sidebar-border/20">
        <SidebarMenuButton className="flex items-center gap-3 text-sidebar-foreground">
          <Sprout className="h-7 w-7 text-sidebar-primary" />
          <span className="text-xl font-bold">AgriInfo</span>
        </SidebarMenuButton>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu className="space-y-1.5">
          {navigationItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path !== '/dashboard' && pathname?.startsWith(item.path));
            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.name}
                  className={`px-4 py-3 gap-4 hover:bg-sidebar-foreground/10 transition-colors ${
                    isActive
                      ? 'bg-sidebar-primary/10 text-sidebar-primary font-medium border-l-4 border-sidebar-primary'
                      : 'text-sidebar-foreground/90'
                  }`}
                >
                  <Link href={item.path} className="flex items-center w-full">
                    <item.icon
                      className={`h-6 w-6 ${
                        isActive ? 'text-sidebar-primary' : ''
                      }`}
                    />
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="mt-auto border-t border-sidebar-border/20">
        <SidebarMenuButton className="flex items-center gap-3 text-sidebar-foreground">
          <Sprout className="h-6 w-6" />
          <div className="text-[12px] text-sidebar-foreground/70 ">
            Ghana Agriculture Information System
          </div>
        </SidebarMenuButton>
      </SidebarFooter>

      <SidebarRail className="bg-sidebar-foreground/5" />
    </Sidebar>
  );
}
