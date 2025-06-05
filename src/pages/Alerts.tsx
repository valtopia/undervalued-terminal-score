import React from 'react';
import { Bell, AlertTriangle, Check, X, Zap, Settings, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header, SystemInfoBar } from '@/components/Layout';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

// Mock data for alerts
const alertsSummary = {
  totalAlerts: 15,
  activeAlerts: 8,
  triggeredToday: 3,
  lastTrigger: '2024-03-20 15:45:23'
};

const activeAlerts = [
  {
    symbol: 'AAPL',
    type: 'price',
    condition: 'above',
    target: 180.50,
    currentValue: 178.32,
    distance: '-1.21%',
    uvScore: 7.8,
    created: '2024-03-18',
    status: 'active'
  },
  {
    symbol: 'TSLA',
    type: 'uv_score',
    condition: 'below',
    target: 7.0,
    currentValue: 7.2,
    distance: '+0.2',
    uvScore: 7.2,
    created: '2024-03-19',
    status: 'active'
  },
  {
    symbol: 'META',
    type: 'volume',
    condition: 'above',
    target: 25000000,
    currentValue: 24123456,
    distance: '-3.51%',
    uvScore: 8.1,
    created: '2024-03-20',
    status: 'active'
  }
];

const recentTriggers = [
  {
    symbol: 'NVDA',
    type: 'price',
    target: 850.00,
    triggeredAt: '2024-03-20 14:30:00',
    triggerValue: 852.45,
    uvScore: 7.9
  },
  {
    symbol: 'AMD',
    type: 'uv_score',
    target: 8.5,
    triggeredAt: '2024-03-20 11:15:00',
    triggerValue: 8.6,
    uvScore: 8.6
  },
  {
    symbol: 'MSFT',
    type: 'volume',
    target: 30000000,
    triggeredAt: '2024-03-20 10:45:00',
    triggerValue: 31234567,
    uvScore: 8.2
  }
];

const AlertStatus: React.FC<{ status: string }> = ({ status }) => (
  <div className={cn(
    "px-2 py-1 rounded text-xs font-mono",
    status === 'active' ? "bg-terminal-grey/20 text-terminal-grey" :
    status === 'triggered' ? "bg-terminal-amber/20 text-terminal-amber" :
    "bg-terminal-red/20 text-terminal-red"
  )}>
    {status.toUpperCase()}
  </div>
);

