import React from 'react';
import { TrendingUp, TrendingDown, Briefcase, PieChart, DollarSign, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for portfolio
const portfolioSummary = {
  totalValue: 156432.89,
  dayChange: 1823.45,
  dayChangePercent: 1.18,
  totalGain: 12432.89,
  totalGainPercent: 8.63,
  positions: 12
};

const portfolioPositions = [
  {
    symbol: 'MSFT',
    shares: 45,
    avgPrice: 380.25,
    currentPrice: 412.73,
    value: 18572.85,
    gain: 1461.60,
    gainPercent: 8.54,
    uvScore: 8.7,
    weight: 11.87
  },
  {
    symbol: 'NVDA',
    shares: 15,
    avgPrice: 780.50,
    currentPrice: 875.32,
    value: 13129.80,
    gain: 1422.30,
    gainPercent: 12.14,
    uvScore: 7.7,
    weight: 8.39
  },
  {
    symbol: 'GOOGL',
    shares: 65,
    avgPrice: 142.30,
    currentPrice: 175.84,
    value: 11429.60,
    gain: 2177.10,
    gainPercent: 23.53,
    uvScore: 8.4,
    weight: 7.31
  }
];

const metrics = [
  {
    label: 'Beta',
    value: '1.12',
    description: 'Volatilidad vs. S&P 500'
  },
  {
    label: 'Sharpe Ratio',
    value: '1.85',
    description: 'Retorno ajustado por riesgo'
  },
  {
    label: 'Dividend Yield',
    value: '1.32%',
    description: 'Rendimiento por dividendos'
  },
  {
    label: 'P/E Ratio',
    value: '24.5',
    description: 'Promedio ponderado'
  }
];

export default function Portfolio() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-mono text-terminal-green">PORTFOLIO</h1>
          <div className="flex items-center gap-4">
            <button className="bg-terminal-green/10 text-terminal-green px-4 py-2 rounded font-mono text-sm hover:bg-terminal-green/20 transition-colors">
              ADD POSITION
            </button>
            <button className="bg-terminal-green/10 text-terminal-green px-4 py-2 rounded font-mono text-sm hover:bg-terminal-green/20 transition-colors">
              EXPORT DATA
            </button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-sidebar p-6 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-terminal-grey font-mono text-sm">TOTAL VALUE</span>
              <Briefcase className="h-4 w-4 text-terminal-green" />
            </div>
            <div className="text-terminal-green font-mono text-2xl">
              ${portfolioSummary.totalValue.toLocaleString()}
            </div>
          </div>

          <div className="bg-sidebar p-6 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-terminal-grey font-mono text-sm">DAY CHANGE</span>
              <Activity className="h-4 w-4 text-terminal-green" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terminal-green font-mono text-2xl">
                ${portfolioSummary.dayChange.toLocaleString()}
              </span>
              <span className="text-terminal-green font-mono text-sm">
                ({portfolioSummary.dayChangePercent}%)
              </span>
            </div>
          </div>

          <div className="bg-sidebar p-6 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-terminal-grey font-mono text-sm">TOTAL GAIN/LOSS</span>
              <DollarSign className="h-4 w-4 text-terminal-green" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terminal-green font-mono text-2xl">
                ${portfolioSummary.totalGain.toLocaleString()}
              </span>
              <span className="text-terminal-green font-mono text-sm">
                ({portfolioSummary.totalGainPercent}%)
              </span>
            </div>
          </div>

          <div className="bg-sidebar p-6 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-terminal-grey font-mono text-sm">POSITIONS</span>
              <PieChart className="h-4 w-4 text-terminal-green" />
            </div>
            <div className="text-terminal-green font-mono text-2xl">
              {portfolioSummary.positions}
            </div>
          </div>
        </div>

        {/* Portfolio Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-sidebar p-4 rounded-lg">
              <div className="text-terminal-grey font-mono text-xs mb-1">{metric.label}</div>
              <div className="text-terminal-green font-mono text-xl mb-1">{metric.value}</div>
              <div className="text-terminal-grey/70 font-mono text-xs">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Positions Table */}
        <div className="bg-sidebar rounded-lg overflow-hidden">
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="text-terminal-grey/70">
                <th className="text-left p-4">SYMBOL</th>
                <th className="text-right p-4">SHARES</th>
                <th className="text-right p-4">AVG PRICE</th>
                <th className="text-right p-4">CURRENT</th>
                <th className="text-right p-4">VALUE</th>
                <th className="text-right p-4">GAIN/LOSS</th>
                <th className="text-right p-4">UV SCORE</th>
                <th className="text-right p-4">WEIGHT</th>
              </tr>
            </thead>
            <tbody>
              {portfolioPositions.map((position) => (
                <tr 
                  key={position.symbol}
                  className="border-t border-terminal-green/10 hover:bg-terminal-green/5 transition-colors"
                >
                  <td className="text-terminal-green p-4 font-medium">{position.symbol}</td>
                  <td className="text-terminal-grey text-right p-4">{position.shares}</td>
                  <td className="text-terminal-grey text-right p-4">${position.avgPrice.toFixed(2)}</td>
                  <td className="text-terminal-grey text-right p-4">${position.currentPrice.toFixed(2)}</td>
                  <td className="text-terminal-grey text-right p-4">${position.value.toLocaleString()}</td>
                  <td className="text-right p-4">
                    <div className="flex items-center justify-end gap-1">
                      {position.gain >= 0 ? (
                        <TrendingUp className="h-3 w-3 text-terminal-green" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-terminal-red" />
                      )}
                      <span className={cn(
                        position.gain >= 0 ? 'text-terminal-green' : 'text-terminal-red'
                      )}>
                        ${Math.abs(position.gain).toLocaleString()} ({position.gainPercent}%)
                      </span>
                    </div>
                  </td>
                  <td className="text-terminal-amber text-right p-4 font-medium">{position.uvScore}</td>
                  <td className="text-terminal-grey text-right p-4">{position.weight}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 