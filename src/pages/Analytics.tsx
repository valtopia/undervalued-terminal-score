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
          <AppSidebar 
            isExpanded={true}
            onToggle={() => {}}
            isMobile={false}
          />
          <SidebarInset className="flex-1">
            <Header isMobile={false} />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* System Info Bar */}
              <div className="mb-6 flex flex-col sm:flex-row items-center justify-between text-xs text-terminal-grey font-mono bg-black/30 p-4 rounded-lg border border-terminal-green/20">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
                  <span className="terminal-glow">VALTOPIA ANALYTICS v1.0.0</span>
                  <span>ANALYSIS MODE: REAL-TIME</span>
                  <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-terminal-green">● LIVE DATA</span>
                  <span>DELAY: 0ms</span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="space-y-8">
                {/* General Overview Section */}
                <section>
                  <h2 className="text-terminal-green font-mono text-lg mb-4 terminal-glow flex items-center">
                    GENERAL OVERVIEW
                    <span className="ml-2 text-xs text-terminal-grey">[30D ANALYSIS]</span>
                  </h2>
                  <GeneralOverview />
                </section>

                {/* Portfolio Analysis Section */}
                <section>
                  <h2 className="text-terminal-green font-mono text-lg mb-4 terminal-glow flex items-center">
                    PORTFOLIO ANALYSIS
                    <span className="ml-2 text-xs text-terminal-grey">[HISTORICAL DATA]</span>
                  </h2>
                  <PortfolioAnalysis />
                </section>

                {/* Sector Analysis Section */}
                <section>
                  <h2 className="text-terminal-green font-mono text-lg mb-4 terminal-glow flex items-center">
                    SECTOR ANALYSIS
                    <span className="ml-2 text-xs text-terminal-grey">[REAL-TIME]</span>
                  </h2>
                  <SectorAnalysis />
                </section>

                {/* Alert Performance Section */}
                <section>
                  <h2 className="text-terminal-green font-mono text-lg mb-4 terminal-glow flex items-center">
                    ALERT PERFORMANCE
                    <span className="ml-2 text-xs text-terminal-grey">[MTD]</span>
                  </h2>
                  <AlertPerformance />
                </section>

                {/* Footer Status */}
                <div className="mt-12 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                  <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                    <div className="text-center sm:text-left">
                      Analytics Engine v3.2.1 • Data Points: 2.1M • Processing Time: 1.2s
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>GPU: 45%</span>
                      <span>CACHE: 2.4GB</span>
                      <span className="text-terminal-green">OPTIMAL</span>
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

export default Analytics; 