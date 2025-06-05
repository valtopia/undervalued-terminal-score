import React, { useState, useEffect } from 'react';
import { 
  Target, 
  TrendingUp, 
  AlertCircle, 
  Activity
} from 'lucide-react';
import { Header, SystemInfoBar } from '@/components/Layout';
import { MetricCard } from '@/components/Dashboard/MetricCard';
import { DynamicContent } from '@/components/Dashboard/DynamicContent';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState<'stocks' | 'alerts' | 'favorites' | 'simulator'>('stocks');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Mock data para métricas del sistema
  const systemMetrics = {
    latency: 12,
    uptime: 168,
    health: 99.9,
    lastSync: new Date(),
  };

  // Mock data para KPIs
  const kpiData = {
    opportunities: {
      undervaluedAssets: 42,
      potentialReturn: 18.5,
      riskScore: 3.2,
      marketCoverage: 89
    }
  };

  return (
    <div className="h-screen bg-black text-terminal-grey flex flex-col">
      <SystemInfoBar 
        version="VALTOPIA v2.1.4"
        customStatus="CONNECTED"
        customDelay="12ms"
      />

      <div className="flex-1 flex flex-col w-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 scrollbar-thin scrollbar-thumb-terminal-grey/20 scrollbar-track-transparent hover:scrollbar-thumb-terminal-grey/30">
          {/* Panel Central - KPIs */}
          <div className="space-y-4 mb-6 w-full">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-terminal-grey" />
              <h2 className="text-lg font-mono font-bold tracking-wide">MARKET OPPORTUNITIES</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <MetricCard
                title="UNDERVALUED ASSETS"
                value={kpiData.opportunities.undervaluedAssets}
                icon={Target}
                trend={{ value: 12, isPositive: true }}
                metricType="count"
              />
              <MetricCard
                title="POTENTIAL RETURN"
                value={`${kpiData.opportunities.potentialReturn}%`}
                icon={TrendingUp}
                trend={{ value: 2.3, isPositive: true }}
                metricType="percentage"
              />
              <MetricCard
                title="RISK SCORE"
                value={kpiData.opportunities.riskScore}
                icon={AlertCircle}
                subtitle="Low Risk"
                metricType="performance"
              />
              <MetricCard
                title="MARKET COVERAGE"
                value={`${kpiData.opportunities.marketCoverage}%`}
                icon={Activity}
                metricType="percentage"
              />
            </div>
          </div>

          {/* Panel Inferior - Contenido Dinámico */}
          <div className="w-full">
            <DynamicContent activeTab={activeTab} />
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-3 pt-2 border-t border-terminal-grey/10 text-[10px] text-terminal-grey/70 font-mono px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
            <div>
              Dashboard v2.1.4 • Assets: 3,247 • Last Update: {currentTime.toLocaleTimeString()}
            </div>
            <div className="flex items-center space-x-4">
              <span>CACHE: 1.2GB</span>
              <span className="text-terminal-grey">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 