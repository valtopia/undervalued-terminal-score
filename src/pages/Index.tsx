
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Layout/Header';
import { Sidebar } from '@/components/Layout/Sidebar';
import { MarketOverview } from '@/components/Dashboard/MarketOverview';
import { QuickStats } from '@/components/Dashboard/QuickStats';
import { StockTable } from '@/components/Dashboard/StockTable';
import { AlertsPanel } from '@/components/Dashboard/AlertsPanel';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className="flex-1 p-6">
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

          {/* Market Overview */}
          <MarketOverview />

          {/* Quick Stats */}
          <QuickStats />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Stock Table - Takes 3 columns */}
            <div className="xl:col-span-3">
              <StockTable />
            </div>

            {/* Alerts Panel - Takes 1 column */}
            <div className="xl:col-span-1">
              <AlertsPanel />
            </div>
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
      </div>
    </div>
  );
};

export default Index;
