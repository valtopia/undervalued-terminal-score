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
import {
  AlertCircle,
  TrendingUp,
  BarChart2,
  Info,
  Star,
  Bell,
  BookOpen,
  Shield,
  Plus,
  ExternalLink,
  Newspaper
} from 'lucide-react';
import { StockDetail } from '@/types/stock';

interface StockDetailPanelProps {
  isOpen: boolean;
  onClose: () => void;
  stockData: StockDetail | undefined;
}

export const StockDetailPanel: React.FC<StockDetailPanelProps> = ({
  isOpen,
  onClose,
  stockData
}) => {
  if (!isOpen || !stockData) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-black border-b border-terminal-green/30 p-4 flex justify-between items-center">
        <div>
          <h2 className="text-terminal-green text-2xl font-mono terminal-glow">
            {stockData.symbol} <span className="text-terminal-amber text-sm ml-2">{stockData.name}</span>
          </h2>
          <p className="text-terminal-grey text-sm">{stockData.sector}</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="terminal-button">
            <Star className="h-4 w-4 mr-2" />
            WATCH
          </button>
          <button className="terminal-button" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Overview */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4 flex items-center">
                <Info className="h-4 w-4 mr-2" />
                COMPANY OVERVIEW
              </h3>
              <p className="text-terminal-grey mb-4">
                {stockData.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-terminal-grey">Market Cap:</span>
                  <span className="text-terminal-green ml-2">${stockData.marketCap}</span>
                </div>
                <div>
                  <span className="text-terminal-grey">Volume:</span>
                  <span className="text-terminal-green ml-2">{stockData.volume}</span>
                </div>
              </div>
            </div>

            {/* Price Chart */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                PRICE VS. INTRINSIC VALUE
              </h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { date: '2023-01', price: 200, value: 180 },
                    { date: '2023-02', price: 220, value: 195 },
                    { date: '2023-03', price: 180, value: 210 },
                  ]}>
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
                    <Line type="monotone" dataKey="price" stroke="#00FF41" name="Market Price" />
                    <Line type="monotone" dataKey="value" stroke="#FFBE00" name="Intrinsic Value" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* UV Score Timeline */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4 flex items-center">
                <BarChart2 className="h-4 w-4 mr-2" />
                UV SCORE TIMELINE
              </h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { date: '2023-01', score: 7.2 },
                    { date: '2023-02', score: 7.5 },
                    { date: '2023-03', score: 8.1 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
                    <XAxis dataKey="date" stroke="#00FF41" />
                    <YAxis stroke="#00FF41" domain={[0, 10]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#000',
                        border: '1px solid rgba(0, 255, 65, 0.3)',
                        color: '#00FF41'
                      }}
                    />
                    <Line type="monotone" dataKey="score" stroke="#FF073A" name="UV Score" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sector Comparison */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4">SECTOR COMPARISON</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stockData.sectorComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
                    <XAxis dataKey="metric" stroke="#00FF41" />
                    <YAxis stroke="#00FF41" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#000',
                        border: '1px solid rgba(0, 255, 65, 0.3)',
                        color: '#00FF41'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="value" name="Company" fill="#00FF41" />
                    <Bar dataKey="sectorAvg" name="Sector Avg" fill="#FFBE00" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4">KEY METRICS</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-terminal-grey">P/E Ratio</span>
                  <span className="text-terminal-green">{stockData.pe.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-grey">PEG Ratio</span>
                  <span className="text-terminal-amber">{stockData.metrics.pegRatio.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-grey">ROE</span>
                  <span className="text-terminal-green">{stockData.metrics.roe.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-grey">Gross Margin</span>
                  <span className="text-terminal-green">{stockData.metrics.grossMargin.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-grey">Revenue Growth</span>
                  <span className="text-terminal-green">{stockData.metrics.revenueGrowth.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Market Sentiment */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                MARKET SENTIMENT
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-terminal-grey">Analyst Rating</span>
                  <span className={`
                    ${stockData.sentiment.analystRating === 'BUY' ? 'text-terminal-green' :
                      stockData.sentiment.analystRating === 'HOLD' ? 'text-terminal-amber' :
                        'text-terminal-red'}
                  `}>
                    {stockData.sentiment.analystRating}
                  </span>
                </div>
                <div className="h-2 bg-terminal-green/20 rounded">
                  <div 
                    className="h-full bg-terminal-amber rounded"
                    style={{
                      width: `${(stockData.sentiment.ratings.hold / 
                        (stockData.sentiment.ratings.buy + 
                         stockData.sentiment.ratings.hold + 
                         stockData.sentiment.ratings.sell)) * 100}%`
                    }}
                  ></div>
                </div>
                <div className="grid grid-cols-3 text-xs text-center">
                  <div>
                    <div className="text-terminal-red">SELL</div>
                    <div className="text-terminal-grey">{stockData.sentiment.ratings.sell}</div>
                  </div>
                  <div>
                    <div className="text-terminal-amber">HOLD</div>
                    <div className="text-terminal-grey">{stockData.sentiment.ratings.hold}</div>
                  </div>
                  <div>
                    <div className="text-terminal-green">BUY</div>
                    <div className="text-terminal-grey">{stockData.sentiment.ratings.buy}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                RISK FACTORS
              </h3>
              <div className="space-y-3 text-sm">
                {stockData.riskFactors.map((risk, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <AlertCircle className={`h-4 w-4 flex-shrink-0 mt-1 ${
                      risk.severity === 'HIGH' ? 'text-terminal-red' :
                      risk.severity === 'MEDIUM' ? 'text-terminal-amber' :
                      'text-terminal-green'
                    }`} />
                    <p className="text-terminal-grey">{risk.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest News */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4 flex items-center">
                <Newspaper className="h-4 w-4 mr-2" />
                LATEST NEWS
              </h3>
              <div className="space-y-4">
                {stockData.news.map((item, index) => (
                  <div key={index} className="border-b border-terminal-green/10 last:border-0 pb-3 last:pb-0">
                    <div className="flex justify-between text-xs text-terminal-grey mb-1">
                      <span>{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terminal-green hover:text-terminal-amber transition-colors flex items-center"
                    >
                      {item.title}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="terminal-card">
              <h3 className="text-terminal-green font-mono mb-4">ACTIONS</h3>
              <div className="space-y-3">
                <button className="terminal-button w-full flex items-center justify-center">
                  <Bell className="h-4 w-4 mr-2" />
                  SET PRICE ALERT
                </button>
                <button className="terminal-button w-full flex items-center justify-center">
                  <Plus className="h-4 w-4 mr-2" />
                  ADD TO PORTFOLIO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 