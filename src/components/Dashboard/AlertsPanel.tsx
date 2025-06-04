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
    <div className="text-xs">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="flex items-center space-x-2 p-2 hover:bg-terminal-green/5 transition-colors cursor-pointer border-b border-terminal-green/10 last:border-b-0"
        >
          {alert.type === 'new_undervalued' && (
            <AlertCircle className="h-3 w-3 text-terminal-red flex-shrink-0" />
          )}
          {alert.type === 'score_change' && (
            <TrendingUp className="h-3 w-3 text-terminal-amber flex-shrink-0" />
          )}
          {alert.type === 'price_target' && (
            <Clock className="h-3 w-3 text-terminal-green flex-shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <span className="text-terminal-amber font-bold">{alert.symbol}</span>
              <span className="text-terminal-grey truncate">{alert.message}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
