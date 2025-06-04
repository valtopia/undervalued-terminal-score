import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-black text-terminal-green flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 scanline pointer-events-none"></div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="relative z-10 text-center space-y-12 w-full max-w-2xl px-4">
          <div className="space-y-6">
            <h1 className="text-9xl font-mono font-bold tracking-wider terminal-glow animate-pulse">
              VALTOPIA
            </h1>
            <p className="text-2xl font-mono text-terminal-grey">
              The Terminal, Your Edge
            </p>
          </div>
          
          <div className="flex gap-6 justify-center w-full">
            <Link 
              to="/dashboard" 
              className="px-12 py-4 bg-terminal-green/10 border border-terminal-green rounded-lg font-mono text-base hover:bg-terminal-green/20 transition-all duration-300"
            >
              ENTER TERMINAL
            </Link>
            <Link 
              to="/pricing" 
              className="px-12 py-4 border border-terminal-green/30 rounded-lg font-mono text-base hover:border-terminal-green hover:bg-terminal-green/5 transition-all duration-300"
            >
              VIEW PRICING
            </Link>
          </div>
        </div>

        <div className="fixed bottom-8 text-sm font-mono text-terminal-grey/60 text-center w-full">
          v2.1.4 • STATIC MODE • {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
} 