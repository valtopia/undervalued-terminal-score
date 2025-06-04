import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';
import { Search } from 'lucide-react';

// Mock data for sector metrics
const sectorMetrics = [
  {
    sector: 'Technology',
    metrics: [
      { metric: 'P/E', value: 8.2 },
      { metric: 'UV Score', value: 7.8 },
      { metric: 'Volatility', value: 6.5 },
      { metric: 'Growth', value: 8.9 },
      { metric: 'Momentum', value: 7.2 }
    ]
  },
  {
    sector: 'Healthcare',
    metrics: [
      { metric: 'P/E', value: 7.5 },
      { metric: 'UV Score', value: 7.2 },
      { metric: 'Volatility', value: 5.8 },
      { metric: 'Growth', value: 7.4 },
      { metric: 'Momentum', value: 6.9 }
    ]
  },
  {
    sector: 'Financial',
    metrics: [
      { metric: 'P/E', value: 6.8 },
      { metric: 'UV Score', value: 6.9 },
      { metric: 'Volatility', value: 7.2 },
      { metric: 'Growth', value: 6.5 },
      { metric: 'Momentum', value: 7.8 }
    ]
  }
];

// Mock data for stocks table
const stocksData = [
  {
    symbol: 'MSFT',
    uvScore: 8.7,
    sector: 'Technology',
    change: '+2.45',
    changePercent: '+0.59'
  },
  {
    symbol: 'AAPL',
    uvScore: 8.4,
    sector: 'Technology',
    change: '-1.23',
    changePercent: '-0.70'
  },
  {
    symbol: 'JNJ',
    uvScore: 7.9,
    sector: 'Healthcare',
    change: '+0.87',
    changePercent: '+0.45'
  },
  {
    symbol: 'JPM',
    uvScore: 7.6,
    sector: 'Financial',
    change: '+1.56',
    changePercent: '+1.12'
  },
  {
    symbol: 'PFE',
    uvScore: 7.5,
    sector: 'Healthcare',
    change: '-0.34',
    changePercent: '-0.89'
  },
  {
    symbol: 'BAC',
    uvScore: 7.2,
    sector: 'Financial',
    change: '+0.45',
    changePercent: '+0.67'
  }
];

export const SectorAnalysis: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState('Technology');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStocks = stocksData.filter(stock => 
    (searchTerm === '' || stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedSector === 'All' || stock.sector === selectedSector)
  );

  return (
    <div className="space-y-6">
      {/* Sector Metrics Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-black border border-terminal-green/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-terminal-green font-mono">SECTOR METRICS</h3>
            <div className="flex space-x-2">
              {sectorMetrics.map((sector) => (
                <button
                  key={sector.sector}
                  onClick={() => setSelectedSector(sector.sector)}
                  className={`px-3 py-1 text-xs rounded ${
                    selectedSector === sector.sector
                      ? 'bg-terminal-green/20 text-terminal-green'
                      : 'text-terminal-grey hover:text-terminal-green hover:bg-terminal-green/10'
                  }`}
                >
                  {sector.sector.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                data={sectorMetrics.find(s => s.sector === selectedSector)?.metrics}
                margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
              >
                <PolarGrid stroke="rgba(0, 255, 65, 0.1)" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fill: '#00FF41' }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 10]}
                  tick={{ fill: '#00FF41' }}
                />
                <Radar
                  name={selectedSector}
                  dataKey="value"
                  stroke="#00FF41"
                  fill="#00FF41"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sector Stats */}
        <div className="bg-black border border-terminal-green/30 rounded-lg p-6">
          <h3 className="text-terminal-green font-mono mb-4">SECTOR STATS</h3>
          <div className="space-y-4">
            <div className="p-3 border border-terminal-green/20 rounded">
              <div className="text-xs text-terminal-grey mb-1">AVG UV SCORE</div>
              <div className="text-2xl text-terminal-green font-mono">7.8</div>
            </div>
            <div className="p-3 border border-terminal-green/20 rounded">
              <div className="text-xs text-terminal-grey mb-1">UNDERVALUED STOCKS</div>
              <div className="text-2xl text-terminal-green font-mono">12</div>
            </div>
            <div className="p-3 border border-terminal-green/20 rounded">
              <div className="text-xs text-terminal-grey mb-1">MARKET SENTIMENT</div>
              <div className="text-2xl text-terminal-amber font-mono">BULLISH</div>
            </div>
            <div className="p-3 border border-terminal-green/20 rounded">
              <div className="text-xs text-terminal-grey mb-1">VOLATILITY</div>
              <div className="text-2xl text-terminal-green font-mono">LOW</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stocks Table */}
      <div className="bg-black border border-terminal-green/30 rounded-lg">
        <div className="p-4 border-b border-terminal-green/30">
          <div className="flex items-center justify-between">
            <h3 className="text-terminal-green font-mono">STOCKS IN SECTOR</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH SYMBOL..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-black border border-terminal-green/30 rounded px-3 py-1 text-terminal-green text-sm font-mono w-48
                         focus:outline-none focus:border-terminal-green"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-terminal-grey" />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-terminal-grey text-xs border-b border-terminal-green/30">
                <th className="px-4 py-2 text-left">SYMBOL</th>
                <th className="px-4 py-2 text-left">UV SCORE</th>
                <th className="px-4 py-2 text-left">SECTOR</th>
                <th className="px-4 py-2 text-right">CHANGE</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredStocks.map((stock) => (
                <tr
                  key={stock.symbol}
                  className="border-b border-terminal-green/10 hover:bg-terminal-green/5"
                >
                  <td className="px-4 py-2 font-mono text-terminal-amber">{stock.symbol}</td>
                  <td className="px-4 py-2 text-terminal-green">{stock.uvScore}</td>
                  <td className="px-4 py-2 text-terminal-grey">{stock.sector}</td>
                  <td className={`px-4 py-2 text-right font-mono ${
                    stock.change.startsWith('+') ? 'text-terminal-green' : 'text-terminal-red'
                  }`}>
                    {stock.change} ({stock.changePercent})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}; 