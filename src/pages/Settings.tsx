import React from 'react';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Settings as SettingsIcon, Bell, Lock, Database, Terminal, Network } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-black text-terminal-green scanline">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 w-full overflow-x-hidden">
            <Header isMobile={false} />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* System Info Bar */}
              <div className="mb-6 flex flex-col sm:flex-row items-center justify-between text-xs text-terminal-grey font-mono bg-black/30 p-4 rounded-lg border border-terminal-green/20">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
                  <span className="terminal-glow">VALTOPIA SETTINGS v1.0.0</span>
                  <span>MODE: STATIC</span>
                  <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>• STATIC</span>
                  <span>DELAY: N/A</span>
                </div>
              </div>

              {/* Command Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="terminal-button text-terminal-green border-terminal-green">
                      <Terminal className="h-4 w-4 mr-2" />
                      TERMINAL
                    </button>
                    <button className="terminal-button">
                      <Bell className="h-4 w-4 mr-2" />
                      NOTIFICATIONS
                    </button>
                    <button className="terminal-button">
                      <Lock className="h-4 w-4 mr-2" />
                      SECURITY
                    </button>
                  </div>
                  <button className="terminal-button text-terminal-amber border-terminal-amber">
                    SAVE CHANGES
                  </button>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Settings Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
                    <h2 className="text-terminal-green font-mono text-lg mb-4">CATEGORIES</h2>
                    <nav className="space-y-2">
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-left text-terminal-green bg-terminal-green/10 rounded">
                        <Terminal className="h-4 w-4" />
                        <span className="font-mono text-sm">Terminal</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-left text-terminal-grey hover:text-terminal-green hover:bg-terminal-green/5 rounded">
                        <Bell className="h-4 w-4" />
                        <span className="font-mono text-sm">Notifications</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-left text-terminal-grey hover:text-terminal-green hover:bg-terminal-green/5 rounded">
                        <Lock className="h-4 w-4" />
                        <span className="font-mono text-sm">Security</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-left text-terminal-grey hover:text-terminal-green hover:bg-terminal-green/5 rounded">
                        <Database className="h-4 w-4" />
                        <span className="font-mono text-sm">Data</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-left text-terminal-grey hover:text-terminal-green hover:bg-terminal-green/5 rounded">
                        <Network className="h-4 w-4" />
                        <span className="font-mono text-sm">Network</span>
                      </button>
                    </nav>
                  </div>
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-3">
                  <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
                    <h2 className="text-terminal-green font-mono text-lg mb-6">TERMINAL SETTINGS</h2>

                    <div className="space-y-6">
                      {/* Theme Settings */}
                      <div className="space-y-4">
                        <h3 className="text-terminal-grey font-mono text-sm">THEME</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <button className="p-4 border border-terminal-green rounded text-center">
                            <span className="block text-terminal-green font-mono text-sm mb-2">DARK</span>
                            <span className="block text-terminal-grey text-xs">Default theme</span>
                          </button>
                          <button className="p-4 border border-terminal-green/30 rounded text-center hover:border-terminal-green">
                            <span className="block text-terminal-grey font-mono text-sm mb-2">LIGHT</span>
                            <span className="block text-terminal-grey text-xs">Coming soon</span>
                          </button>
                        </div>
                      </div>

                      {/* Font Settings */}
                      <div className="space-y-4">
                        <h3 className="text-terminal-grey font-mono text-sm">FONT SIZE</h3>
                        <div className="flex items-center space-x-4">
                          <button className="px-4 py-2 text-xs font-mono border border-terminal-green/30 rounded hover:border-terminal-green">12px</button>
                          <button className="px-4 py-2 text-xs font-mono border border-terminal-green rounded">14px</button>
                          <button className="px-4 py-2 text-xs font-mono border border-terminal-green/30 rounded hover:border-terminal-green">16px</button>
                        </div>
                      </div>

                      {/* Layout Settings */}
                      <div className="space-y-4">
                        <h3 className="text-terminal-grey font-mono text-sm">LAYOUT</h3>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-terminal-green" checked />
                            <span className="text-terminal-grey text-sm">Show system info bar</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-terminal-green" checked />
                            <span className="text-terminal-grey text-sm">Show footer status</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-terminal-green" checked />
                            <span className="text-terminal-grey text-sm">Enable animations</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Status */}
              <div className="mt-12 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                  <div className="text-center sm:text-left">
                    Settings Engine v1.0.0 • User: USER_001 • Session: 2h 15m
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>CHANGES: 0</span>
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

export default Settings; 