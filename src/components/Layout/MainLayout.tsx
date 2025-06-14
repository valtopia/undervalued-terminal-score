import React from 'react';
import { AppSidebar } from '../app-sidebar';
import { Header } from './Header';
import { Menu } from 'lucide-react';
import { cn } from '../../lib/utils';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';

const MainLayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  return (
    <div className="relative flex min-h-screen w-full bg-black text-terminal-grey">
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setOpenMobile(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-black border border-terminal-grey/30 
                   rounded-md hover:bg-terminal-grey/10 transition-colors md:hidden"
        >
          <Menu className="h-5 w-5 text-terminal-grey" />
        </button>
      )}

      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <main className={cn(
        "flex-1 min-h-screen w-[calc(100%-var(--sidebar-width))]",
        isMobile && "w-full",
        "flex flex-col"
      )}>
        <Header isMobile={isMobile} className="py-2" />
        <div className={cn(
          "flex-1 flex flex-col",
          "w-full",
          "px-4 md:px-8",
          "pt-2"
        )}>
          {children}
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobile && openMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpenMobile(false)}
        />
      )}
    </div>
  );
};

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <MainLayoutContent>{children}</MainLayoutContent>
    </SidebarProvider>
  );
}; 