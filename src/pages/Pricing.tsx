import React from 'react';
import { CreditCard, Check, X, Zap, Users, Star, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header, SystemInfoBar } from '@/components/Layout';

// Mock data for pricing metrics
const pricingMetrics = {
  totalUsers: "1K+",
  proUsers: "300+",
  conversionRate: "25+",
  satisfaction: "98"
};

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

export default function Pricing() {
  return (
    <div className="h-screen bg-black text-terminal-green flex flex-col">
      <SystemInfoBar 
        version="VALTOPIA PRICING v1.0.0"
        customStatus="STATIC"
        customDelay="N/A"
      />

      <div className="flex-1 flex flex-col max-w-[1800px] mx-auto px-8 py-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Pricing Stats */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-green/10">
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">COMMUNITY</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">{pricingMetrics.totalUsers}</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Active Users</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Pro Users</div>
                <div className="text-sm font-mono text-terminal-grey">{pricingMetrics.proUsers}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Satisfaction</div>
                <div className="text-sm font-mono text-terminal-grey">{pricingMetrics.satisfaction}%</div>
              </div>
            </div>
          </div>

          {/* Conversion Stats */}
          <div className="bg-black/30 p-2 rounded-lg border border-terminal-green/10">
            <div className="flex items-center gap-2 mb-1">
              <Star className="h-3 w-3 text-terminal-grey" />
              <h2 className="text-sm font-mono text-terminal-grey">PLATFORM</h2>
            </div>
            <div className="text-xl font-mono text-terminal-grey">24/7</div>
            <div className="text-[10px] text-terminal-grey/70 font-mono">Market Coverage</div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Markets</div>
                <div className="text-sm font-mono text-terminal-grey">Global</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-grey/70 font-mono">Uptime</div>
                <div className="text-sm font-mono text-terminal-grey">99.9%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-4">
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

        {/* Footer Status */}
        <div className="mt-3 pt-2 border-t border-terminal-green/10 text-[10px] text-terminal-grey/70 font-mono">
          <div className="flex justify-between items-center">
            <div>
              Pricing Engine v1.0.0 • Users: {pricingMetrics.totalUsers} • Satisfaction: {pricingMetrics.satisfaction}%
            </div>
            <div className="flex items-center space-x-4">
              <span>Pro Users: {pricingMetrics.proUsers}</span>
              <span className="text-terminal-green">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 