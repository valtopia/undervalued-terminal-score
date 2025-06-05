import React from 'react';
import { terminalColors } from '@/lib/colors';

interface SystemBarProps {
  version: string;
  username: string;
  currentTime: Date;
  systemMetrics: {
    latency: number;
    uptime: number;
    health: number;
    lastSync: Date;
  };
}

export const SystemBar: React.FC<SystemBarProps> = ({
  version,
  username,
  currentTime,
  systemMetrics
}) => {
  const getLatencyColor = (latency: number) => {
    if (latency <= 50) return terminalColors.healthy;
    if (latency <= 100) return terminalColors.warning;
    return terminalColors.critical;
  };

  const getHealthColor = (health: number) => {
    if (health >= 90) return terminalColors.healthy;
    if (health >= 70) return terminalColors.warning;
    return terminalColors.critical;
  };

  return (
    <div className="flex justify-between items-center p-4 rounded-lg border font-mono text-sm"
         style={{ 
           borderColor: terminalColors.neutral,
           backgroundColor: terminalColors.background.neutral,
         }}>
      <div className="flex items-center gap-6">
        <span style={{ color: terminalColors.neutral }}>{version}</span>
        <span style={{ color: terminalColors.neutral }}>USER: {username}</span>
        <span style={{ color: terminalColors.neutral }}>
          TIME: {currentTime.toLocaleTimeString()}
        </span>
      </div>
      <div className="flex items-center gap-6">
        <span style={{ color: getLatencyColor(systemMetrics.latency) }}>
          LATENCY: {systemMetrics.latency}ms
        </span>
        <span style={{ color: terminalColors.healthy }}>
          UPTIME: {systemMetrics.uptime}h
        </span>
        <span style={{ color: getHealthColor(systemMetrics.health) }}>
          HEALTH: {systemMetrics.health}%
        </span>
        <span style={{ color: terminalColors.neutral }}>
          LAST SYNC: {systemMetrics.lastSync.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}; 