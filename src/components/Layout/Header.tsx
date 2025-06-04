import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { CommandPalette } from '../Terminal/CommandPalette';
import { cn } from '@/lib/utils';

interface HeaderProps {
  isMobile: boolean;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ isMobile, className }) => {
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  return (
    <>
      <header className={cn(
        "bg-terminal-bg border-b border-terminal-green/30",
        className
      )}>
        <div className="flex items-center justify-between px-4">
          {/* Left side - Logo */}
          <div className={`flex items-center ${isMobile ? 'ml-12' : 'ml-0'}`}>
            <div className="flex items-center space-x-2">
              <div className="text-terminal-green font-bold text-lg tracking-wider terminal-glow">
                VALTOPIA
              </div>
              <div className="text-terminal-amber text-sm hidden sm:block">
                v2.1.4
              </div>
            </div>
          </div>

          {/* Center - Command Input */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <button
              onClick={() => setShowCommandPalette(true)}
              className="w-full bg-terminal-bg border border-terminal-green/50 
                       text-terminal-grey placeholder-terminal-grey 
                       hover:border-terminal-green focus:border-terminal-amber
                       font-mono text-sm px-3 py-2 text-left
                       transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                <span className="text-terminal-green">$</span>
                <span>Search ticker, command...</span>
                <div className="ml-auto text-xs bg-terminal-green/20 px-2 py-1 rounded">
                  ⌘K
                </div>
              </div>
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowCommandPalette(true)}
              className="text-terminal-green hover:bg-terminal-green/10 p-2 rounded md:hidden"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <div className="relative">
              <Bell className="h-5 w-5 text-terminal-green hover:text-terminal-amber cursor-pointer transition-colors" />
              <div className="absolute -top-1 -right-1 bg-terminal-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-terminal-green">
              <User className="h-5 w-5" />
              <span className="hidden md:inline text-sm">USER_001</span>
            </div>
          </div>
        </div>
      </header>

      <CommandPalette 
        isOpen={showCommandPalette} 
        onClose={() => setShowCommandPalette(false)} 
      />
    </>
  );
};
