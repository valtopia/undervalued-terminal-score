import React from 'react';
import { AlertCircle, TrendingUp, Clock } from 'lucide-react';

interface Alert {
  id: string;
  type: 'new_undervalued' | 'score_change' | 'price_target';
  symbol: string;
  message: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
}

const alerts: Alert[] = [
  {
    id: '1',
    type: 'new_undervalued',
    symbol: 'INTC',
    message: 'Intel Corp entered undervalued list (Score: 8.2)',
    timestamp: '2 min ago',
    priority: 'high'
  },
  {
    id: '2',
    type: 'score_change',
    symbol: 'AAPL',
    message: 'Apple Inc score increased by 0.8 points',
    timestamp: '15 min ago',
    priority: 'medium'
  },
  {
    id: '3',
    type: 'price_target',
    symbol: 'MSFT',
    message: 'Microsoft reached 95% of fair value estimate',
    timestamp: '1 hour ago',
    priority: 'low'
  }
];

export const AlertsPanel: React.FC = () => {
  return (
    <div className="bg-black/30 rounded-lg border border-terminal-grey/20">
      <div className="flex items-center justify-between p-3 border-b border-terminal-grey/20">
        <h3 className="text-sm font-mono text-terminal-grey">ACTIVE ALERTS</h3>
        <span className="text-xs font-mono text-terminal-grey/70">{alerts.length} ALERTS</span>
      </div>
      
      <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-grey/20 scrollbar-track-transparent hover:scrollbar-thumb-terminal-grey/30">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-center space-x-3 p-3 hover:bg-terminal-grey/5 transition-colors cursor-pointer border-b border-terminal-grey/10 last:border-b-0 ${
              alert.priority === 'high' ? 'bg-terminal-red/5' : 
              alert.priority === 'medium' ? 'bg-terminal-amber/5' : 
              'bg-terminal-grey/5'
            }`}
          >
            {alert.type === 'new_undervalued' && (
              <AlertCircle className="h-4 w-4 text-terminal-red flex-shrink-0" />
            )}
            {alert.type === 'score_change' && (
              <TrendingUp className="h-4 w-4 text-terminal-amber flex-shrink-0" />
            )}
            {alert.type === 'price_target' && (
              <Clock className="h-4 w-4 text-terminal-grey flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-mono ${
                    alert.priority === 'high' ? 'text-terminal-red' : 
                    alert.priority === 'medium' ? 'text-terminal-amber' : 
                    'text-terminal-grey'
                  }`}>{alert.symbol}</span>
                  <span className="text-xs font-mono text-terminal-grey/70 truncate">{alert.message}</span>
                </div>
                <span className="text-xs font-mono text-terminal-grey/50">{alert.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
