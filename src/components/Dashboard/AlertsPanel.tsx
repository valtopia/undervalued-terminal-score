
import React from 'react';
import { AlertCircle, Clock, TrendingUp } from 'lucide-react';

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
    <div className="bg-terminal-bg border border-terminal-green/30">
      {/* Header */}
      <div className="border-b border-terminal-green/30 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-terminal-green font-bold tracking-wider">
            ACTIVE ALERTS
          </h3>
          <div className="flex items-center space-x-2">
            <div className="bg-terminal-red/20 text-terminal-red text-xs px-2 py-1 rounded">
              3 NEW
            </div>
            <button className="text-terminal-grey hover:text-terminal-green text-xs">
              MANAGE
            </button>
          </div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start space-x-3 p-3 border border-terminal-green/20 
                     hover:border-terminal-green/40 transition-colors cursor-pointer"
          >
            <div className="flex-shrink-0 mt-0.5">
              {alert.type === 'new_undervalued' && (
                <AlertCircle className="h-4 w-4 text-terminal-red" />
              )}
              {alert.type === 'score_change' && (
                <TrendingUp className="h-4 w-4 text-terminal-amber" />
              )}
              {alert.type === 'price_target' && (
                <Clock className="h-4 w-4 text-terminal-green" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-terminal-amber font-bold text-sm">
                  {alert.symbol}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  alert.priority === 'high' ? 'bg-terminal-red/20 text-terminal-red' :
                  alert.priority === 'medium' ? 'bg-terminal-amber/20 text-terminal-amber' :
                  'bg-terminal-green/20 text-terminal-green'
                }`}>
                  {alert.priority.toUpperCase()}
                </span>
              </div>
              <div className="text-terminal-grey text-sm">
                {alert.message}
              </div>
              <div className="text-terminal-grey text-xs mt-1">
                {alert.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-terminal-green/30 p-3 text-center">
        <button className="terminal-button text-xs">
          VIEW ALL ALERTS
        </button>
      </div>
    </div>
  );
};
