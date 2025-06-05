import React, { useEffect, useState } from 'react';
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
  Newspaper,
  X
} from 'lucide-react';
import { StockDetail } from '@/types/stock';
import { cn } from '@/lib/utils';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible || !stockData) return null;

  return (
    <div className={cn(
      "fixed inset-0 bg-black/95 z-50 overflow-y-auto transition-opacity duration-300",
      isOpen ? "opacity-100" : "opacity-0"
    )}>
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-terminal-grey/30 p-4 flex justify-between items-center z-10">
        <div>
          <h2 className="text-terminal-grey text-2xl font-mono flex items-center gap-3">
            {stockData.symbol}
            <span className="text-terminal-grey/80 text-sm">{stockData.name}</span>
            <span className={cn(
              "text-sm px-2 py-1 rounded font-normal",
              stockData.sentiment.analystRating === 'BUY' ? "bg-terminal-green/20 text-terminal-green" :
              stockData.sentiment.analystRating === 'HOLD' ? "bg-terminal-grey/20 text-terminal-grey" :
              "bg-terminal-red/20 text-terminal-red"
            )}>
              {stockData.sentiment.analystRating}
            </span>
          </h2>
          <p className="text-terminal-grey/60 text-sm mt-1">{stockData.sector}</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="terminal-button hover:bg-terminal-grey/10 transition-colors">
            <Star className="h-4 w-4 mr-2" />
            WATCH
          </button>
          <button 
            className="terminal-button hover:bg-terminal-red/10 transition-colors group"
            onClick={onClose}
          >
            <X className="h-4 w-4 text-terminal-red group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Overview */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4 flex items-center">
                <Info className="h-4 w-4 mr-2" />
                COMPANY OVERVIEW
              </h3>
              <p className="text-terminal-grey/80 mb-4 leading-relaxed">
                {stockData.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60 block mb-1">Market Cap</span>
                  <span className="text-terminal-grey font-mono">${stockData.marketCap}</span>
                </div>
                <div className="p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60 block mb-1">Volume</span>
                  <span className="text-terminal-grey font-mono">{stockData.volume}</span>
                </div>
                <div className="p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60 block mb-1">P/E Ratio</span>
                  <span className="text-terminal-grey font-mono">{stockData.pe.toFixed(2)}</span>
                </div>
                <div className="p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60 block mb-1">Growth</span>
                  <span className={cn(
                    "font-mono",
                    stockData.metrics.revenueGrowth > 0 ? "text-terminal-green" : "text-terminal-grey"
                  )}>{stockData.metrics.revenueGrowth}%</span>
                </div>
              </div>
            </div>

            {/* Price Chart */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                PRICE VS. INTRINSIC VALUE
              </h3>
              <div className="h-[400px] -mx-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { date: '2023-01', price: 200, value: 180 },
                    { date: '2023-02', price: 220, value: 195 },
                    { date: '2023-03', price: 180, value: 210 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                        color: '#888',
                        padding: '8px'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{
                        paddingTop: '20px',
                        color: '#888'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#888" 
                      name="Market Price"
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#666" 
                      name="Intrinsic Value"
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* UV Score Timeline */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4 flex items-center">
                <BarChart2 className="h-4 w-4 mr-2" />
                UV SCORE TIMELINE
              </h3>
              <div className="h-[200px] -mx-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { date: '2023-01', score: 7.2 },
                    { date: '2023-02', score: 7.5 },
                    { date: '2023-03', score: 8.1 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis stroke="#888" domain={[0, 10]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                        color: '#888',
                        padding: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#888" 
                      name="UV Score"
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sector Comparison */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4">SECTOR COMPARISON</h3>
              <div className="h-[300px] -mx-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stockData.sectorComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis dataKey="metric" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                        color: '#888',
                        padding: '8px'
                      }}
                    />
                    <Legend 
                      wrapperStyle={{
                        paddingTop: '20px',
                        color: '#888'
                      }}
                    />
                    <Bar 
                      dataKey="value" 
                      name="Company" 
                      fill="#888"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="sectorAvg" 
                      name="Sector Avg" 
                      fill="#666"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4">KEY METRICS</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60">P/E Ratio</span>
                  <span className="text-terminal-grey font-mono">{stockData.pe.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60">PEG Ratio</span>
                  <span className="text-terminal-grey font-mono">{stockData.metrics.pegRatio.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60">ROE</span>
                  <span className={cn(
                    "font-mono",
                    stockData.metrics.roe > 0 ? "text-terminal-green" : "text-terminal-grey"
                  )}>{stockData.metrics.roe.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60">Gross Margin</span>
                  <span className={cn(
                    "font-mono",
                    stockData.metrics.grossMargin > 0 ? "text-terminal-green" : "text-terminal-grey"
                  )}>{stockData.metrics.grossMargin.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                  <span className="text-terminal-grey/60">Revenue Growth</span>
                  <span className={cn(
                    "font-mono",
                    stockData.metrics.revenueGrowth > 0 ? "text-terminal-green" : "text-terminal-grey"
                  )}>{stockData.metrics.revenueGrowth.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Market Sentiment */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                MARKET SENTIMENT
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-terminal-grey/60">Analyst Rating</span>
                  <span className={cn(
                    "px-2 py-1 rounded font-mono",
                    stockData.sentiment.analystRating === 'BUY' ? "bg-terminal-green/20 text-terminal-green" :
                    stockData.sentiment.analystRating === 'HOLD' ? "bg-terminal-grey/20 text-terminal-grey" :
                    "bg-terminal-red/20 text-terminal-red"
                  )}>
                    {stockData.sentiment.analystRating}
                  </span>
                </div>
                <div className="h-2 bg-terminal-grey/20 rounded overflow-hidden">
                  <div 
                    className="h-full bg-terminal-grey rounded transition-all duration-500 ease-out"
                    style={{
                      width: `${(stockData.sentiment.ratings.buy / 
                        (stockData.sentiment.ratings.buy + 
                         stockData.sentiment.ratings.hold + 
                         stockData.sentiment.ratings.sell)) * 100}%`
                    }}
                  ></div>
                </div>
                <div className="grid grid-cols-3 text-xs text-center gap-2">
                  <div className="p-2 border border-terminal-grey/10 rounded hover:border-terminal-red/30 transition-colors">
                    <div className="text-terminal-red mb-1">SELL</div>
                    <div className="text-terminal-grey/60 font-mono">{stockData.sentiment.ratings.sell}</div>
                  </div>
                  <div className="p-2 border border-terminal-grey/10 rounded hover:border-terminal-grey/30 transition-colors">
                    <div className="text-terminal-grey mb-1">HOLD</div>
                    <div className="text-terminal-grey/60 font-mono">{stockData.sentiment.ratings.hold}</div>
                  </div>
                  <div className="p-2 border border-terminal-grey/10 rounded hover:border-terminal-green/30 transition-colors">
                    <div className="text-terminal-green mb-1">BUY</div>
                    <div className="text-terminal-grey/60 font-mono">{stockData.sentiment.ratings.buy}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                RISK FACTORS
              </h3>
              <div className="space-y-3">
                {stockData.riskFactors.map((risk, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-start space-x-2 p-2 border rounded transition-colors",
                      risk.severity === 'HIGH' ? "border-terminal-red/10 hover:border-terminal-red/30" :
                      risk.severity === 'MEDIUM' ? "border-terminal-grey/10 hover:border-terminal-grey/30" :
                      "border-terminal-grey/10 hover:border-terminal-grey/30"
                    )}
                  >
                    <AlertCircle className={cn(
                      "h-4 w-4 flex-shrink-0 mt-1",
                      risk.severity === 'HIGH' ? "text-terminal-red" :
                      risk.severity === 'MEDIUM' ? "text-terminal-grey" :
                      "text-terminal-grey"
                    )} />
                    <p className="text-terminal-grey/80 text-sm">{risk.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest News */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4 flex items-center">
                <Newspaper className="h-4 w-4 mr-2" />
                LATEST NEWS
              </h3>
              <div className="space-y-4">
                {stockData.news.map((item, index) => (
                  <div 
                    key={index} 
                    className="border-b border-terminal-grey/10 last:border-0 pb-3 last:pb-0 hover:bg-terminal-grey/5 transition-colors rounded p-2"
                  >
                    <div className="flex justify-between text-xs text-terminal-grey/60 mb-1">
                      <span className="font-mono">{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terminal-grey hover:text-terminal-grey/80 transition-colors flex items-center group"
                    >
                      {item.title}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="terminal-card hover:border-terminal-grey/40 transition-colors">
              <h3 className="text-terminal-grey font-mono mb-4">ACTIONS</h3>
              <div className="space-y-3">
                <button className="terminal-button w-full flex items-center justify-center hover:bg-terminal-grey/10 transition-colors group">
                  <Bell className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  SET PRICE ALERT
                </button>
                <button className="terminal-button w-full flex items-center justify-center hover:bg-terminal-grey/10 transition-colors group">
                  <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
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