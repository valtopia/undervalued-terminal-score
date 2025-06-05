import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface TerminalAuthProps {
  onClose: () => void;
}

export const TerminalAuth: React.FC<TerminalAuthProps> = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cursor, setCursor] = useState(true);
  const [dots, setDots] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor(cursor => !cursor);
    }, 500);

    const dotsInterval = setInterval(() => {
      setDots(dots => dots.length >= 3 ? '' : dots + '.');
    }, 500);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'send it') {
      localStorage.setItem('terminal_access', 'granted');
      navigate('/dashboard');
    } else {
      setError('MARGIN CALL: INSUFFICIENT AUTHENTICATION CREDENTIALS');
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
      <div className="w-[500px] bg-black border border-terminal-green/50 rounded-lg overflow-hidden shadow-2xl shadow-terminal-green/20 relative">
        <div className="absolute inset-0 scanline pointer-events-none opacity-50"></div>
        
        {/* Terminal Header */}
        <div className="bg-terminal-green/10 border-b border-terminal-green/20 p-3">
          <div className="flex items-center justify-between">
            <div className="text-terminal-green font-mono text-sm">
              ALPHA://SECURE_TRADING_PROTOCOL
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-terminal-red/50 hover:bg-terminal-red transition-colors duration-200 cursor-pointer"
                title="Close Terminal"
              />
              <div className="w-3 h-3 rounded-full bg-terminal-amber/50"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-green/50"></div>
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4">
          <div className="font-mono text-sm space-y-1">
            <p className="text-terminal-grey">{`>`} INITIALIZING MARKET SCANNER{dots}</p>
            <p className="text-terminal-amber">{`>`} VOLATILITY INDEX: HIGH</p>
            <p className="text-terminal-green">{`>`} ALPHA STATUS: READY TO DEPLOY</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 font-mono bg-terminal-green/5 p-3 rounded border border-terminal-green/20">
              <span className="text-terminal-green">$</span>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="flex-1 bg-transparent border-none outline-none text-terminal-green font-mono"
                autoFocus
                placeholder="ENTER TRADING KEY"
              />
              <span className={`text-terminal-green ${cursor ? 'opacity-100' : 'opacity-0'}`}>▋</span>
            </div>
            {error && (
              <div className="text-terminal-red font-mono text-sm animate-pulse p-3 bg-terminal-red/10 border border-terminal-red/20 rounded">
                {error}
              </div>
            )}
          </form>

          <div className="text-terminal-grey/50 font-mono text-xs">
            MARKET TIP: True traders know when to "send it" for maximum alpha.
          </div>
        </div>
      </div>
    </div>
  );
}; 