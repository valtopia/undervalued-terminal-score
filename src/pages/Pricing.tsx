import React from 'react';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Check, X } from 'lucide-react';

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
    <span className="text-sm">{children}</span>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-terminal-green scanline">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar 
            isExpanded={true}
            onToggle={() => {}}
            isMobile={false}
          />
          <SidebarInset className="flex-1">
            <Header isMobile={false} />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {/* Title Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl font-mono font-bold terminal-glow mb-4">
                  VALTOPIA PRICING
                </h1>
                <p className="text-terminal-grey text-lg font-mono">
                  The Terminal, Your Way
                </p>
              </div>

              {/* System Info Bar */}
              <div className="mb-12 flex justify-between text-xs text-terminal-grey font-mono bg-black/30 p-4 rounded-lg border border-terminal-green/20">
                <span className="terminal-glow">PRICING MODULE v1.0.0</span>
                <span>LAST UPDATE: {new Date().toLocaleDateString()}</span>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Free Plan */}
                <div className="bg-black/50 border border-terminal-green/30 rounded-lg p-8 hover:border-terminal-green/60 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-mono mb-2">Free Terminal Access</h2>
                    <div className="text-4xl font-mono terminal-glow">$0</div>
                    <div className="text-terminal-grey text-sm mt-2">Forever Free</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <PricingFeature included={true}>
                      5 activos undervalued diarios
                    </PricingFeature>
                    <PricingFeature included={true}>
                      UV Score con 24h de retraso
                    </PricingFeature>
                    <PricingFeature included={true}>
                      3 alertas activas máximas
                    </PricingFeature>
                    <PricingFeature included={true}>
                      10 activos en portafolio
                    </PricingFeature>
                    <PricingFeature included={false}>
                      Acceso a Analytics
                    </PricingFeature>
                    <PricingFeature included={false}>
                      Acceso a Screener
                    </PricingFeature>
                    <PricingFeature included={false}>
                      Sin branding
                    </PricingFeature>
                  </div>

                  <button className="w-full py-3 border border-terminal-green/30 rounded font-mono text-sm hover:border-terminal-green hover:text-terminal-green hover:terminal-glow transition-all duration-300">
                    EMPIEZA GRATIS
                  </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-black/50 border-2 border-terminal-green rounded-lg p-8 animate-glow relative overflow-hidden">
                  <div className="absolute inset-0 bg-terminal-green/5"></div>
                  <div className="relative">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-mono mb-2">Pro Terminal Access</h2>
                      <div className="text-4xl font-mono terminal-glow">$9.90</div>
                      <div className="text-terminal-grey text-sm mt-2">Por mes</div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <PricingFeature included={true}>
                        Acceso total a todos los activos
                      </PricingFeature>
                      <PricingFeature included={true}>
                        UV Score en tiempo real
                      </PricingFeature>
                      <PricingFeature included={true}>
                        Acceso completo a Analytics
                      </PricingFeature>
                      <PricingFeature included={true}>
                        Acceso completo a Screener
                      </PricingFeature>
                      <PricingFeature included={true}>
                        Hasta 100 alertas activas
                      </PricingFeature>
                      <PricingFeature included={true}>
                        Portafolio completo
                      </PricingFeature>
                      <PricingFeature included={true}>
                        Sin branding, sin restricciones
                      </PricingFeature>
                    </div>

                    <button className="w-full py-3 bg-terminal-green/10 border border-terminal-green rounded font-mono text-sm hover:bg-terminal-green/20 hover:terminal-glow transition-all duration-300">
                      SUBE DE NIVEL
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer Status */}
              <div className="mt-16 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                <div className="flex justify-between items-center">
                  <div>
                    Billing Engine v1.2.1 • Secure Payments • Instant Access
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>SSL: ACTIVE</span>
                    <span className="text-terminal-green">READY</span>
                  </div>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Pricing; 