import React from 'react';
import { ArrowUpRight, ArrowDownRight, AlertCircle } from 'lucide-react';

interface Signal {
  symbol: string;
  type: 'buy' | 'sell' | 'hold';
  price: number;
  confidence: number;
  indicators: string[];
}

const signals: Signal[] = [
  {
    symbol: 'AAPL',
    type: 'buy',
    price: 175.23,
    confidence: 85,
    indicators: ['RSI Oversold', 'MACD Crossover', 'Support Level']
  },
  {
    symbol: 'TSLA',
    type: 'sell',
    price: 238.45,
    confidence: 75,
    indicators: ['RSI Overbought', 'Resistance Level']
  },
  {
    symbol: 'MSFT',
    type: 'hold',
    price: 338.11,
    confidence: 60,
    indicators: ['Neutral Trend', 'Volume Average']
  }
];

export const TradingSignals = () => {
  const getSignalColor = (type: Signal['type']) => {
    switch (type) {
      case 'buy':
        return 'text-terminal-green';
      case 'sell':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  const getSignalIcon = (type: Signal['type']) => {
    switch (type) {
      case 'buy':
        return <ArrowUpRight className="w-5 h-5" />;
      case 'sell':
        return <ArrowDownRight className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {signals.map((signal) => (
        <div 
          key={signal.symbol}
          className="p-4 bg-black/20 rounded border border-terminal-green/10"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-terminal-green font-bold">{signal.symbol}</span>
              <span className="text-terminal-green/60">${signal.price}</span>
            </div>
            <div className={`flex items-center gap-2 ${getSignalColor(signal.type)}`}>
              {getSignalIcon(signal.type)}
              <span className="uppercase font-bold">{signal.type}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-terminal-green/70 text-sm">
              Confidence: {signal.confidence}%
            </div>
            <div className="flex-1 h-1 bg-black/30 rounded">
              <div 
                className="h-full bg-terminal-green rounded"
                style={{ width: `${signal.confidence}%` }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {signal.indicators.map((indicator) => (
              <span 
                key={indicator}
                className="px-2 py-1 text-xs rounded bg-terminal-green/10 text-terminal-green/70"
              >
                {indicator}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}; 