
import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Stock {
  symbol: string;
  company: string;
  price: number;
  change: number;
  changePercent: number;
  undervalueScore: number;
  pe: number;
  marketCap: string;
  sector: string;
  rank: number;
}

const mockStocks: Stock[] = [
  {
    symbol: 'MSFT',
    company: 'Microsoft Corporation',
    price: 412.73,
    change: -2.45,
    changePercent: -0.59,
    undervalueScore: 8.7,
    pe: 34.2,
    marketCap: '3.1T',
    sector: 'Technology',
    rank: 1
  },
  {
    symbol: 'GOOGL',
    company: 'Alphabet Inc.',
    price: 175.84,
    change: 1.23,
    changePercent: 0.70,
    undervalueScore: 8.4,
    pe: 24.1,
    marketCap: '2.2T',
    sector: 'Technology',
    rank: 2
  },
  {
    symbol: 'BRK.B',
    company: 'Berkshire Hathaway Inc.',
    price: 452.18,
    change: 3.47,
    changePercent: 0.77,
    undervalueScore: 8.1,
    pe: 9.2,
    marketCap: '981B',
    sector: 'Financial',
    rank: 3
  },
  {
    symbol: 'JNJ',
    company: 'Johnson & Johnson',
    price: 158.92,
    change: -0.85,
    changePercent: -0.53,
    undervalueScore: 7.9,
    pe: 15.7,
    marketCap: '421B',
    sector: 'Healthcare',
    rank: 4
  },
  {
    symbol: 'V',
    company: 'Visa Inc.',
    price: 284.56,
    change: 2.18,
    changePercent: 0.77,
    undervalueScore: 7.8,
    pe: 32.8,
    marketCap: '612B',
    sector: 'Financial',
    rank: 5
  }
];

export const StockTable: React.FC = () => {
  const [sortBy, setSortBy] = useState<keyof Stock>('rank');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: keyof Stock) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedStocks = [...mockStocks].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return (aVal - bVal) * multiplier;
    }
    return String(aVal).localeCompare(String(bVal)) * multiplier;
  });

  return (
    <div className="bg-terminal-bg border border-terminal-green/30">
      {/* Header */}
      <div className="border-b border-terminal-green/30 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-terminal-green text-lg font-bold tracking-wider">
              UNDERVALUED SECURITIES
            </h2>
            <div className="text-terminal-grey text-sm mt-1">
              Ranked by Proprietary Undervalue Score • Last updated: 09:30 EST
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="bg-terminal-green/10 px-2 py-1 border border-terminal-green/30">
              <span className="text-terminal-green">LIVE</span>
            </div>
            <div className="bg-terminal-amber/10 px-2 py-1 border border-terminal-amber/30">
              <span className="text-terminal-amber">5 NEW</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-sm">
          <thead className="bg-terminal-bg-light border-b border-terminal-green/30">
            <tr>
              {[
                { key: 'rank', label: 'RNK' },
                { key: 'symbol', label: 'SYMBOL' },
                { key: 'company', label: 'COMPANY' },
                { key: 'price', label: 'PRICE' },
                { key: 'change', label: 'CHANGE' },
                { key: 'undervalueScore', label: 'UV SCORE' },
                { key: 'pe', label: 'P/E' },
                { key: 'marketCap', label: 'MKT CAP' },
                { key: 'sector', label: 'SECTOR' }
              ].map((header) => (
                <th
                  key={header.key}
                  className="px-3 py-2 text-left text-terminal-green cursor-pointer hover:text-terminal-amber transition-colors"
                  onClick={() => handleSort(header.key as keyof Stock)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{header.label}</span>
                    {sortBy === header.key && (
                      <span className="text-xs">
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              <th className="px-3 py-2 text-terminal-green">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {sortedStocks.map((stock, index) => (
              <tr
                key={stock.symbol}
                className={cn(
                  "border-b border-terminal-green/10 hover:bg-terminal-green/5 transition-colors cursor-pointer",
                  index % 2 === 0 && "bg-terminal-bg-light/30"
                )}
              >
                <td className="px-3 py-2 text-terminal-amber font-bold">
                  #{stock.rank}
                </td>
                <td className="px-3 py-2 text-terminal-green font-bold">
                  {stock.symbol}
                </td>
                <td className="px-3 py-2 text-terminal-grey max-w-xs truncate">
                  {stock.company}
                </td>
                <td className="px-3 py-2 text-terminal-green">
                  ${stock.price.toFixed(2)}
                </td>
                <td className="px-3 py-2">
                  <div className="flex items-center space-x-1">
                    {stock.change >= 0 ? (
                      <TrendingUp className="h-3 w-3 text-terminal-green" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-terminal-red" />
                    )}
                    <span className={stock.change >= 0 ? 'text-terminal-green' : 'text-terminal-red'}>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                    </span>
                    <span className={cn(
                      'text-xs',
                      stock.change >= 0 ? 'text-terminal-green' : 'text-terminal-red'
                    )}>
                      ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-amber font-bold">
                      {stock.undervalueScore.toFixed(1)}
                    </span>
                    {stock.undervalueScore >= 8.0 && (
                      <AlertCircle className="h-3 w-3 text-terminal-red animate-pulse" />
                    )}
                  </div>
                </td>
                <td className="px-3 py-2 text-terminal-grey">
                  {stock.pe.toFixed(1)}
                </td>
                <td className="px-3 py-2 text-terminal-grey">
                  ${stock.marketCap}
                </td>
                <td className="px-3 py-2 text-terminal-grey">
                  {stock.sector}
                </td>
                <td className="px-3 py-2">
                  <button className="terminal-button text-xs px-2 py-1">
                    VIEW
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t border-terminal-green/30 p-3 flex justify-between items-center text-xs text-terminal-grey">
        <div>
          Showing {sortedStocks.length} of 147 tracked securities
        </div>
        <div className="flex items-center space-x-4">
          <span>Page 1 of 30</span>
          <div className="flex space-x-1">
            <button className="px-2 py-1 border border-terminal-green/30 hover:bg-terminal-green/10">
              ‹
            </button>
            <button className="px-2 py-1 border border-terminal-green/30 hover:bg-terminal-green/10">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
