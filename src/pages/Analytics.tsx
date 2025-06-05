import React from 'react';
import { LineChart, Activity, TrendingUp, Target } from 'lucide-react';
import { SystemInfoBar } from '@/components/Layout';

// Mock data for analytics metrics
const analyticsMetrics = {
  totalAssets: "5K+",
  analyzedToday: "1.2K",
  avgUvScore: "7.8",
  accuracy: "92"
};

export default function Analytics() {
  return (
    <div className="h-screen bg-black text-terminal-grey flex flex-col">
      <SystemInfoBar 
        version="VALTOPIA ANALYTICS v1.0.0"
        customStatus="CONNECTED"
        customDelay="12ms"
      />

      <div className="flex-1 flex flex-col w-full px-4 py-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Analytics Stats */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-1">
              <LineChart className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">ANALYSIS</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{analyticsMetrics.totalAssets}</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Assets Tracked</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Today</div>
                <div className="text-sm font-mono text-terminal-grey">{analyticsMetrics.analyzedToday}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Accuracy</div>
                <div className="text-sm font-mono text-terminal-grey">{analyticsMetrics.accuracy}%</div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">PERFORMANCE</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{analyticsMetrics.avgUvScore}</div>
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
          {/* Market Analysis */}
          <div className="col-span-6 bg-black/30 p-4 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">MARKET ANALYSIS</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Market Overview</div>
                <div className="text-xs text-terminal-grey/70">Coming soon...</div>
              </div>
            </div>
          </div>

          {/* Portfolio Analysis */}
          <div className="col-span-6 bg-black/30 p-4 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">PORTFOLIO ANALYSIS</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Portfolio Overview</div>
                <div className="text-xs text-terminal-grey/70">Coming soon...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-3 pt-2 border-t border-terminal-grey/10 text-[10px] text-terminal-grey/70 font-mono">
          <div className="flex justify-between items-center">
            <div>
              Analytics Engine v1.0.0 • Assets: {analyticsMetrics.totalAssets} • Accuracy: {analyticsMetrics.accuracy}%
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