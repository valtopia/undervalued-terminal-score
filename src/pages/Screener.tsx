import React from 'react';
import { Search, Filter, Database, Activity } from 'lucide-react';
import { SystemInfoBar } from '@/components/Layout';

// Mock data for screener metrics
const screenerMetrics = {
  totalStocks: "10K+",
  undervalued: "324",
  avgScore: "7.2",
  coverage: "98"
};

export default function Screener() {
  return (
    <div className="h-screen bg-black text-terminal-grey flex flex-col">
      <SystemInfoBar 
        version="VALTOPIA SCREENER v1.0.0"
        customStatus="CONNECTED"
        customDelay="12ms"
      />

      <div className="flex-1 flex flex-col w-full px-4 py-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Screener Stats */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-1">
              <Search className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">COVERAGE</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{screenerMetrics.totalStocks}</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Stocks Tracked</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Undervalued</div>
                <div className="text-sm font-mono text-terminal-grey">{screenerMetrics.undervalued}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Coverage</div>
                <div className="text-sm font-mono text-terminal-grey">{screenerMetrics.coverage}%</div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">PERFORMANCE</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{screenerMetrics.avgScore}</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Avg UV Score</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Processing</div>
                <div className="text-sm font-mono text-terminal-grey">Real-time</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Uptime</div>
                <div className="text-sm font-mono text-terminal-grey">99.9%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-4">
          {/* Filter Panel */}
          <div className="col-span-6 bg-black/30 p-4 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">FILTERS</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Filter Options</div>
                <div className="text-xs text-terminal-grey/70">Coming soon...</div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="col-span-6 bg-black/30 p-4 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-3">
              <Database className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">RESULTS</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Screener Results</div>
                <div className="text-xs text-terminal-grey/70">Coming soon...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-3 pt-2 border-t border-terminal-grey/10 text-[10px] text-terminal-grey/70 font-mono">
          <div className="flex justify-between items-center">
            <div>
              Screener Engine v1.0.0 • Stocks: {screenerMetrics.totalStocks} • Coverage: {screenerMetrics.coverage}%
            </div>
            <div className="flex items-center space-x-4">
              <span>Processing: Real-time</span>
              <span className="text-terminal-grey">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 