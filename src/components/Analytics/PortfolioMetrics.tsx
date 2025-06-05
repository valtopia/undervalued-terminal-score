import React from 'react';
import { DollarSign, TrendingUp, Percent, AlertTriangle } from 'lucide-react';

interface Metric {
  name: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

const metrics: Metric[] = [
  {
    name: 'TOTAL VALUE',
    value: '$124,532.67',
    change: '+12.3%',
    icon: <DollarSign className="w-5 h-5" />
  },
  {
    name: 'PERFORMANCE YTD',
    value: '+18.45%',
    change: '+5.2%',
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    name: 'VOLATILITY',
    value: '0.85',
    change: '-0.12',
    icon: <Percent className="w-5 h-5" />
  },
  {
    name: 'RISK SCORE',
    value: '7.2',
    change: '+0.5',
    icon: <AlertTriangle className="w-5 h-5" />
  }
];

export const PortfolioMetrics = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric) => (
        <div 
          key={metric.name}
          className="p-4 bg-black/20 rounded border border-terminal-green/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-terminal-green/70">{metric.icon}</span>
            <span className="text-terminal-green/60 text-sm">{metric.name}</span>
          </div>
          <div className="text-terminal-green text-xl font-bold">
            {metric.value}
          </div>
          <div className="text-terminal-green/70 text-sm">
            {metric.change} vs prev period
          </div>
        </div>
      ))}
    </div>
  );
}; 