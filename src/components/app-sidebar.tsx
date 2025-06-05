import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  TrendingUp,
  BarChart3,
  Bell,
  Settings,
  DollarSign,
  Filter,
  Search,
  CreditCard,
  Info,
  Bitcoin,
  LineChart,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar
      className={cn(
        "fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out border-r border-terminal-green/30 bg-black z-50",
        "w-[70px]",
        "flex flex-col"
      )}
      side="left"
      collapsible="icon"
    >
      {/* Logo Section */}
      <SidebarHeader className="p-2.5 border-b border-terminal-green/30">
        <Link to="/" className="text-terminal-green font-mono font-bold tracking-wider terminal-glow text-2xl text-center block">
          V
        </Link>
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent className="flex-1 p-2.5 flex flex-col justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/dashboard"}
              tooltip="Dashboard"
            >
              <Link to="/dashboard" className="flex items-center justify-center">
                <BarChart3 className="h-5 w-5" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/analytics"}
              tooltip="Analytics"
            >
              <Link to="/analytics" className="flex items-center justify-center">
                <LineChart className="h-5 w-5" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/alerts"}
              tooltip="Alerts"
            >
              <Link to="/alerts" className="flex items-center justify-center">
                <Bell className="h-5 w-5" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/screener"}
              tooltip="Screener"
            >
              <Link to="/screener" className="flex items-center justify-center">
                <Search className="h-5 w-5" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/crypto"}
              tooltip="Crypto"
            >
              <Link to="/crypto" className="flex items-center justify-center">
                <Bitcoin className="h-5 w-5" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/pricing"}
              tooltip="Pricing"
            >
              <Link to="/pricing" className="flex items-center justify-center">
                <CreditCard className="h-5 w-5" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Footer Navigation */}
      <SidebarFooter className="p-2.5 border-t border-terminal-green/30">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/about"}
              tooltip="About"
            >
              <Link to="/about" className="flex items-center justify-center">
                <Info className="h-5 w-5" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/settings"}
              tooltip="Settings"
            >
              <Link to="/settings" className="flex items-center justify-center">
                <Settings className="h-5 w-5" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
