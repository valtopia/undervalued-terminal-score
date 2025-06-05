import React from 'react';
import { Info, Star, Heart, Code } from 'lucide-react';
import { SystemInfoBar } from '@/components/Layout';

// Mock data for about metrics
const aboutMetrics = {
  version: "2.1.4",
  contributors: "12",
  stars: "1.2K",
  uptime: "99.9"
};

export default function About() {
  return (
    <div className="h-screen bg-black text-terminal-green flex flex-col">
      <SystemInfoBar 
        version="VALTOPIA ABOUT v1.0.0"
        customStatus="STATIC"
        customDelay="N/A"
      />

      <div className="flex-1 flex flex-col w-full px-4 py-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Version Info */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-green/10">
            <div className="flex items-center gap-2 mb-1">
              <Info className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">VERSION</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">v{aboutMetrics.version}</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Current Version</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Contributors</div>
                <div className="text-sm font-mono text-terminal-grey">{aboutMetrics.contributors}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Stars</div>
                <div className="text-sm font-mono text-terminal-grey">{aboutMetrics.stars}</div>
              </div>
            </div>
          </div>

          {/* System Info */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-green/10">
            <div className="flex items-center gap-2 mb-1">
              <Star className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">SYSTEM</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{aboutMetrics.uptime}%</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">System Uptime</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Status</div>
                <div className="text-sm font-mono text-terminal-grey">Online</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Health</div>
                <div className="text-sm font-mono text-terminal-grey">Optimal</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-4">
          {/* About Section */}
          <div className="col-span-6 bg-black/30 p-4 rounded-lg border border-terminal-green/10">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">ABOUT</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">About Valtopia</div>
                <div className="text-xs text-terminal-grey/70">
                  Valtopia is a cutting-edge financial analysis platform designed to help investors identify undervalued assets in the market. Our advanced algorithms and real-time data processing capabilities provide users with accurate and timely insights for making informed investment decisions.
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="col-span-6 bg-black/30 p-4 rounded-lg border border-terminal-green/10">
            <div className="flex items-center gap-2 mb-3">
              <Code className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">TECH STACK</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Technologies Used</div>
                <div className="text-xs text-terminal-grey/70">
                  Built with React, TypeScript, and Tailwind CSS. Powered by advanced algorithms and real-time data processing capabilities.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-3 pt-2 border-t border-terminal-green/10 text-[10px] text-terminal-grey/70 font-mono">
          <div className="flex justify-between items-center">
            <div>
              About Engine v1.0.0 • Version: {aboutMetrics.version} • Uptime: {aboutMetrics.uptime}%
            </div>
            <div className="flex items-center space-x-4">
              <span>Status: Online</span>
              <span className="text-terminal-green">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 