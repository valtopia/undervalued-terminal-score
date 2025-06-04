import React from 'react';
import { CreditCard, Check, X, Zap, Users, Clock, Star, Shield, Rocket, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for pricing metrics
const pricingMetrics = {
  totalUsers: 1247,
  proUsers: 342,
  freeUsers: 905,
  conversionRate: 27.4,
  avgSubscriptionLength: "8.5m",
  customerSatisfaction: 98.2
};

const PricingFeature: React.FC<{ included: boolean; children: React.ReactNode }> = ({
  included,
  children
}) => (
  <div className="flex items-center space-x-2">
    {included ? (
      <Check className="h-4 w-4 text-terminal-green" />
    ) : (
      <X className="h-4 w-4 text-terminal-red" />
    )}
    <span className="font-mono text-sm">{children}</span>
  </div>
);

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-terminal-green">
      {/* System Info Bar */}
      <div className="p-4 border-b border-terminal-green/20">
        <div className="flex items-center justify-between text-xs text-terminal-grey font-mono">
          <div className="flex items-center space-x-6">
            <span className="terminal-glow">VALTOPIA v2.1.4</span>
            <span>USER: TRADER_001</span>
            <span>SESSION: {new Date().toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-terminal-green">• CONNECTED</span>
            <span>LATENCY: 12ms</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-2 gap-6">
          {/* Pricing Stats */}
          <div className="bg-black/30 p-6 rounded-lg border border-terminal-green/20">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5" />
              <h2 className="text-xl font-mono">ACTIVE USERS</h2>
            </div>
            <div className="text-4xl font-mono terminal-glow mb-2">{pricingMetrics.totalUsers}</div>
            <div className="text-sm text-terminal-grey font-mono">+156 this week</div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-xs text-terminal-grey font-mono">Pro Users</div>
                <div className="text-2xl font-mono terminal-glow">{pricingMetrics.proUsers}</div>
              </div>
              <div>
                <div className="text-xs text-terminal-grey font-mono">Free Users</div>
                <div className="text-2xl font-mono terminal-glow">{pricingMetrics.freeUsers}</div>
              </div>
            </div>
          </div>

          {/* Conversion Stats */}
          <div className="bg-black/30 p-6 rounded-lg border border-terminal-green/20">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5" />
              <h2 className="text-xl font-mono">METRICS</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-terminal-grey font-mono">Conversion Rate</div>
                <div className="text-2xl font-mono terminal-glow">{pricingMetrics.conversionRate}%</div>
              </div>
              <div>
                <div className="text-xs text-terminal-grey font-mono">Avg. Subscription</div>
                <div className="text-2xl font-mono terminal-glow">{pricingMetrics.avgSubscriptionLength}</div>
              </div>
              <div>
                <div className="text-xs text-terminal-grey font-mono">Satisfaction</div>
                <div className="text-2xl font-mono terminal-glow">{pricingMetrics.customerSatisfaction}%</div>
              </div>
              <div>
                <div className="text-xs text-terminal-grey font-mono">Uptime 30d</div>
                <div className="text-2xl font-mono terminal-glow">99.99%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {/* Free Plan */}
          <div className="bg-black/30 p-6 rounded-lg border border-terminal-green/20">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5" />
              <h2 className="text-xl font-mono">FREE</h2>
            </div>
            <div className="text-3xl font-mono terminal-glow mb-2">$0</div>
            <div className="text-sm text-terminal-grey font-mono mb-6">Forever Free</div>
            
            <div className="space-y-3 mb-6">
              <PricingFeature included={true}>5 daily undervalued assets</PricingFeature>
              <PricingFeature included={true}>UV Score with 24h delay</PricingFeature>
              <PricingFeature included={true}>3 active alerts</PricingFeature>
              <PricingFeature included={true}>10 assets in portfolio</PricingFeature>
              <PricingFeature included={false}>Access to Analytics</PricingFeature>
              <PricingFeature included={false}>Access to Screener</PricingFeature>
              <PricingFeature included={false}>No branding</PricingFeature>
            </div>

            <button className="w-full py-2 border border-terminal-green/30 rounded font-mono text-xs hover:border-terminal-green hover:text-terminal-green hover:bg-terminal-green/5 transition-all duration-300">
              START FREE
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-black/30 p-6 rounded-lg border border-terminal-green relative overflow-hidden">
            <div className="absolute inset-0 bg-terminal-green/5"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5" />
                <h2 className="text-xl font-mono">PRO</h2>
              </div>
              <div className="text-3xl font-mono terminal-glow mb-2">$9.99</div>
              <div className="text-sm text-terminal-grey font-mono mb-6">Per month</div>
              
              <div className="space-y-3 mb-6">
                <PricingFeature included={true}>Full access to all assets</PricingFeature>
                <PricingFeature included={true}>Real-time UV Score</PricingFeature>
                <PricingFeature included={true}>Full access to Analytics</PricingFeature>
                <PricingFeature included={true}>Full access to Screener</PricingFeature>
                <PricingFeature included={true}>Up to 100 alerts</PricingFeature>
                <PricingFeature included={true}>Complete portfolio</PricingFeature>
                <PricingFeature included={true}>No branding</PricingFeature>
              </div>

              <button className="w-full py-2 bg-terminal-green/10 border border-terminal-green rounded font-mono text-xs hover:bg-terminal-green/20 hover:text-terminal-green transition-all duration-300">
                UPGRADE NOW
              </button>
            </div>
          </div>

          {/* Advanced Plan */}
          <div className="bg-black/30 p-6 rounded-lg border border-terminal-green relative overflow-hidden">
            <div className="absolute inset-0 bg-terminal-green/5"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-5 w-5" />
                <h2 className="text-xl font-mono">ADVANCED</h2>
              </div>
              <div className="text-3xl font-mono terminal-glow mb-2">$29.99</div>
              <div className="text-sm text-terminal-grey font-mono mb-6">Per month</div>
              
              <div className="space-y-3 mb-6">
                <PricingFeature included={true}>Everything in Pro</PricingFeature>
                <PricingFeature included={true}>Advanced API access</PricingFeature>
                <PricingFeature included={true}>Custom alerts logic</PricingFeature>
                <PricingFeature included={true}>Market sentiment analysis</PricingFeature>
                <PricingFeature included={true}>Unlimited alerts</PricingFeature>
                <PricingFeature included={true}>Priority support</PricingFeature>
                <PricingFeature included={true}>Custom integrations</PricingFeature>
              </div>

              <button className="w-full py-2 bg-terminal-green/10 border border-terminal-green rounded font-mono text-xs hover:bg-terminal-green/20 hover:text-terminal-green transition-all duration-300">
                GET ADVANCED
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-black/30 p-6 rounded-lg border border-terminal-green relative overflow-hidden">
            <div className="absolute inset-0 bg-terminal-green/5"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-5 w-5" />
                <h2 className="text-xl font-mono">ENTERPRISE</h2>
              </div>
              <div className="text-3xl font-mono terminal-glow mb-2">Custom</div>
              <div className="text-sm text-terminal-grey font-mono mb-6">Contact sales</div>
              
              <div className="space-y-3 mb-6">
                <PricingFeature included={true}>Everything in Advanced</PricingFeature>
                <PricingFeature included={true}>On-premise deployment</PricingFeature>
                <PricingFeature included={true}>Custom SLA</PricingFeature>
                <PricingFeature included={true}>Dedicated support team</PricingFeature>
                <PricingFeature included={true}>White-label solution</PricingFeature>
                <PricingFeature included={true}>Custom development</PricingFeature>
                <PricingFeature included={true}>Training & workshops</PricingFeature>
              </div>

              <button className="w-full py-2 bg-terminal-green/10 border border-terminal-green rounded font-mono text-xs hover:bg-terminal-green/20 hover:text-terminal-green transition-all duration-300">
                CONTACT SALES
              </button>
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-8 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
          <div className="flex justify-between items-center">
            <div>
              Pricing Engine v1.0.0 • Active Users: {pricingMetrics.totalUsers} • Pro Users: {pricingMetrics.proUsers}
            </div>
            <div className="flex items-center space-x-4">
              <span>Conversion Rate: {pricingMetrics.conversionRate}%</span>
              <span className="text-terminal-green">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 