import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { AlertCircle, TrendingUp, Clock, Target } from 'lucide-react';

// Mock data for alert success rate
const successRateData = [
  { month: 'Oct', rate: 72 },
  { month: 'Nov', rate: 75 },
  { month: 'Dec', rate: 78 },
  { month: 'Jan', rate: 82 },
  { month: 'Feb', rate: 85 },
  { month: 'Mar', rate: 88 }
];

// Mock data for top performing alerts
const topAlerts = [
  {
    symbol: 'NVDA',
    type: 'price_target',
    gain: 28.4,
    days: 12,
    status: 'completed'
  },
  {
    symbol: 'AMD',
    type: 'undervalued',
    gain: 22.7,
    days: 18,
    status: 'completed'
  },
  {
    symbol: 'MSFT',
    type: 'support_level',
    gain: 15.2,
    days: 8,
    status: 'completed'
  }
];

// Mock data for flop alerts
const flopAlerts = [
  {
    symbol: 'META',
    type: 'resistance',
    loss: -8.4,
    days: 21,
    status: 'stopped'
  },
  {
    symbol: 'NFLX',
    type: 'overvalued',
    loss: -6.2,
    days: 15,
    status: 'stopped'
  },
  {
    symbol: 'TSLA',
    type: 'price_target',
    loss: -4.8,
    days: 30,
    status: 'expired'
  }
];

// Mock data for time to target
const timeToTargetData = [
  { days: '1-7', count: 24 },
  { days: '8-14', count: 38 },
  { days: '15-21', count: 18 },
  { days: '22-30', count: 12 },
  { days: '30+', count: 8 }
];

export const AlertPerformance: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Success Rate Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-black border border-terminal-green/30 rounded-lg p-6">
          <h3 className="text-terminal-green font-mono mb-4 flex items-center">
            <Target className="h-4 w-4 mr-2" />
            ALERT SUCCESS RATE
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={successRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
                <XAxis dataKey="month" stroke="#00FF41" />
                <YAxis stroke="#00FF41" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00FF41'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#00FF41"
                  strokeWidth={2}
                  dot={{ fill: '#00FF41' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Time to Target Distribution */}
        <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
          <h3 className="text-terminal-green font-mono mb-4 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            TIME TO TARGET
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeToTargetData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
                <XAxis type="number" stroke="#00FF41" />
                <YAxis dataKey="days" type="category" stroke="#00FF41" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00FF41'
                  }}
                />
                <Bar dataKey="count" fill="#00FF41" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top and Flop Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Alerts */}
        <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
          <h3 className="text-terminal-green font-mono mb-4 flex items-center">
            <TrendingUp className="h-4 w-4 mr-2" />
            TOP PERFORMING ALERTS
          </h3>
          <div className="space-y-4">
            {topAlerts.map((alert, index) => (
              <div
                key={index}
                className="p-3 border border-terminal-green/20 rounded flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-amber font-bold">{alert.symbol}</span>
                    <span className="text-xs text-terminal-grey">{alert.type.toUpperCase()}</span>
                  </div>
                  <div className="text-xs text-terminal-grey mt-1">
                    Completed in {alert.days} days
                  </div>
                </div>
                <div className="text-terminal-green text-lg font-mono">
                  +{alert.gain}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flop Alerts */}
        <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
          <h3 className="text-terminal-green font-mono mb-4 flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            FLOP ALERTS
          </h3>
          <div className="space-y-4">
            {flopAlerts.map((alert, index) => (
              <div
                key={index}
                className="p-3 border border-terminal-green/20 rounded flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-amber font-bold">{alert.symbol}</span>
                    <span className="text-xs text-terminal-grey">{alert.type.toUpperCase()}</span>
                  </div>
                  <div className="text-xs text-terminal-grey mt-1">
                    {alert.status.toUpperCase()} after {alert.days} days
                  </div>
                </div>
                <div className="text-terminal-red text-lg font-mono">
                  {alert.loss}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-black border border-terminal-green/30 rounded-lg p-4">
          <div className="text-xs text-terminal-grey mb-1">SUCCESS RATE</div>
          <div className="text-2xl text-terminal-green font-mono">88%</div>
          <div className="text-xs text-terminal-amber mt-1">+3.2% MTD</div>
        </div>
        <div className="bg-black border border-terminal-green/30 rounded-lg p-4">
          <div className="text-xs text-terminal-grey mb-1">AVG GAIN</div>
          <div className="text-2xl text-terminal-green font-mono">18.4%</div>
          <div className="text-xs text-terminal-amber mt-1">+2.1% MTD</div>
        </div>
        <div className="bg-black border border-terminal-green/30 rounded-lg p-4">
          <div className="text-xs text-terminal-grey mb-1">AVG DAYS</div>
          <div className="text-2xl text-terminal-green font-mono">12.5</div>
          <div className="text-xs text-terminal-amber mt-1">-1.2 MTD</div>
        </div>
        <div className="bg-black border border-terminal-green/30 rounded-lg p-4">
          <div className="text-xs text-terminal-grey mb-1">ACTIVE ALERTS</div>
          <div className="text-2xl text-terminal-green font-mono">47</div>
          <div className="text-xs text-terminal-amber mt-1">+8 MTD</div>
        </div>
      </div>
    </div>
  );
}; 