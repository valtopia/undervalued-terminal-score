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
import { TrendingUp, AlertCircle, Activity } from 'lucide-react';

// Mock data for portfolio performance
const performanceData = [
  { date: '2023-10', portfolio: 100, sp500: 100 },
  { date: '2023-11', portfolio: 105.2, sp500: 102.8 },
  { date: '2023-12', portfolio: 112.4, sp500: 105.6 },
  { date: '2024-01', portfolio: 118.7, sp500: 108.9 },
  { date: '2024-02', portfolio: 124.5, sp500: 111.2 },
  { date: '2024-03', portfolio: 131.8, sp500: 114.5 }
];

// Mock data for asset contribution
const contributionData = [
  { name: 'MSFT', value: 25.4 },
  { name: 'GOOGL', value: 18.7 },
  { name: 'AAPL', value: 15.2 },
  { name: 'NVDA', value: 12.8 },
  { name: 'META', value: 10.5 },
  { name: 'Others', value: 17.4 }
];

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

export const PortfolioAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Performance Chart */}
      <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
        <h3 className="text-terminal-green font-mono mb-4 flex items-center">
          <TrendingUp className="h-4 w-4 mr-2" />
          PORTFOLIO VS S&P 500
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
              <XAxis dataKey="date" stroke="#00FF41" />
              <YAxis stroke="#00FF41" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid rgba(0, 255, 65, 0.3)',
                  color: '#00FF41'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="portfolio"
                stroke="#00FF41"
                name="Portfolio"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="sp500"
                stroke="#FFBE00"
                name="S&P 500"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Contribution */}
        <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
          <h3 className="text-terminal-green font-mono mb-4">CONTRIBUTION BY ASSET</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={contributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#00FF41"
                  dataKey="value"
                  label={({ name, value }) => `${name} (${value}%)`}
                >
                  {contributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00FF41'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Changes */}
        <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
          <h3 className="text-terminal-green font-mono mb-4 flex items-center">
            <Activity className="h-4 w-4 mr-2" />
            STATUS CHANGES
          </h3>
          <div className="space-y-4">
            {statusChanges.map((change) => (
              <div
                key={change.symbol}
                className="flex items-center justify-between p-3 border border-terminal-green/20 rounded"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-terminal-amber font-bold">{change.symbol}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    change.change === 'undervalued'
                      ? 'bg-terminal-green/20 text-terminal-green'
                      : 'bg-terminal-red/20 text-terminal-red'
                  }`}>
                    {change.change.toUpperCase()}
                  </span>
                </div>
                <div className="text-terminal-grey text-sm">
                  Score: <span className="text-terminal-green">{change.score}</span>
                </div>
                <div className="text-terminal-grey text-sm">
                  Price: <span className="text-terminal-green">{change.price}</span>
                </div>
                <div className="text-terminal-grey text-xs">{change.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Alerts */}
        <div className="bg-black border border-terminal-green/30 rounded-lg p-6 lg:col-span-2">
          <h3 className="text-terminal-green font-mono mb-4 flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            ACTIVE ALERTS
          </h3>
          <div className="space-y-4">
            {activeAlerts.map((alert) => (
              <div
                key={alert.symbol}
                className="flex items-center justify-between p-3 border border-terminal-green/20 rounded"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-terminal-amber font-bold">{alert.symbol}</span>
                  <span className="text-xs text-terminal-grey">{alert.type.replace('_', ' ').toUpperCase()}</span>
                </div>
                <div className="flex-1 max-w-md mx-8">
                  <div className="flex justify-between text-xs text-terminal-grey mb-1">
                    <span>Current: {alert.current}</span>
                    <span>Target: {alert.target}</span>
                  </div>
                  <div className="h-2 bg-terminal-green/20 rounded">
                    <div
                      className="h-full bg-terminal-amber rounded"
                      style={{ width: `${alert.progress}%` }}
                    />
                  </div>
                </div>
                <div className="text-terminal-green text-sm font-mono">
                  {alert.progress}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 