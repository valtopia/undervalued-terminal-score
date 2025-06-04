
import React from 'react';
import { BarChart3, Target, Clock, Star } from 'lucide-react';

interface StatCard {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative';
}

const stats: StatCard[] = [
  {
    icon: Target,
    label: 'UNDERVALUED',
    value: '23',
    change: '+2',
    changeType: 'positive'
  },
  {
    icon: BarChart3,
    label: 'TRACKED',
    value: '147',
    change: '+5',
    changeType: 'positive'
  },
  {
    icon: Clock,
    label: 'UPDATED',
    value: '09:30',
    change: 'EST'
  },
  {
    icon: Star,
    label: 'AVG SCORE',
    value: '7.2',
    change: '+0.1',
    changeType: 'positive'
  }
];

export const QuickStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-terminal-bg border border-terminal-green/30 p-4 
                   hover:border-terminal-green/50 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <stat.icon className="h-5 w-5 text-terminal-green" />
            <div className="text-xs text-terminal-grey font-mono">
              {stat.label}
            </div>
          </div>
          
          <div className="text-2xl font-bold text-terminal-green font-mono mb-1">
            {stat.value}
          </div>
          
          {stat.change && (
            <div className={`text-sm font-mono ${
              stat.changeType === 'positive' ? 'text-terminal-green' :
              stat.changeType === 'negative' ? 'text-terminal-red' :
              'text-terminal-grey'
            }`}>
              {stat.change}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
