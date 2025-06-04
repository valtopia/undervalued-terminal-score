import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { StockTable } from '@/components/Dashboard/StockTable';
import { QuickStats } from '@/components/Dashboard/QuickStats';
import { AlertsPanel } from '@/components/Dashboard/AlertsPanel';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSidebarExpanded(window.innerWidth >= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarVisible(prev => !prev);
    } else {
      setIsSidebarExpanded(prev => !prev);
    }
  };

  return (
    <div className="min-h-screen bg-black text-terminal-green scanline">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar 
            isExpanded={isMobile ? isSidebarVisible : isSidebarExpanded}
            onToggle={toggleSidebar}
            isMobile={isMobile}
          />
          <SidebarInset className="flex-1">
            <Header isMobile={isMobile} />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* System Info Bar */}
              <div className="mb-6 flex flex-col sm:flex-row items-center justify-between text-xs text-terminal-grey font-mono bg-black/30 p-4 rounded-lg border border-terminal-green/20">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
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
              <div className="space-y-6">
                {/* Stock Table Section */}
                <div className="bg-black border border-terminal-green/30 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-terminal-green/30 flex justify-between items-center">
                    <h2 className="text-terminal-green font-mono text-lg terminal-glow">UNDERVALUED STOCKS</h2>
                    <button className="text-xs text-terminal-grey hover:text-terminal-green transition-colors">
                      EXPAND ▼
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <StockTable />
                  </div>
                </div>

                {/* Footer with Platform Statistics */}
                <div className="mt-12 border-t border-terminal-green/30 pt-8">
                  <div className="text-terminal-green font-mono text-sm mb-6 terminal-glow text-center">
                    PLATFORM STATISTICS
                  </div>
                  <QuickStats />
                  
                  {/* Footer Status */}
                  <div className="mt-8 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                      <div className="text-center sm:text-left">
                        Data provided by Yahoo Finance • Algorithm v3.2.1 • Last scan: {currentTime.toLocaleString()}
                      </div>
                      <div className="flex items-center space-x-4">
                        <span>CPU: 23%</span>
                        <span>MEM: 1.2GB</span>
                        <span className="text-terminal-green">READY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
