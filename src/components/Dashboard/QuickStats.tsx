import React from 'react';
import { BarChart3, Target, Clock, Star, Users, TrendingUp, Activity, Zap } from 'lucide-react';

interface StatCard {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  subStats?: {
    label: string;
    value: string;
    changeType?: 'positive' | 'negative' | 'neutral';
  }[];
}

const stats: StatCard[] = [
  {
    icon: Target,
    label: 'UNDERVALUED',
    value: '23',
    change: '+2',
    changeType: 'positive',
    subStats: [
      { label: 'High Score (>8)', value: '12', changeType: 'positive' },
      { label: 'Medium Score (6-8)', value: '11', changeType: 'neutral' }
    ]
  },
  {
    icon: Users,
    label: 'ACTIVE USERS',
    value: '1,247',
    change: '+156',
    changeType: 'positive',
    subStats: [
      { label: 'Pro Users', value: '342', changeType: 'positive' },
      { label: 'New This Week', value: '89', changeType: 'positive' }
    ]
  },
  {
    icon: Activity,
    label: 'PLATFORM ACTIVITY',
    value: '4.2K',
    change: 'DAILY AVG',
    subStats: [
      { label: 'API Calls', value: '12.5K/h', changeType: 'positive' },
      { label: 'Success Rate', value: '99.8%', changeType: 'positive' }
    ]
  },
  {
    icon: Star,
    label: 'AVG SCORE',
    value: '7.2',
    change: '+0.1',
    changeType: 'positive',
    subStats: [
      { label: 'Highest Score', value: '9.1', changeType: 'positive' },
      { label: 'Score Volatility', value: 'LOW', changeType: 'positive' }
    ]
  },
  {
    icon: TrendingUp,
    label: 'SUCCESS RATE',
    value: '76%',
    change: '+2.3%',
    changeType: 'positive',
    subStats: [
      { label: 'Profitable Picks', value: '82%', changeType: 'positive' },
      { label: 'Avg. Return', value: '+12.4%', changeType: 'positive' }
    ]
  },
  {
    icon: BarChart3,
    label: 'TRACKED',
    value: '147',
    change: '+5',
    changeType: 'positive',
    subStats: [
      { label: 'Large Cap', value: '58', changeType: 'neutral' },
      { label: 'Small/Mid Cap', value: '89', changeType: 'neutral' }
    ]
  },
  {
    icon: Clock,
    label: 'SCAN TIME',
    value: '1.2s',
    change: '-0.3s',
    changeType: 'positive',
    subStats: [
      { label: 'Data Points', value: '2.1M', changeType: 'neutral' },
      { label: 'Accuracy', value: '99.9%', changeType: 'positive' }
    ]
  },
  {
    icon: Zap,
    label: 'SYSTEM HEALTH',
    value: '98.2%',
    change: 'OPTIMAL',
    changeType: 'positive',
    subStats: [
      { label: 'Response Time', value: '45ms', changeType: 'positive' },
      { label: 'Uptime 30d', value: '99.99%', changeType: 'positive' }
    ]
  }
];

export const QuickStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className={`text-sm font-mono mb-2 ${
              stat.changeType === 'positive' ? 'text-terminal-green' :
              stat.changeType === 'negative' ? 'text-terminal-red' :
              'text-terminal-grey'
            }`}>
              {stat.change}
            </div>
          )}

          {stat.subStats && (
            <div className="mt-3 pt-3 border-t border-terminal-green/10">
              {stat.subStats.map((subStat, index) => (
                <div key={index} className="flex justify-between items-center text-xs mb-1">
                  <span className="text-terminal-grey">{subStat.label}</span>
                  <span className={
                    subStat.changeType === 'positive' ? 'text-terminal-green' :
                    subStat.changeType === 'negative' ? 'text-terminal-red' :
                    'text-terminal-grey'
                  }>{subStat.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
