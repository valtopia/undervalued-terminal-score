
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { MarketOverview } from '@/components/Dashboard/MarketOverview';
import { QuickStats } from '@/components/Dashboard/QuickStats';
import { StockTable } from '@/components/Dashboard/StockTable';
import { AlertsPanel } from '@/components/Dashboard/AlertsPanel';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Command palette will handle this
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-green scanlines">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <Header />
            
            <main className="p-6">
              {/* System Info Bar */}
              <div className="mb-6 flex items-center justify-between text-xs text-terminal-grey font-mono">
                <div className="flex items-center space-x-6">
                  <span>TERMINAL v2.1.4</span>
                  <span>USER: TRADER_001</span>
                  <span>SESSION: {currentTime.toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-terminal-green">● CONNECTED</span>
                  <span>LATENCY: 12ms</span>
                </div>
              </div>

              {/* Prioritized Stock Table - Takes most space */}
              <div className="mb-6">
                <StockTable />
              </div>

              {/* Market Overview */}
              <MarketOverview />

              {/* Quick Stats */}
              <QuickStats />

              {/* Alerts Panel - Moved to bottom for better stock table visibility */}
              <div className="mt-6">
                <AlertsPanel />
              </div>

              {/* Footer Status */}
              <div className="mt-8 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                <div className="flex justify-between items-center">
                  <div>
                    Data provided by Yahoo Finance • Algorithm v3.2.1 • Last scan: {currentTime.toLocaleString()}
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>CPU: 23%</span>
                    <span>MEM: 1.2GB</span>
                    <span className="text-terminal-green">READY</span>
                  </div>
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
