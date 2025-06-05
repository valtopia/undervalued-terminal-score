import React from 'react';
import { StockTable } from './StockTable';
import { AlertsPanel } from './AlertsPanel';

interface DynamicContentProps {
  activeTab: 'stocks' | 'alerts' | 'favorites' | 'simulator';
}

export const DynamicContent: React.FC<DynamicContentProps> = ({ activeTab }) => {
  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-terminal-grey/20 scrollbar-track-transparent pb-2">
        <div className="flex gap-2 md:gap-4">
          <button 
            className={`px-3 md:px-4 py-2 font-mono text-sm whitespace-nowrap ${
              activeTab === 'stocks' 
                ? 'bg-terminal-grey/10 border border-terminal-grey' 
                : 'border border-terminal-grey/30'
            } rounded hover:bg-terminal-grey/5`}
          >
            STOCKS
          </button>
          <button 
            className={`px-3 md:px-4 py-2 font-mono text-sm whitespace-nowrap ${
              activeTab === 'alerts' 
                ? 'bg-terminal-grey/10 border border-terminal-grey' 
                : 'border border-terminal-grey/30'
            } rounded hover:bg-terminal-grey/5`}
          >
            ALERTS
          </button>
          <button 
            className={`px-3 md:px-4 py-2 font-mono text-sm whitespace-nowrap ${
              activeTab === 'favorites' 
                ? 'bg-terminal-grey/10 border border-terminal-grey' 
                : 'border border-terminal-grey/30'
            } rounded hover:bg-terminal-grey/5`}
          >
            FAVORITES
          </button>
          <button 
            className={`px-3 md:px-4 py-2 font-mono text-sm whitespace-nowrap ${
              activeTab === 'simulator' 
                ? 'bg-terminal-grey/10 border border-terminal-grey' 
                : 'border border-terminal-grey/30'
            } rounded hover:bg-terminal-grey/5`}
          >
            SIMULATOR
          </button>
        </div>
      </div>

      <div className="w-full">
        {activeTab === 'stocks' && <StockTable />}
        {activeTab === 'alerts' && <AlertsPanel />}
        {activeTab === 'favorites' && (
          <div className="bg-black/30 p-4 md:p-6 rounded-lg border border-terminal-grey/20">
            <div className="text-center text-terminal-grey font-mono py-8">
              Favorites feature coming soon...
            </div>
          </div>
        )}
        {activeTab === 'simulator' && (
          <div className="bg-black/30 p-4 md:p-6 rounded-lg border border-terminal-grey/20">
            <div className="text-center text-terminal-grey font-mono py-8">
              Simulator feature coming soon...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 