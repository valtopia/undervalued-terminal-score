import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketIndex {
  name: string;
  value: number;
  change: number;
  volume: string;
}

const marketIndices: MarketIndex[] = [
  {
    name: 'S&P 500',
    value: 4532.12,
    change: 1.23,
    volume: '2.3B'
  },
  {
    name: 'NASDAQ',
    value: 14213.45,
    change: -0.45,
    volume: '1.8B'
  },
  {
    name: 'DOW JONES',
    value: 35123.67,
    change: 0.89,
    volume: '1.1B'
  }
];

export const MarketSummary = () => {
  return (
    <div className="space-y-4">
      {marketIndices.map((index) => (
        <div 
          key={index.name}
          className="flex items-center justify-between p-3 bg-black/20 rounded border border-terminal-green/10"
        >
          <div>
            <div className="text-terminal-green/90 font-bold">{index.name}</div>
            <div className="text-terminal-green/60 text-sm">Vol: {index.volume}</div>
          </div>
          <div className="text-right">
            <div className="text-terminal-green/90">{index.value.toFixed(2)}</div>
            <div className="flex items-center gap-1">
              {index.change > 0 ? (
                <TrendingUp className="w-4 h-4 text-terminal-green" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span className={index.change > 0 ? 'text-terminal-green' : 'text-red-500'}>
                {Math.abs(index.change)}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 