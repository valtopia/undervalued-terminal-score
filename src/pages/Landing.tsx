import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-terminal-green flex flex-col items-center justify-center scanline">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-mono font-bold tracking-wider terminal-glow">
            VALTOPIA
          </h1>
          <p className="text-xl font-mono text-terminal-grey">
            The Terminal, Your Edge
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link 
            to="/dashboard" 
            className="px-8 py-3 bg-terminal-green/10 border border-terminal-green rounded font-mono text-sm hover:bg-terminal-green/20 transition-all duration-300"
          >
            ENTER TERMINAL
          </Link>
          <Link 
            to="/pricing" 
            className="px-8 py-3 border border-terminal-green/30 rounded font-mono text-sm hover:border-terminal-green hover:bg-terminal-green/5 transition-all duration-300"
          >
            VIEW PRICING
          </Link>
        </div>

        <div className="absolute bottom-8 text-xs font-mono text-terminal-grey">
          v2.1.4 • STATIC MODE • {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
} 