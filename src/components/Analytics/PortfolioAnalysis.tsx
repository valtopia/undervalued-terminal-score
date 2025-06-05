import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, DollarSign, Target, Activity } from 'lucide-react';

interface PortfolioStock {
  symbol: string;
  name: string;
  shares: number;
  purchasePrice: number;
  currentPrice: number;
  performance: {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
    ytd: number;
  };
  metrics: {
    peRatio: number;
    marketCap: number;
    volume: number;
    beta: number;
  };
  scoreComponents: {
    fundamentals: number;
    technical: number;
    sentiment: number;
    risk: number;
  };
}

interface PortfolioAnalysisProps {
  portfolio: PortfolioStock[];
}

const COLORS = ['#00FF41', '#FFBE00', '#FF073A', '#00B4D8', '#9B4DCA', '#666666'];

// Mock data for status changes
const statusChanges = [
  {
    symbol: 'INTC',
    date: '2024-03-15',
    change: 'undervalued',
    score: 8.2,
    price: '$45.23'
  },
  {
    symbol: 'AMD',
    date: '2024-03-12',
    change: 'overvalued',
    score: 5.8,
    price: '$178.45'
  },
  {
    symbol: 'ORCL',
    date: '2024-03-10',
    change: 'undervalued',
    score: 7.9,
    price: '$125.67'
  }
];

// Mock data for active alerts
const activeAlerts = [
  {
    symbol: 'MSFT',
    type: 'price_target',
    target: '$420.00',
    current: '$412.73',
    progress: 95
  },
  {
    symbol: 'GOOGL',
    type: 'score_change',
    target: '9.0',
    current: '8.4',
    progress: 82
  },
  {
    symbol: 'AAPL',
    type: 'support_level',
    target: '$155.00',
    current: '$162.50',
    progress: 75
  }
];

export const PortfolioAnalysis: React.FC<PortfolioAnalysisProps> = ({ portfolio }) => {
  const getScoreColor = (score: number) => {
    if (score >= 8.5) return 'text-terminal-green';
    if (score >= 7) return 'text-terminal-yellow';
    return 'text-terminal-red';
  };

  const getPerformanceColor = (value: number) => {
    return value >= 0 ? 'text-terminal-green' : 'text-terminal-red';
  };

  const renderScoreBar = (value: number) => (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1 bg-black/30 rounded">
        <div 
          className="h-full bg-terminal-green rounded"
          style={{ width: `${value * 10}%` }}
        />
      </div>
      <span className={getScoreColor(value)}>{value.toFixed(1)}</span>
    </div>
  );

  return (
    <div className="space-y-8">
      {portfolio.map(stock => (
        <div key={stock.symbol} className="bg-black/20 border border-terminal-green/20 rounded-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-mono text-terminal-green">{stock.symbol}</h3>
              <p className="text-terminal-grey mt-1">{stock.name}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono text-terminal-green">${stock.currentPrice.toFixed(2)}</div>
              <div className={`text-sm mt-1 ${stock.performance.daily >= 0 ? 'text-terminal-green' : 'text-terminal-red'}`}>
                {stock.performance.daily >= 0 ? '+' : ''}{stock.performance.daily}% hoy
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* UV Score Components */}
            <div className="col-span-1 space-y-6">
              <h4 className="text-terminal-green/70 text-lg mb-4">UV SCORE COMPONENTS</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-terminal-grey">Fundamentals</span>
                    {renderScoreBar(stock.scoreComponents.fundamentals)}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-terminal-grey">Technical</span>
                    {renderScoreBar(stock.scoreComponents.technical)}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-terminal-grey">Sentiment</span>
                    {renderScoreBar(stock.scoreComponents.sentiment)}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-terminal-grey">Risk</span>
                    {renderScoreBar(stock.scoreComponents.risk)}
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="col-span-1 space-y-6">
              <h4 className="text-terminal-green/70 text-lg mb-4">PERFORMANCE METRICS</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/30 rounded border border-terminal-green/10">
                  <div className="text-terminal-grey text-sm mb-2">Daily</div>
                  <div className={`text-xl font-bold ${getPerformanceColor(stock.performance.daily)}`}>
                    {stock.performance.daily > 0 ? '+' : ''}{stock.performance.daily}%
                  </div>
                </div>
                <div className="p-4 bg-black/30 rounded border border-terminal-green/10">
                  <div className="text-terminal-grey text-sm mb-2">Weekly</div>
                  <div className={`text-xl font-bold ${getPerformanceColor(stock.performance.weekly)}`}>
                    {stock.performance.weekly > 0 ? '+' : ''}{stock.performance.weekly}%
                  </div>
                </div>
                <div className="p-4 bg-black/30 rounded border border-terminal-green/10">
                  <div className="text-terminal-grey text-sm mb-2">Monthly</div>
                  <div className={`text-xl font-bold ${getPerformanceColor(stock.performance.monthly)}`}>
                    {stock.performance.monthly > 0 ? '+' : ''}{stock.performance.monthly}%
                  </div>
                </div>
                <div className="p-4 bg-black/30 rounded border border-terminal-green/10">
                  <div className="text-terminal-grey text-sm mb-2">Yearly</div>
                  <div className={`text-xl font-bold ${getPerformanceColor(stock.performance.yearly)}`}>
                    {stock.performance.yearly > 0 ? '+' : ''}{stock.performance.yearly}%
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="col-span-1 space-y-6">
              <h4 className="text-terminal-green/70 text-lg mb-4">KEY METRICS</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-black/30 rounded border border-terminal-green/10">
                  <span className="text-terminal-grey">P/E Ratio</span>
                  <span className="text-terminal-green text-lg">{stock.metrics.peRatio.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/30 rounded border border-terminal-green/10">
                  <span className="text-terminal-grey">Market Cap</span>
                  <span className="text-terminal-green text-lg">${(stock.metrics.marketCap / 1e9).toFixed(2)}B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/30 rounded border border-terminal-green/10">
                  <span className="text-terminal-grey">Volume</span>
                  <span className="text-terminal-green text-lg">{(stock.metrics.volume / 1e6).toFixed(1)}M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-black/30 rounded border border-terminal-green/10">
                  <span className="text-terminal-grey">Beta</span>
                  <span className="text-terminal-green text-lg">{stock.metrics.beta.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 