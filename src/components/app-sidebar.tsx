
import React from 'react';
import { TrendingUp, BarChart3, Bell, Settings, DollarSign, Filter } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';

const menuItems = [
  { icon: TrendingUp, label: 'DASHBOARD', path: '/', active: true },
  { icon: BarChart3, label: 'ANALYTICS', path: '/analytics' },
  { icon: Bell, label: 'ALERTS', path: '/alerts', badge: '3' },
  { icon: Filter, label: 'SCREENER', path: '/screener' },
  { icon: DollarSign, label: 'PRICING', path: '/pricing' },
  { icon: Settings, label: 'SETTINGS', path: '/settings' },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-terminal-bg border-terminal-green/30">
      <SidebarHeader className="p-4">
        <div className="p-3 border border-terminal-green/30 bg-terminal-bg-light">
          <div className="text-terminal-green text-xs uppercase tracking-wider mb-2">
            SYSTEM STATUS
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-terminal-grey">MARKET</span>
              <span className="text-terminal-green">● OPEN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-grey">DATA FEED</span>
              <span className="text-terminal-green">● LIVE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-grey">ALERTS</span>
              <span className="text-terminal-amber">● ACTIVE</span>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-terminal-green font-mono uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton 
                    asChild
                    isActive={item.active}
                    className="font-mono uppercase tracking-wider text-terminal-grey hover:text-terminal-green hover:bg-terminal-green/5 data-[active=true]:bg-terminal-green/10 data-[active=true]:text-terminal-green data-[active=true]:border-l-2 data-[active=true]:border-terminal-green"
                  >
                    <a href={item.path} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <div className="bg-terminal-red text-white text-xs px-2 py-1 rounded">
                          {item.badge}
                        </div>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-terminal-green/30" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-terminal-green font-mono uppercase tracking-wider">
            Portfolio
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="p-3 border border-terminal-green/30 bg-terminal-bg-light">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-terminal-grey">TRACKED</span>
                  <span className="text-terminal-green">147</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-grey">UNDERVALUED</span>
                  <span className="text-terminal-amber">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-grey">ALERTS</span>
                  <span className="text-terminal-red">3</span>
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
