import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { StockTable } from '@/components/Dashboard/StockTable';
import { QuickStats } from '@/components/Dashboard/QuickStats';
import { AlertsPanel } from '@/components/Dashboard/AlertsPanel';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-terminal-green scanline">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* System Info Bar */}
        <div className="mb-6 flex items-center justify-between text-xs text-terminal-grey font-mono bg-black/30 p-4 rounded-lg border border-terminal-green/20">
          <div className="flex items-center space-x-6">
            <span className="terminal-glow">VALTOPIA v2.1.4</span>
            <span>USER: TRADER_001</span>
            <span>SESSION: {currentTime.toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-terminal-green">● CONNECTED</span>
            <span>LATENCY: 12ms</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-6">
          <QuickStats />
          <AlertsPanel />
          <div className="col-span-2">
            <StockTable />
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-12 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
          <div className="flex justify-between items-center">
            <div>
              Dashboard v2.1.4 • Assets: 3,247 • Last Update: {currentTime.toLocaleTimeString()}
            </div>
            <div className="flex items-center space-x-4">
              <span>CACHE: 1.2GB</span>
              <span className="text-terminal-green">READY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 