import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
  metricType: 'percentage' | 'performance' | 'status' | 'count' | 'time';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  subtitle,
  metricType
}) => {
  const getMetricColor = () => {
    const numericValue = typeof value === 'number' ? value : parseFloat(value);

    switch (metricType) {
      case 'percentage':
        if (numericValue >= 90) return 'text-terminal-grey';
        if (numericValue >= 70) return 'text-terminal-grey';
        if (numericValue >= 50) return 'text-terminal-amber';
        if (numericValue >= 30) return 'text-terminal-amber';
        return 'text-terminal-red';

      case 'performance':
        if (numericValue > 7) return 'text-terminal-grey';
        if (numericValue > 5) return 'text-terminal-amber';
        return 'text-terminal-red';

      case 'status':
        if (value === 'OPTIMAL' || value === 'HEALTHY') return 'text-terminal-grey';
        if (value === 'WARNING') return 'text-terminal-amber';
        return 'text-terminal-red';

      default:
        return 'text-terminal-grey';
    }
  };

  return (
    <div className="bg-black/30 p-4 rounded-lg border border-terminal-grey/20 hover:border-terminal-grey/40 transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`h-4 w-4 ${getMetricColor()}`} />
        <h3 className="text-sm font-mono text-terminal-grey">{title}</h3>
      </div>
      
      <div className={`text-2xl font-mono mb-1 ${getMetricColor()}`}>
        {value}
      </div>
      
      {subtitle && (
        <div className="text-sm font-mono text-terminal-grey/70">{subtitle}</div>
      )}
      
      {trend && (
        <div className={`text-sm font-mono ${trend.isPositive ? 'text-terminal-grey' : 'text-terminal-red'}`}>
          {trend.isPositive ? '↑' : '↓'} {trend.value}%
        </div>
      )}
    </div>
  );
}; 