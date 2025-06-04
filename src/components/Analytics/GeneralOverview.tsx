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
  BarChart,
  Bar
} from 'recharts';
import { TrendingUp, Users, Search, Bell } from 'lucide-react';

// Mock data for UV Score evolution
const uvScoreData = [
  { date: '03-01', score: 7.2, activeUsers: 980, searches: 4500, alerts: 12 },
  { date: '03-05', score: 7.4, activeUsers: 1050, searches: 4800, alerts: 15 },
  { date: '03-10', score: 7.8, activeUsers: 1120, searches: 5200, alerts: 18 },
  { date: '03-15', score: 7.6, activeUsers: 1180, searches: 5100, alerts: 14 },
  { date: '03-20', score: 7.9, activeUsers: 1220, searches: 5400, alerts: 21 },
  { date: '03-25', score: 8.1, activeUsers: 1280, searches: 5600, alerts: 23 },
  { date: '03-30', score: 8.2, activeUsers: 1340, searches: 5800, alerts: 25 }
];

// Mock data for sector comparison
const sectorData = [
  { name: 'Technology', uvScore: 7.8, marketCap: '12.5T', performance: 15.2 },
  { name: 'Healthcare', uvScore: 7.2, marketCap: '5.2T', performance: 8.4 },
  { name: 'Financial', uvScore: 6.9, marketCap: '8.1T', performance: 10.1 },
  { name: 'Consumer', uvScore: 6.5, marketCap: '4.8T', performance: 5.7 },
  { name: 'Industrial', uvScore: 7.1, marketCap: '3.9T', performance: 9.3 }
];

export const GeneralOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* UV Score Evolution Chart */}
      <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
        <h3 className="text-terminal-green font-mono mb-4 flex items-center">
          <TrendingUp className="h-4 w-4 mr-2" />
          UV SCORE EVOLUTION
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={uvScoreData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
              <XAxis dataKey="date" stroke="#00FF41" />
              <YAxis stroke="#00FF41" domain={[6, 9]} />
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
                dataKey="score"
                stroke="#00FF41"
                name="UV Score"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* User Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black border border-terminal-green/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-terminal-green font-mono flex items-center">
              <Users className="h-4 w-4 mr-2" />
              ACTIVE USERS
            </h4>
            <span className="text-terminal-amber text-xs">+12.5%</span>
          </div>
          <div className="h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={uvScoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
                <XAxis dataKey="date" stroke="#00FF41" tick={{ fontSize: 10 }} />
                <YAxis stroke="#00FF41" tick={{ fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00FF41'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="activeUsers"
                  stroke="#FFBE00"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-black border border-terminal-green/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-terminal-green font-mono flex items-center">
              <Search className="h-4 w-4 mr-2" />
              DAILY SEARCHES
            </h4>
            <span className="text-terminal-amber text-xs">+8.2%</span>
          </div>
          <div className="h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={uvScoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
                <XAxis dataKey="date" stroke="#00FF41" tick={{ fontSize: 10 }} />
                <YAxis stroke="#00FF41" tick={{ fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00FF41'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="searches"
                  stroke="#00FF41"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-black border border-terminal-green/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-terminal-green font-mono flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              ALERTS GENERATED
            </h4>
            <span className="text-terminal-amber text-xs">+15.8%</span>
          </div>
          <div className="h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={uvScoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
                <XAxis dataKey="date" stroke="#00FF41" tick={{ fontSize: 10 }} />
                <YAxis stroke="#00FF41" tick={{ fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00FF41'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="alerts"
                  stroke="#FF073A"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Sector Comparison */}
      <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
        <h3 className="text-terminal-green font-mono mb-4">SECTOR COMPARISON</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sectorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
              <XAxis dataKey="name" stroke="#00FF41" />
              <YAxis stroke="#00FF41" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#000',
                  border: '1px solid rgba(0, 255, 65, 0.3)',
                  color: '#00FF41'
                }}
              />
              <Legend />
              <Bar dataKey="uvScore" name="UV Score" fill="#00FF41" />
              <Bar dataKey="performance" name="Performance %" fill="#FFBE00" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}; 