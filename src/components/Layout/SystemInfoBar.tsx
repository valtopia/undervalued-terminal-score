import React from 'react';

interface SystemInfoBarProps {
  version?: string;
  mode?: string;
  isLive?: boolean;
  customStatus?: string;
  customDelay?: string;
}

export const SystemInfoBar: React.FC<SystemInfoBarProps> = ({
  version = "VALTOPIA v2.1.4",
  mode = "STATIC",
  isLive = false,
  customStatus,
  customDelay
}) => {
  return (
    <div className="h-[41px] border-b border-terminal-green/20 bg-black/40">
      <div className="flex items-center justify-between text-xs text-terminal-grey font-mono h-full max-w-[1800px] mx-auto px-8">
        <div className="flex items-center space-x-6">
          <span className="terminal-glow">{version}</span>
          <span>USER: TRADER_001</span>
          <span>SESSION: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-terminal-green">• {customStatus || "CONNECTED"}</span>
          <span>LATENCY: {customDelay || "12ms"}</span>
        </div>
      </div>
    </div>
  );
}; 