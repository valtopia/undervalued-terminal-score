import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SystemInfoBar } from '@/components/Layout';
import { TerminalAuth } from '@/components/Auth/TerminalAuth';
import { PricingModal } from '@/components/Pricing/PricingModal';

export default function Landing() {
  const [countdown, setCountdown] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showAuth, setShowAuth] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [currentMode, setCurrentMode] = useState('STATIC MODE');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showNewMode, setShowNewMode] = useState(true);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const modes = ['STATIC MODE', 'DEGEN MODE', 'TRADER MODE', 'INVESTOR MODE'];
    let currentIndex = 0;

    const switchMode = async () => {
      setShowNewMode(false);
      setIsLoading(true);
      
      for (let i = 0; i <= 100; i += 10) {
        setLoadingProgress(i);
        await new Promise(resolve => setTimeout(resolve, 150));
      }
      
      currentIndex = (currentIndex + 1) % modes.length;
      setCurrentMode(modes[currentIndex]);
      setIsLoading(false);
      setLoadingProgress(0);
      setShowNewMode(true);
    };

    const interval = setInterval(switchMode, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCloseAuth = () => {
    setShowAuth(false);
  };

  const handleClosePricing = () => {
    setShowPricing(false);
  };

  const getLoadingText = () => {
    if (loadingProgress < 30) return 'INITIALIZING';
    if (loadingProgress < 60) return 'LOADING';
    if (loadingProgress < 90) return 'SWITCHING';
    return 'READY';
  };

  return (
    <div className="min-h-screen w-full bg-[#050510] text-terminal-green flex flex-col crt">
      <div className="screen-flicker"></div>
      <div className="system-info-bar">
        <SystemInfoBar 
          version="VALTOPIA v2.1.4"
          customStatus="CONNECTED"
          customDelay="12ms"
        />
      </div>
      <div className="crt-screen">
        <div className="crt-content">
          <div className="flex-1 flex items-center justify-center relative overflow-hidden min-h-[calc(100vh-4rem)]">
            <div className="absolute inset-0 scanline pointer-events-none"></div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="relative z-10 text-center space-y-12 w-full max-w-2xl px-4">
                <div className="space-y-6">
                  <h1 className="text-9xl font-mono font-bold tracking-wider terminal-glow animate-pulse">
                    VALTOPIA
                  </h1>
                  <div className="space-y-2">
                    <p className="text-2xl font-mono text-terminal-grey title-flicker">
                      The Undervalued Terminal
                    </p>
                    <div className="text-sm font-mono text-terminal-amber">
                      ACCESS AVAILABLE IN: {String(countdown.days).padStart(2, '0')}d {String(countdown.hours).padStart(2, '0')}h {String(countdown.minutes).padStart(2, '0')}m {String(countdown.seconds).padStart(2, '0')}s
                    </div>
                  </div>
                </div>
                
                {showAuth && <TerminalAuth onClose={handleCloseAuth} />}
                {showPricing && <PricingModal onClose={handleClosePricing} />}

                <div className="flex gap-6 justify-center w-full">
                  <button 
                    onClick={() => setShowAuth(true)}
                    className="px-12 py-4 bg-terminal-green/10 border border-terminal-green rounded-lg font-mono text-base hover:bg-terminal-green/20 transition-all duration-300"
                  >
                    ENTER TERMINAL
                  </button>
                  <button 
                    onClick={() => setShowPricing(true)}
                    className="px-12 py-4 border border-terminal-green/30 rounded-lg font-mono text-base hover:border-terminal-green hover:bg-terminal-green/5 transition-all duration-300"
                  >
                    VIEW PRICING
                  </button>
                </div>
              </div>

              <div className="fixed bottom-8 text-sm font-mono text-terminal-grey/60 text-center w-full">
                v2.1.4 • 
                <span className={`inline-block min-w-[140px] transition-all duration-700`}>
                  {isLoading ? (
                    <span className="text-terminal-amber">
                      {getLoadingText()} {loadingProgress}%
                    </span>
                  ) : (
                    <span className={`transition-all duration-700 ${showNewMode ? 'text-terminal-red' : 'text-terminal-grey/60'}`}>
                      {currentMode}
                    </span>
                  )}
                </span>
                • {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 