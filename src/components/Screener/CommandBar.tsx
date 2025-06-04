import React, { useState } from 'react';
import { Search, Command } from 'lucide-react';

export const CommandBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement command parsing and filtering
    console.log('Command:', query);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center space-x-2 px-4 py-2 bg-black border border-terminal-green/30 rounded-lg focus-within:border-terminal-green">
          <Command className="h-4 w-4 text-terminal-grey" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ENTER COMMAND (e.g., uv>8 sector:tech price<100)"
            className="flex-1 bg-transparent text-terminal-green placeholder-terminal-grey/50 text-sm font-mono focus:outline-none"
          />
          <button
            type="submit"
            className="p-1 hover:text-terminal-green focus:outline-none"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* Command Help Tooltip */}
      <div className="absolute top-full mt-1 left-0 right-0 p-4 bg-black border border-terminal-green/30 rounded-lg text-xs text-terminal-grey font-mono hidden group-hover:block">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-terminal-green mb-2">FILTER COMMANDS</div>
            <div className="space-y-1">
              <div>uv&gt;8 - UV Score greater than 8</div>
              <div>price&lt;100 - Price less than $100</div>
              <div>sector:tech - Filter by sector</div>
              <div>cap:large - Filter by market cap</div>
            </div>
          </div>
          <div>
            <div className="text-terminal-green mb-2">KEYBOARD SHORTCUTS</div>
            <div className="space-y-1">
              <div>↑↓ - Navigate results</div>
              <div>Enter - View stock</div>
              <div>Esc - Clear command</div>
              <div>Ctrl+K - Focus command bar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 