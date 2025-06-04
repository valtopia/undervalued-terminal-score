import React from 'react';
import { TrendingUp, TrendingDown, Briefcase, PieChart, DollarSign, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Layout/Header';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

// Mock data for portfolio
const portfolioSummary = {
  totalValue: 156432.89,
  dayChange: 1823.45,
  dayChangePercent: 1.18,
  totalGain: 12432.89,
  totalGainPercent: 8.63,
  positions: 12
};

const portfolioPositions = [
  {
    symbol: 'MSFT',
    shares: 45,
    avgPrice: 380.25,
    currentPrice: 412.73,
    value: 18572.85,
    gain: 1461.60,
    gainPercent: 8.54,
    uvScore: 8.7,
    weight: 11.87
  },
  {
    symbol: 'NVDA',
    shares: 15,
    avgPrice: 780.50,
    currentPrice: 875.32,
    value: 13129.80,
    gain: 1422.30,
    gainPercent: 12.14,
    uvScore: 7.7,
    weight: 8.39
  },
  {
    symbol: 'GOOGL',
    shares: 65,
    avgPrice: 142.30,
    currentPrice: 175.84,
    value: 11429.60,
    gain: 2177.10,
    gainPercent: 23.53,
    uvScore: 8.4,
    weight: 7.31
  }
];

const metrics = [
  {
    label: 'Beta',
    value: '1.12',
    description: 'Volatilidad vs. S&P 500'
  },
  {
    label: 'Sharpe Ratio',
    value: '1.85',
    description: 'Retorno ajustado por riesgo'
  },
  {
    label: 'Dividend Yield',
    value: '1.32%',
    description: 'Rendimiento por dividendos'
  },
  {
    label: 'P/E Ratio',
    value: '24.5',
    description: 'Promedio ponderado'
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-terminal-green scanline">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 w-full overflow-x-hidden">
            <Header isMobile={false} />
            
            <div className="max-w-7xl mx-auto px-8 py-8">
              {/* System Info Bar */}
              <div className="mb-6 flex items-center justify-between text-xs text-terminal-grey font-mono bg-black/30 p-4 rounded-lg border border-terminal-green/20">
                <div className="flex items-center space-x-6">
                  <span className="terminal-glow">VALTOPIA PORTFOLIO v1.0.0</span>
                  <span>MODE: STATIC</span>
                  <span>LAST UPDATE: {new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>• STATIC</span>
                  <span>DELAY: N/A</span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Portfolio Summary */}
                <div className="col-span-2 bg-black/30 p-6 rounded-lg border border-terminal-green/20">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xs text-terminal-grey mb-2 font-mono">VALOR TOTAL</h3>
                      <div className="text-2xl font-mono terminal-glow">${portfolioSummary.totalValue.toLocaleString()}</div>
                      <div className={cn(
                        "text-sm font-mono mt-1",
                        portfolioSummary.dayChange > 0 ? "text-terminal-green" : "text-terminal-red"
                      )}>
                        {portfolioSummary.dayChange > 0 ? "+" : "-"}${Math.abs(portfolioSummary.dayChange).toLocaleString()} ({portfolioSummary.dayChangePercent}%)
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs text-terminal-grey mb-2 font-mono">GANANCIA TOTAL</h3>
                      <div className="text-2xl font-mono terminal-glow">${portfolioSummary.totalGain.toLocaleString()}</div>
                      <div className={cn(
                        "text-sm font-mono mt-1",
                        portfolioSummary.totalGainPercent > 0 ? "text-terminal-green" : "text-terminal-red"
                      )}>
                        {portfolioSummary.totalGainPercent > 0 ? "+" : "-"}{Math.abs(portfolioSummary.totalGainPercent)}%
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs text-terminal-grey mb-2 font-mono">POSICIONES</h3>
                      <div className="text-2xl font-mono terminal-glow">{portfolioSummary.positions}</div>
                      <div className="text-sm font-mono mt-1 text-terminal-grey">Activas</div>
                    </div>
                  </div>
                </div>

                {/* Portfolio Positions */}
                <div className="bg-black/30 p-6 rounded-lg border border-terminal-green/20">
                  <h2 className="text-xl font-mono mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    POSICIONES
                  </h2>
                  <div className="space-y-4">
                    {portfolioPositions.map((position) => (
                      <div key={position.symbol} className="p-4 bg-black/20 rounded border border-terminal-green/10">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-mono text-lg">{position.symbol}</div>
                            <div className="text-xs text-terminal-grey font-mono">{position.shares} acciones</div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono">${position.value.toLocaleString()}</div>
                            <div className={cn(
                              "text-xs font-mono",
                              position.gainPercent > 0 ? "text-terminal-green" : "text-terminal-red"
                            )}>
                              {position.gainPercent > 0 ? "+" : "-"}{Math.abs(position.gainPercent)}%
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs text-terminal-grey font-mono">
                          <div>Precio: ${position.currentPrice}</div>
                          <div>UV Score: {position.uvScore}</div>
                          <div>Peso: {position.weight}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Metrics */}
                <div className="bg-black/30 p-6 rounded-lg border border-terminal-green/20">
                  <h2 className="text-xl font-mono mb-4 flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    MÉTRICAS
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="p-4 bg-black/20 rounded border border-terminal-green/10">
                        <div className="text-xs text-terminal-grey font-mono mb-1">{metric.label}</div>
                        <div className="text-lg font-mono terminal-glow">{metric.value}</div>
                        <div className="text-xs text-terminal-grey font-mono mt-1">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Status */}
              <div className="mt-12 pt-4 border-t border-terminal-green/30 text-xs text-terminal-grey font-mono">
                <div className="flex justify-between items-center">
                  <div>
                    Portfolio Engine v1.0.0 • Assets: {portfolioSummary.positions} • Total Value: ${portfolioSummary.totalValue.toLocaleString()}
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>P/L: {portfolioSummary.totalGainPercent > 0 ? "+" : "-"}{Math.abs(portfolioSummary.totalGainPercent)}%</span>
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

export default Portfolio; 