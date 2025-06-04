import React, { useState } from 'react';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { FilterPanel } from '@/components/Screener/FilterPanel';
import { ResultsTable } from '@/components/Screener/ResultsTable';
import { PresetViews } from '@/components/Screener/PresetViews';
import { CommandBar } from '@/components/Screener/CommandBar';
import { Download, Save, Bell, Terminal } from 'lucide-react';

const Screener = () => {
  const [isLive, setIsLive] = useState(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    uvScore: { min: 0, max: 10 },
    price: { min: 0, max: 1000 },
    peRatio: { min: 0, max: 100 },
    marketCap: [] as string[],
    sectors: [] as string[],
    volatility: [] as string[],
    dividendYield: { min: 0, max: 10 },
    priceChange: {
      '7d': { min: -100, max: 100 },
      '30d': { min: -100, max: 100 }
    },
    dateAdded: null as Date | null
  });

  const handleExport = () => {
    // TODO: Implement CSV export
    console.log('Exporting to CSV...');
  };

  const handleSaveScreener = () => {
    // TODO: Implement screener saving
    console.log('Saving screener...');
  };

  const handleCreateAlert = () => {
    // TODO: Implement alert creation
    console.log('Creating alert...');
  };

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
                  <span className="terminal-glow">VALTOPIA SCREENER v1.0.0</span>
                  <span>MODE: {isLive ? 'LIVE' : 'STATIC'}</span>
                  <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={isLive ? 'text-terminal-green' : 'text-terminal-grey'}>
                    ● {isLive ? 'LIVE DATA' : 'STATIC'}
                  </span>
                  <span>DELAY: {isLive ? '0ms' : 'N/A'}</span>
                </div>
              </div>

              {/* Command Bar */}
              <div className="mb-6">
                <CommandBar />
              </div>

              {/* Preset Views and Actions */}
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <PresetViews
                  activePreset={activePreset}
                  onPresetSelect={setActivePreset}
                />
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsLive(!isLive)}
                    className={`terminal-button ${
                      isLive ? 'text-terminal-green border-terminal-green' : ''
                    }`}
                  >
                    <Terminal className="h-4 w-4 mr-2" />
                    {isLive ? 'LIVE' : 'STATIC'}
                  </button>
                  <button onClick={handleExport} className="terminal-button">
                    <Download className="h-4 w-4 mr-2" />
                    EXPORT
                  </button>
                  <button onClick={handleSaveScreener} className="terminal-button">
                    <Save className="h-4 w-4 mr-2" />
                    SAVE
                  </button>
                  <button onClick={handleCreateAlert} className="terminal-button">
                    <Bell className="h-4 w-4 mr-2" />
                    ALERT
                  </button>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Filter Panel */}
                <div className="lg:col-span-1">
                  <FilterPanel
                    filters={filters}
                    onFiltersChange={setFilters}
                  />
                </div>

                {/* Results Table */}
                <div className="lg:col-span-3">
                  <ResultsTable
                    filters={filters}
                    isLive={isLive}
                  />
                </div>
              </div>

              {/* Footer Status */}
              <div className="mt-12 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                  <div className="text-center sm:text-left">
                    Screener Engine v2.1.1 • Securities: 3,247 • Processing Time: 0.8s
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>CACHE: 1.8GB</span>
                    <span>FILTERS: {Object.keys(filters).length}</span>
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

export default Screener; 