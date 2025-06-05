import React from 'react';
import { CreditCard, Check, X, Zap, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingModalProps {
  onClose: () => void;
}

const PricingFeature: React.FC<{ included: boolean; children: React.ReactNode; highlight?: boolean }> = ({
  included,
  children,
  highlight = false
}) => (
  <div className={cn(
    "flex items-center space-x-2",
    highlight && "text-terminal-green font-semibold"
  )}>
    {included ? (
      <Check className={cn("h-4 w-4", highlight ? "text-terminal-green" : "text-terminal-grey/70")} />
    ) : (
      <X className="h-4 w-4 text-terminal-red/50" />
    )}
    <span className="font-mono text-sm">{children}</span>
  </div>
);

export const PricingModal: React.FC<PricingModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
      <div className="w-[1200px] bg-black border border-terminal-green/50 rounded-lg overflow-hidden shadow-2xl shadow-terminal-green/20">
        <div className="absolute inset-0 scanline pointer-events-none"></div>
        
        {/* Terminal Header */}
        <div className="bg-terminal-green/10 border-b border-terminal-green/20 p-3">
          <div className="flex items-center justify-between">
            <div className="text-terminal-green font-mono text-sm">
              VALTOPIA://PRICING_MODULE
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-terminal-red/50 hover:bg-terminal-red transition-colors duration-200"
              />
              <div className="w-3 h-3 rounded-full bg-terminal-amber/50" />
              <div className="w-3 h-3 rounded-full bg-terminal-green/50" />
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6">
          <div className="font-mono text-sm mb-6">
            <p className="text-terminal-grey">{">"} INITIALIZING PRICING OPTIONS...</p>
            <p className="text-terminal-amber">{">"} SELECT YOUR ACCESS LEVEL</p>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Free Plan */}
            <div className="col-span-3 bg-black/30 p-4 rounded-lg border border-terminal-green/10 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="h-4 w-4 text-terminal-grey" />
                <h2 className="text-lg font-mono text-terminal-grey">FREE</h2>
              </div>
              <div className="text-2xl font-mono text-terminal-grey mb-1">$0</div>
              <div className="text-xs text-terminal-grey/70 font-mono mb-3">Forever Free</div>
              
              <div className="flex-1 space-y-2 mb-3">
                <PricingFeature included={true}>5 daily undervalued assets</PricingFeature>
                <PricingFeature included={true}>UV Score with 24h delay</PricingFeature>
                <PricingFeature included={true}>3 active alerts</PricingFeature>
                <PricingFeature included={true}>10 assets in portfolio</PricingFeature>
                <PricingFeature included={false}>Access to Analytics</PricingFeature>
                <PricingFeature included={false}>Access to Screener</PricingFeature>
                <PricingFeature included={false}>No branding</PricingFeature>
              </div>

              <button className="w-full py-2 border border-terminal-green/20 rounded font-mono text-xs text-terminal-grey hover:border-terminal-green/40 hover:text-terminal-grey/80 transition-all duration-300">
                START FREE
              </button>
            </div>

            {/* Pro Plan */}
            <div className="col-span-5 bg-black/30 p-4 rounded-lg border-2 border-terminal-green relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300 flex flex-col">
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-terminal-green/10 border border-terminal-green rounded text-[10px] font-mono text-terminal-green">
                MOST POPULAR
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-4 w-4 text-terminal-green" />
                  <h2 className="text-lg font-mono text-terminal-green">PRO</h2>
                </div>
                <div className="text-2xl font-mono text-terminal-green terminal-glow mb-1">$9.99</div>
                <div className="text-xs text-terminal-grey font-mono mb-4">Per month</div>
                
                <div className="space-y-2 mb-4">
                  <PricingFeature included={true} highlight={true}>Full access to all assets</PricingFeature>
                  <PricingFeature included={true} highlight={true}>Real-time UV Score</PricingFeature>
                  <PricingFeature included={true} highlight={true}>Full access to Analytics</PricingFeature>
                  <PricingFeature included={true} highlight={true}>Full access to Screener</PricingFeature>
                  <PricingFeature included={true}>Up to 100 alerts</PricingFeature>
                  <PricingFeature included={true}>Complete portfolio</PricingFeature>
                  <PricingFeature included={true}>No branding</PricingFeature>
                </div>

                <button className="w-full py-2 bg-terminal-green text-black rounded font-mono text-xs font-bold hover:bg-terminal-green/90 transition-all duration-300">
                  UPGRADE NOW
                </button>
              </div>
            </div>

            {/* Advanced Plan */}
            <div className="col-span-4 bg-black/30 p-4 rounded-lg border border-terminal-green/20 relative overflow-hidden transform hover:scale-[1.01] transition-all duration-300 flex flex-col">
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-terminal-green/5 border border-terminal-green/30 rounded text-[10px] font-mono text-terminal-green/80">
                POWER USER
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="h-4 w-4 text-terminal-green/80" />
                  <h2 className="text-lg font-mono text-terminal-green/80">ADVANCED</h2>
                </div>
                <div className="text-2xl font-mono text-terminal-green/80 mb-1">$29.99</div>
                <div className="text-xs text-terminal-grey font-mono mb-4">Per month</div>
                
                <div className="space-y-2 mb-4">
                  <PricingFeature included={true}>Everything in Pro</PricingFeature>
                  <PricingFeature included={true}>Advanced API access</PricingFeature>
                  <PricingFeature included={true}>Custom alerts logic</PricingFeature>
                  <PricingFeature included={true}>Market sentiment analysis</PricingFeature>
                  <PricingFeature included={true}>Unlimited alerts</PricingFeature>
                  <PricingFeature included={true}>Priority support</PricingFeature>
                  <PricingFeature included={true}>Custom integrations</PricingFeature>
                </div>

                <button className="w-full py-2 border border-terminal-green/30 rounded font-mono text-xs text-terminal-green/80 hover:bg-terminal-green/5 hover:border-terminal-green/50 transition-all duration-300">
                  GET ADVANCED
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-terminal-grey text-center border-t border-terminal-green/10 pt-4">
            * All plans include 14-day money-back guarantee. Prices in USD.
          </div>
        </div>
      </div>
    </div>
  );
}; 