export default function Alerts() {
  return (
    <div className="min-h-screen bg-black text-terminal-grey scanline">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 w-full overflow-x-hidden">
            <Header isMobile={false} />
            
            <div className="w-full px-4 md:px-8 py-8">
              <SystemInfoBar 
                version="VALTOPIA ALERTS v1.0.0"
                customStatus="MONITORING"
                customDelay="8ms"
              />

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-full">
                {/* Alerts Summary */}
                <div className="col-span-1 xl:col-span-2 bg-black/30 p-4 md:p-6 rounded-lg border border-terminal-grey/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div>
                      <h3 className="text-xs text-terminal-grey/70 mb-2 font-mono">TOTAL ALERTS</h3>
                      <div className="text-2xl font-mono text-terminal-grey">{alertsSummary.totalAlerts}</div>
                      <div className="text-sm font-mono mt-1 text-terminal-grey/50">Configured</div>
                    </div>
                    <div>
                      <h3 className="text-xs text-terminal-grey/70 mb-2 font-mono">ACTIVE ALERTS</h3>
                      <div className="text-2xl font-mono text-terminal-grey">{alertsSummary.activeAlerts}</div>
                      <div className="text-sm font-mono mt-1 text-terminal-grey/50">Monitoring</div>
                    </div>
                    <div>
                      <h3 className="text-xs text-terminal-grey/70 mb-2 font-mono">TRIGGERED TODAY</h3>
                      <div className="text-2xl font-mono text-terminal-grey">{alertsSummary.triggeredToday}</div>
                      <div className="text-sm font-mono mt-1 text-terminal-grey/50">Last 24h</div>
                    </div>
                    <div>
                      <h3 className="text-xs text-terminal-grey/70 mb-2 font-mono">LAST TRIGGER</h3>
                      <div className="text-lg font-mono text-terminal-grey">{alertsSummary.lastTrigger.split(' ')[1]}</div>
                      <div className="text-sm font-mono mt-1 text-terminal-grey/50">{alertsSummary.lastTrigger.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>

                {/* Active Alerts */}
                <div className="bg-black/30 p-4 md:p-6 rounded-lg border border-terminal-grey/20">
                  <h2 className="text-xl font-mono mb-4 flex items-center gap-2 text-terminal-grey">
                    <Bell className="h-5 w-5" />
                    ACTIVE ALERTS
                  </h2>
                  <div className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-grey/20 scrollbar-track-transparent hover:scrollbar-thumb-terminal-grey/30">
                    {activeAlerts.map((alert, index) => (
                      <div key={index} className="p-4 bg-black/20 rounded border border-terminal-grey/10">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-mono text-lg text-terminal-grey">{alert.symbol}</div>
                            <div className="text-xs text-terminal-grey/70 font-mono">
                              {alert.type === 'price' ? 'Price' : 
                               alert.type === 'uv_score' ? 'UV Score' : 'Volume'} {alert.condition === 'above' ? '>' : '<'} {
                                alert.type === 'volume' ? 
                                (alert.target / 1000000).toFixed(1) + 'M' : 
                                alert.target.toLocaleString()
                              }
                            </div>
                          </div>
                          <AlertStatus status={alert.status} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-terminal-grey/70 font-mono">
                          <div>Current: {
                            alert.type === 'volume' ? 
                            (alert.currentValue / 1000000).toFixed(1) + 'M' : 
                            alert.currentValue.toLocaleString()
                          }</div>
                          <div>Distance: {alert.distance}</div>
                          <div>UV Score: {alert.uvScore}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Triggers */}
                <div className="bg-black/30 p-4 md:p-6 rounded-lg border border-terminal-grey/20">
                  <h2 className="text-xl font-mono mb-4 flex items-center gap-2 text-terminal-grey">
                    <AlertTriangle className="h-5 w-5" />
                    TRIGGERED ALERTS
                  </h2>
                  <div className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-grey/20 scrollbar-track-transparent hover:scrollbar-thumb-terminal-grey/30">
                    {recentTriggers.map((trigger, index) => (
                      <div key={index} className="p-4 bg-black/20 rounded border border-terminal-grey/10">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-mono text-lg text-terminal-grey">{trigger.symbol}</div>
                            <div className="text-xs text-terminal-grey/70 font-mono">
                              {trigger.type === 'price' ? 'Price' : 
                               trigger.type === 'uv_score' ? 'UV Score' : 'Volume'} = {
                                trigger.type === 'volume' ? 
                                (trigger.triggerValue / 1000000).toFixed(1) + 'M' : 
                                trigger.triggerValue.toLocaleString()
                              }
                            </div>
                          </div>
                          <div className="text-xs text-terminal-grey/70 font-mono">
                            {trigger.triggeredAt.split(' ')[1]}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-terminal-grey/70 font-mono">
                          <div>Target: {
                            trigger.type === 'volume' ? 
                            (trigger.target / 1000000).toFixed(1) + 'M' : 
                            trigger.target.toLocaleString()
                          }</div>
                          <div>UV Score: {trigger.uvScore}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Status */}
              <div className="mt-8 md:mt-12 pt-4 border-t border-terminal-grey/30 text-xs text-terminal-grey font-mono">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                  <div>
                    Alert Engine v1.0.0 • Active: {alertsSummary.activeAlerts} • Total: {alertsSummary.totalAlerts}
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>Triggered Today: {alertsSummary.triggeredToday}</span>
                    <span className="text-terminal-grey">MONITORING</span>
                  </div>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
} 