import React from 'react';
import { terminalColors } from '@/lib/colors';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  potentialReturn: number;
  riskScore: number;
  marketCap: string;
  volume: string;
  sector: string;
}

interface StockListProps {
  stocks: Stock[];
  activeFilter: {
    metric: string;
    value: number;
  } | null;
}

export const StockList: React.FC<StockListProps> = ({ stocks, activeFilter }) => {
  const getStockColor = (stock: Stock) => {
    if (activeFilter) {
      switch (activeFilter.metric) {
        case 'potentialReturn':
          return stock.potentialReturn >= activeFilter.value ? terminalColors.healthy : terminalColors.muted;
        case 'riskScore':
          return stock.riskScore <= activeFilter.value ? terminalColors.healthy : terminalColors.muted;
        default:
          return terminalColors.neutral;
      }
    }
    return terminalColors.neutral;
  };

  return (
    <div className="mt-8 font-mono">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg" style={{ color: terminalColors.neutral }}>
          UNDERVALUED STOCKS {activeFilter && `(Filtered by ${activeFilter.metric})`}
        </h2>
        <span className="text-sm" style={{ color: terminalColors.muted }}>
          {stocks.length} opportunities found
        </span>
      </div>
      <div className="space-y-2">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="p-4 rounded border transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            style={{
              borderColor: getStockColor(stock),
              backgroundColor: terminalColors.background.neutral,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span style={{ color: getStockColor(stock) }} className="font-bold">
                  {stock.symbol}
                </span>
                <span style={{ color: terminalColors.muted }}>{stock.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span style={{ color: terminalColors.neutral }}>
                  ${stock.price.toFixed(2)}
                </span>
                <span
                  style={{
                    color:
                      stock.potentialReturn > 20
                        ? terminalColors.healthy
                        : stock.potentialReturn > 10
                        ? terminalColors.warning
                        : terminalColors.neutral,
                  }}
                >
                  +{stock.potentialReturn}%
                </span>
                <span
                  style={{
                    color:
                      stock.riskScore < 3
                        ? terminalColors.healthy
                        : stock.riskScore < 5
                        ? terminalColors.warning
                        : terminalColors.critical,
                  }}
                >
                  Risk: {stock.riskScore}
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4" style={{ color: terminalColors.muted }}>
              <span>Cap: {stock.marketCap}</span>
              <span>Vol: {stock.volume}</span>
              <span>{stock.sector}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 