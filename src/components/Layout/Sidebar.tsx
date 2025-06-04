
import React from 'react';
import { TrendingUp, BarChart3, Bell, Settings, DollarSign, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  className?: string;
}

const menuItems = [
  { icon: TrendingUp, label: 'DASHBOARD', path: '/', active: true },
  { icon: BarChart3, label: 'ANALYTICS', path: '/analytics' },
  { icon: Bell, label: 'ALERTS', path: '/alerts', badge: '3' },
  { icon: Filter, label: 'SCREENER', path: '/screener' },
  { icon: DollarSign, label: 'PRICING', path: '/pricing' },
  { icon: Settings, label: 'SETTINGS', path: '/settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, className }) => {
  return (
    <aside className={cn(
      "bg-terminal-bg border-r border-terminal-green/30 w-64 transition-transform duration-300",
      !isOpen && "-translate-x-full md:translate-x-0",
      className
    )}>
      <div className="p-4">
        {/* System Status */}
        <div className="mb-6 p-3 border border-terminal-green/30 bg-terminal-bg-light">
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

        {/* Navigation */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className={cn(
                "flex items-center justify-between px-3 py-2 text-sm font-mono uppercase tracking-wider transition-colors",
                item.active 
                  ? "bg-terminal-green/10 text-terminal-green border-l-2 border-terminal-green" 
                  : "text-terminal-grey hover:text-terminal-green hover:bg-terminal-green/5"
              )}
            >
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
          ))}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 p-3 border border-terminal-green/30 bg-terminal-bg-light">
          <div className="text-terminal-green text-xs uppercase tracking-wider mb-2">
            PORTFOLIO
          </div>
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
      </div>
    </aside>
  );
};
