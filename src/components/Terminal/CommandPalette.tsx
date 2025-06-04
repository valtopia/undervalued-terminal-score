
import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, BarChart3, Bell, Settings, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Command {
  type: 'command';
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  shortcut: string;
}

interface Stock {
  type: 'stock';
  symbol: string;
  company: string;
  score: number;
}

type CommandItem = Command | Stock;

const commands: Command[] = [
  { type: 'command', id: 'dashboard', label: 'Go to Dashboard', icon: TrendingUp, shortcut: 'D' },
  { type: 'command', id: 'analytics', label: 'View Analytics', icon: BarChart3, shortcut: 'A' },
  { type: 'command', id: 'alerts', label: 'Manage Alerts', icon: Bell, shortcut: 'L' },
  { type: 'command', id: 'settings', label: 'Open Settings', icon: Settings, shortcut: 'S' },
];

const stocks: Stock[] = [
  { type: 'stock', symbol: 'MSFT', company: 'Microsoft Corporation', score: 8.7 },
  { type: 'stock', symbol: 'GOOGL', company: 'Alphabet Inc.', score: 8.4 },
  { type: 'stock', symbol: 'BRK.B', company: 'Berkshire Hathaway', score: 8.1 },
  { type: 'stock', symbol: 'JNJ', company: 'Johnson & Johnson', score: 7.9 },
];

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allItems: CommandItem[] = [...commands, ...stocks];

  const filteredItems = allItems.filter(item => {
    if (item.type === 'command') {
      return item.label.toLowerCase().includes(query.toLowerCase()) ||
             item.id.toLowerCase().includes(query.toLowerCase());
    } else {
      return item.symbol.toLowerCase().includes(query.toLowerCase()) ||
             item.company.toLowerCase().includes(query.toLowerCase());
    }
  });

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredItems.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        console.log('Selected:', filteredItems[selectedIndex]);
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-terminal-bg border-terminal-green/50 p-0 max-w-2xl">
        <div className="border-b border-terminal-green/30">
          <div className="flex items-center p-4">
            <Search className="h-5 w-5 text-terminal-green mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search commands or tickers..."
              className="flex-1 bg-transparent text-terminal-green placeholder-terminal-grey 
                       font-mono focus:outline-none"
              autoFocus
            />
            <button onClick={onClose} className="text-terminal-grey hover:text-terminal-green">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {filteredItems.length === 0 ? (
            <div className="p-4 text-terminal-grey font-mono text-center">
              No results found
            </div>
          ) : (
            <div className="p-2">
              {filteredItems.map((item, index) => (
                <div
                  key={item.type === 'command' ? item.id : item.symbol}
                  className={`flex items-center justify-between p-3 rounded cursor-pointer font-mono ${
                    index === selectedIndex 
                      ? 'bg-terminal-green/20 text-terminal-green' 
                      : 'text-terminal-grey hover:bg-terminal-green/10 hover:text-terminal-green'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {item.type === 'command' ? (
                      <>
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </>
                    ) : (
                      <>
                        <TrendingUp className="h-4 w-4" />
                        <div>
                          <div className="text-terminal-green font-bold">{item.symbol}</div>
                          <div className="text-xs text-terminal-grey">{item.company}</div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {item.type === 'command' && (
                    <div className="text-xs bg-terminal-green/20 px-2 py-1 rounded">
                      {item.shortcut}
                    </div>
                  )}
                  
                  {item.type === 'stock' && (
                    <div className="text-xs">
                      <span className="text-terminal-amber">Score: {item.score}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
