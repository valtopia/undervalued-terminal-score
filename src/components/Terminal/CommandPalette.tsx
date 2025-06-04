
import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, BarChart3, Bell, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const commands = [
  { id: 'dashboard', label: 'Go to Dashboard', icon: TrendingUp, shortcut: 'D' },
  { id: 'analytics', label: 'View Analytics', icon: BarChart3, shortcut: 'A' },
  { id: 'alerts', label: 'Check Alerts', icon: Bell, shortcut: 'L' },
  { id: 'pricing', label: 'View Pricing', icon: DollarSign, shortcut: 'P' },
];

const popularTickers = [
  { symbol: 'AAPL', company: 'Apple Inc.', score: 7.8 },
  { symbol: 'MSFT', company: 'Microsoft Corporation', score: 8.2 },
  { symbol: 'GOOGL', company: 'Alphabet Inc.', score: 6.9 },
  { symbol: 'TSLA', company: 'Tesla Inc.', score: 5.4 },
  { symbol: 'AMZN', company: 'Amazon.com Inc.', score: 7.1 },
];

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTickers = popularTickers.filter(ticker =>
    ticker.symbol.toLowerCase().includes(query.toLowerCase()) ||
    ticker.company.toLowerCase().includes(query.toLowerCase())
  );

  const allResults = [
    ...filteredCommands.map(cmd => ({ ...cmd, type: 'command' })),
    ...filteredTickers.map(ticker => ({ ...ticker, type: 'ticker' }))
  ];

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, allResults.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (allResults[selectedIndex]) {
            console.log('Selected:', allResults[selectedIndex]);
            onClose();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, allResults, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 z-50">
      <div className="bg-terminal-bg border border-terminal-green w-full max-w-lg mx-4">
        {/* Header */}
        <div className="border-b border-terminal-green/30 p-3">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green">$</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tickers, commands..."
              className="flex-1 bg-transparent text-terminal-green placeholder-terminal-grey 
                       outline-none font-mono text-sm"
              autoFocus
            />
            <div className="text-xs text-terminal-grey">
              ESC to close
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {allResults.length === 0 ? (
            <div className="p-4 text-center text-terminal-grey">
              No results found
            </div>
          ) : (
            <div className="p-2">
              {allResults.map((result, index) => (
                <div
                  key={`${result.type}-${index}`}
                  className={cn(
                    "flex items-center justify-between p-2 rounded cursor-pointer",
                    index === selectedIndex 
                      ? "bg-terminal-green/10 border border-terminal-green/30" 
                      : "hover:bg-terminal-green/5"
                  )}
                  onClick={() => {
                    console.log('Clicked:', result);
                    onClose();
                  }}
                >
                  {result.type === 'command' ? (
                    <>
                      <div className="flex items-center space-x-3">
                        {result.icon && <result.icon className="h-4 w-4 text-terminal-green" />}
                        <span className="text-terminal-green text-sm">{result.label}</span>
                      </div>
                      <div className="text-xs text-terminal-grey bg-terminal-bg px-2 py-1 rounded">
                        {result.shortcut}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="text-terminal-amber font-bold">{result.symbol}</div>
                        <div className="text-terminal-grey text-sm">{result.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-terminal-green text-sm">Score: {result.score}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-terminal-green/30 p-2 text-xs text-terminal-grey">
          <div className="flex justify-between">
            <span>↑↓ Navigate</span>
            <span>Enter to select</span>
          </div>
        </div>
      </div>
    </div>
  );
};
