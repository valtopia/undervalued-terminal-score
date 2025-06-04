
import React from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

interface MarketStat {
  label: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ComponentType<{ className?: string }>;
}

const marketStats: MarketStat[] = [
  {
    label: 'S&P 500',
    value: '5,026.61',
    change: '+12.45 (0.25%)',
    changeType: 'positive',
    icon: TrendingUp
  },
  {
    label: 'NASDAQ',
    value: '16,091.92',
    change: '-28.70 (-0.18%)',
    changeType: 'negative',
    icon: TrendingDown
  },
  {
    label: 'VIX',
    value: '13.67',
    change: '+0.42 (3.17%)',
    changeType: 'positive',
    icon: Activity
  },
  {
    label: 'USD/EUR',
    value: '1.0842',
    change: '-0.0012 (-0.11%)',
    changeType: 'negative',
    icon: DollarSign
  }
];

export const MarketOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {marketStats.map((stat) => (
        <div
          key={stat.label}
          className="bg-terminal-bg border border-terminal-green/30 p-4 hover:border-terminal-green/50 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <stat.icon className="h-4 w-4 text-terminal-green" />
              <span className="text-terminal-green text-sm font-mono tracking-wider">
                {stat.label}
              </span>
            </div>
            <div className="text-xs text-terminal-grey">LIVE</div>
          </div>
          
          <div className="text-terminal-green text-xl font-bold font-mono mb-1">
            {stat.value}
          </div>
          
          <div className={`text-sm font-mono ${
            stat.changeType === 'positive' ? 'text-terminal-green' : 'text-terminal-red'
          }`}>
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};
