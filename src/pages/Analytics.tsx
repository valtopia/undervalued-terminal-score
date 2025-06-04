import React from 'react';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { GeneralOverview } from '@/components/Analytics/GeneralOverview';
import { PortfolioAnalysis } from '@/components/Analytics/PortfolioAnalysis';
import { SectorAnalysis } from '@/components/Analytics/SectorAnalysis';
import { AlertPerformance } from '@/components/Analytics/AlertPerformance';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-black text-terminal-green scanline">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 w-full overflow-x-hidden">
            <Header isMobile={false} />
            
            <div className="max-w-7xl mx-auto px-8 py-8">
              {/* System Info Bar */}
              <div className="mb-6 flex items-center justify-between text-xs text-terminal-grey font-mono bg-black/30 p-4 rounded-lg border border-terminal-green/20">
                <div className="flex items-center space-x-6">
                  <span className="terminal-glow">VALTOPIA ANALYTICS v1.0.0</span>
                  <span>MODE: STATIC</span>
                  <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>• STATIC</span>
                  <span>DELAY: N/A</span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-2 gap-6">
                <GeneralOverview />
                <PortfolioAnalysis />
                <SectorAnalysis />
                <AlertPerformance />
              </div>

              {/* Footer Status */}
              <div className="mt-12 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                <div className="flex justify-between items-center">
                  <div>
                    Analytics Engine v1.0.0 • Processing Time: 1.2s • Cache: 2.4GB
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>UPDATES: LIVE</span>
                    <span className="text-terminal-green">READY</span>
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

export default Analytics; 