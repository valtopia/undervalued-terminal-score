import React, { useState, useEffect } from 'react';
import { ArrowUpDown, Eye } from 'lucide-react';

interface Stock {
  rank: number;
  symbol: string;
  company: string;
  price: number;
  change: number;
  uvScore: number;
  peRatio: number;
  marketCap: string;
  sector: string;
}

interface ResultsTableProps {
  filters: any; // Using the same filters type from FilterPanel
  isLive: boolean;
}

// Mock data for demonstration
const mockStocks: Stock[] = [
  {
    rank: 1,
    symbol: 'AAPL',
    company: 'Apple Inc.',
    price: 172.45,
    change: 2.34,
    uvScore: 8.7,
    peRatio: 28.5,
    marketCap: 'MEGA CAP',
    sector: 'TECHNOLOGY'
  },
  {
    rank: 2,
    symbol: 'MSFT',
    company: 'Microsoft Corporation',
    price: 378.92,
    change: -1.23,
    uvScore: 8.5,
    peRatio: 32.1,
    marketCap: 'MEGA CAP',
    sector: 'TECHNOLOGY'
  },
  {
    rank: 3,
    symbol: 'GOOGL',
    company: 'Alphabet Inc.',
    price: 142.56,
    change: 0.87,
    uvScore: 8.2,
    peRatio: 25.4,
    marketCap: 'MEGA CAP',
    sector: 'TECHNOLOGY'
  },
  {
    rank: 4,
    symbol: 'NVDA',
    company: 'NVIDIA Corporation',
    price: 824.15,
    change: 5.67,
    uvScore: 8.1,
    peRatio: 72.3,
    marketCap: 'MEGA CAP',
    sector: 'TECHNOLOGY'
  },
  {
    rank: 5,
    symbol: 'META',
    company: 'Meta Platforms Inc.',
    price: 485.23,
    change: 3.45,
    uvScore: 7.9,
    peRatio: 34.2,
    marketCap: 'MEGA CAP',
    sector: 'TECHNOLOGY'
  }
];

export const ResultsTable: React.FC<ResultsTableProps> = ({ filters, isLive }) => {
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const [sortField, setSortField] = useState<keyof Stock>('rank');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Simulated live data updates
  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setStocks(prevStocks =>
          prevStocks.map(stock => ({
            ...stock,
            price: stock.price + (Math.random() - 0.5) * 2,
            change: parseFloat((Math.random() * 5 - 2.5).toFixed(2))
          }))
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isLive]);

  const handleSort = (field: keyof Stock) => {
    if (field === sortField) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedStocks = [...stocks].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });

  return (
    <div className="bg-black border border-terminal-green/30 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-terminal-green/30">
              {Object.keys(mockStocks[0]).map(key => (
                <th
                  key={key}
                  onClick={() => handleSort(key as keyof Stock)}
                  className="px-4 py-3 text-left text-xs font-mono text-terminal-grey cursor-pointer hover:text-terminal-green"
                >
                  <div className="flex items-center space-x-1">
                    <span>{key.toUpperCase()}</span>
                    {sortField === key && (
                      <ArrowUpDown className="h-3 w-3 text-terminal-green" />
                    )}
                  </div>
                </th>
              ))}
              <th className="px-4 py-3 text-left text-xs font-mono text-terminal-grey">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-terminal-green/10">
            {sortedStocks.map(stock => (
              <tr
                key={stock.symbol}
                className="hover:bg-terminal-green/5 transition-colors"
              >
                <td className="px-4 py-3 font-mono text-terminal-grey">{stock.rank}</td>
                <td className="px-4 py-3 font-mono text-terminal-amber">{stock.symbol}</td>
                <td className="px-4 py-3 text-terminal-green">{stock.company}</td>
                <td className="px-4 py-3 font-mono text-terminal-green">
                  ${stock.price.toFixed(2)}
                </td>
                <td
                  className={`px-4 py-3 font-mono ${
                    stock.change >= 0 ? 'text-terminal-green' : 'text-terminal-red'
                  }`}
                >
                  {stock.change >= 0 ? '+' : ''}
                  {stock.change.toFixed(2)}%
                </td>
                <td className="px-4 py-3 font-mono text-terminal-green">{stock.uvScore}</td>
                <td className="px-4 py-3 font-mono text-terminal-grey">{stock.peRatio}</td>
                <td className="px-4 py-3 text-xs text-terminal-grey">{stock.marketCap}</td>
                <td className="px-4 py-3 text-xs text-terminal-grey">{stock.sector}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => console.log(`View ${stock.symbol}`)}
                    className="flex items-center space-x-1 px-3 py-1 text-xs border border-terminal-green/30 rounded hover:border-terminal-green hover:text-terminal-green focus:outline-none"
                  >
                    <Eye className="h-3 w-3" />
                    <span>VIEW</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="px-4 py-3 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono flex justify-between items-center">
        <div>SHOWING {stocks.length} OF {stocks.length} RESULTS</div>
        <div className="flex items-center space-x-4">
          <span>REFRESH: {isLive ? 'LIVE' : 'MANUAL'}</span>
          <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}; 