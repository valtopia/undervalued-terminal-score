import React, { useState, useEffect } from 'react';
import { 
  Bitcoin,
  Wallet,
  LineChart,
  Lock
} from 'lucide-react';
import { Header, SystemInfoBar } from '@/components/Layout';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

const Crypto = () => {
  return (
    <div className="h-screen bg-black text-terminal-green flex flex-col">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 w-full overflow-x-hidden">
            <Header isMobile={false} />
            <div className="max-w-[1800px] mx-auto px-8 py-8">
              <SystemInfoBar 
                version="VALTOPIA CRYPTO v1.0.0"
                customStatus="CONNECTED"
                customDelay="12ms"
              />

              {/* Contenido Principal con Coming Soon */}
              <div className="flex-1 flex items-center justify-center mt-12">
                <div className="text-center space-y-6">
                  <Bitcoin className="h-16 w-16 mx-auto text-terminal-green mb-4" />
                  <h1 className="text-4xl font-mono font-bold terminal-glow">CRYPTO MODULE</h1>
                  <p className="text-xl text-terminal-grey font-mono">Coming Soon</p>
                  <div className="text-sm text-terminal-grey/70 font-mono">
                    The crypto module is currently under development.
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

export default Crypto; 