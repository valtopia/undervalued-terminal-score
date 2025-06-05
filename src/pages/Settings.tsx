import React from 'react';
import { Settings as SettingsIcon, User, Bell, Shield } from 'lucide-react';
import { SystemInfoBar } from '@/components/Layout';

// Mock data for settings metrics
const settingsMetrics = {
  totalSettings: "24",
  customized: "8",
  notifications: "12",
  security: "HIGH"
};

export default function Settings() {
  return (
    <div className="h-screen bg-black text-terminal-grey flex flex-col">
      <SystemInfoBar 
        version="VALTOPIA SETTINGS v1.0.0"
        customStatus="CONNECTED"
        customDelay="12ms"
      />

      <div className="flex-1 flex flex-col w-full px-4 py-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* User Settings */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-1">
              <User className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">USER</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{settingsMetrics.totalSettings}</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Total Settings</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Custom</div>
                <div className="text-sm font-mono text-terminal-grey">{settingsMetrics.customized}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Security</div>
                <div className="text-sm font-mono text-terminal-grey">{settingsMetrics.security}</div>
              </div>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-1">
              <SettingsIcon className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">SYSTEM</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{settingsMetrics.notifications}</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Active Notifications</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Status</div>
                <div className="text-sm font-mono text-terminal-grey">Online</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Uptime</div>
                <div className="text-sm font-mono text-terminal-grey">99.9%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-4">
          {/* Notifications */}
          <div className="col-span-6 bg-black/30 p-4 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-3">
              <Bell className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">NOTIFICATIONS</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Notification Settings</div>
                <div className="text-xs text-terminal-grey/70">Coming soon...</div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="col-span-6 bg-black/30 p-4 rounded-lg border border-terminal-grey/10">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-terminal-grey" />
              <h2 className="text-lg font-mono text-terminal-grey">SECURITY</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-terminal-grey">Security Settings</div>
                <div className="text-xs text-terminal-grey/70">Coming soon...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-3 pt-2 border-t border-terminal-grey/10 text-[10px] text-terminal-grey/70 font-mono">
          <div className="flex justify-between items-center">
            <div>
              Settings Engine v1.0.0 • Settings: {settingsMetrics.totalSettings} • Security: {settingsMetrics.security}
            </div>
            <div className="flex items-center space-x-4">
              <span>Status: Online</span>
              <span className="text-terminal-grey">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 