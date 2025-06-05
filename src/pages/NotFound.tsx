import React from 'react';
import { AlertTriangle, Search, RefreshCw } from 'lucide-react';
import { SystemInfoBar } from '@/components/Layout';

// Mock data for error metrics
const errorMetrics = {
  errorCode: "404",
  timestamp: new Date().toISOString(),
  attempts: "1",
  status: "ERROR"
};

export default function NotFound() {
  return (
    <div className="h-screen bg-black text-terminal-grey flex flex-col">
      <SystemInfoBar 
        version="VALTOPIA ERROR v1.0.0"
        customStatus="ERROR"
        customDelay="N/A"
      />

      <div className="flex-1 flex flex-col w-full px-4 py-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Error Info */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-grey/20">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">ERROR</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{errorMetrics.errorCode}</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Error Code</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Status</div>
                <div className="text-sm font-mono text-terminal-grey">{errorMetrics.status}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Attempts</div>
                <div className="text-sm font-mono text-terminal-grey">{errorMetrics.attempts}</div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-1">
              <RefreshCw className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">SYSTEM</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">ACTIVE</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Current Status</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Uptime</div>
                <div className="text-sm font-mono text-terminal-grey">99.9%</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Health</div>
                <div className="text-sm font-mono text-terminal-grey">Optimal</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-4">
          {/* Error Details */}
          <div className="col-span-12 bg-black/30 p-4 rounded-lg border border-terminal-grey/20">
            <div className="flex items-center gap-2 mb-3">
              <Search className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">PAGE NOT FOUND</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Error Details</div>
                <div className="text-xs text-terminal-grey/70">
                  The requested page could not be found. Please check the URL and try again.
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Timestamp</div>
                <div className="text-xs text-terminal-grey/70">{errorMetrics.timestamp}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-3 pt-2 border-t border-terminal-grey/10 text-[10px] text-terminal-grey/70 font-mono">
          <div className="flex justify-between items-center">
            <div>
              Error Engine v1.0.0 • Code: {errorMetrics.errorCode} • Status: {errorMetrics.status}
            </div>
            <div className="flex items-center space-x-4">
              <span>System: Active</span>
              <span className="text-terminal-grey">ERROR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
