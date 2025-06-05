import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Activity, AlertCircle } from 'lucide-react';

interface PortfolioStock {
  symbol: string;
  shares: number;
  purchasePrice: number;
  currentPrice: number;
  performance: {
    daily: number;
    weekly: number;
    monthly: number;
    ytd: number;
  };
}

interface PortfolioProgressProps {
  portfolio: PortfolioStock[];
}

const COLORS = ['#00FF41', '#FFBE00', '#FF073A', '#00B4D8', '#9B4DCA', '#666666'];

export const PortfolioProgress: React.FC<PortfolioProgressProps> = ({ portfolio }) => {
  // Calcular métricas del portfolio
  const totalInvestment = portfolio.reduce((sum, stock) => sum + (stock.shares * stock.purchasePrice), 0);
  const currentValue = portfolio.reduce((sum, stock) => sum + (stock.shares * stock.currentPrice), 0);
  const totalReturn = ((currentValue - totalInvestment) / totalInvestment) * 100;

  // Datos para el gráfico de composición
  const compositionData = portfolio.map(stock => ({
    name: stock.symbol,
    value: (stock.shares * stock.currentPrice / currentValue) * 100
  }));

  // Datos para el gráfico de rendimiento
  const performanceData = [
    { name: 'Diario', value: portfolio.reduce((sum, stock) => sum + stock.performance.daily, 0) / portfolio.length },
    { name: 'Semanal', value: portfolio.reduce((sum, stock) => sum + stock.performance.weekly, 0) / portfolio.length },
    { name: 'Mensual', value: portfolio.reduce((sum, stock) => sum + stock.performance.monthly, 0) / portfolio.length },
    { name: 'YTD', value: portfolio.reduce((sum, stock) => sum + stock.performance.ytd, 0) / portfolio.length }
  ];

  return (
    <div className="space-y-8">
      {/* Métricas Principales */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-black/20 border border-terminal-green/20 rounded p-6">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-terminal-green" />
            <span className="text-terminal-grey">Valor Total</span>
          </div>
          <div className="text-2xl font-bold text-terminal-green">
            ${currentValue.toLocaleString()}
          </div>
          <div className="text-sm text-terminal-grey mt-1">
            {portfolio.length} posiciones
          </div>
        </div>

        <div className="bg-black/20 border border-terminal-green/20 rounded p-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-terminal-green" />
            <span className="text-terminal-grey">Retorno Total</span>
          </div>
          <div className="text-2xl font-bold text-terminal-green">
            {totalReturn > 0 ? '+' : ''}{totalReturn.toFixed(2)}%
          </div>
          <div className="text-sm text-terminal-grey mt-1">
            Desde el inicio
          </div>
        </div>

        <div className="bg-black/20 border border-terminal-green/20 rounded p-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-terminal-green" />
            <span className="text-terminal-grey">Mejor Rendimiento</span>
          </div>
          <div className="text-2xl font-bold text-terminal-green">
            +{portfolio.reduce((best, stock) => 
              Math.max(best, stock.performance.monthly), -Infinity
            ).toFixed(2)}%
          </div>
          <div className="text-sm text-terminal-grey mt-1">
            Mensual
          </div>
        </div>

        <div className="bg-black/20 border border-terminal-green/20 rounded p-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5 text-terminal-red" />
            <span className="text-terminal-grey">Peor Rendimiento</span>
          </div>
          <div className="text-2xl font-bold text-terminal-red">
            {portfolio.reduce((worst, stock) => 
              Math.min(worst, stock.performance.monthly), Infinity
            ).toFixed(2)}%
          </div>
          <div className="text-sm text-terminal-grey mt-1">
            Mensual
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-2 gap-6">
        {/* Gráfico de Composición */}
        <div className="bg-black/20 border border-terminal-green/20 rounded p-6">
          <h3 className="text-terminal-green font-mono mb-6 text-lg">COMPOSICIÓN DEL PORTFOLIO</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={compositionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#00FF41"
                  dataKey="value"
                  label={({ name, value }) => `${name} (${value.toFixed(1)}%)`}
                >
                  {compositionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00FF41'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Rendimiento */}
        <div className="bg-black/20 border border-terminal-green/20 rounded p-6">
          <h3 className="text-terminal-green font-mono mb-6 text-lg">RENDIMIENTO POR PERÍODO</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
                <XAxis dataKey="name" stroke="#00FF41" />
                <YAxis stroke="#00FF41" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    color: '#00FF41'
                  }}
                />
                <Bar dataKey="value" fill="#00FF41" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Lista de Activos */}
      <div className="bg-black/20 border border-terminal-green/20 rounded p-6">
        <h3 className="text-terminal-green font-mono mb-4">DETALLE DE ACTIVOS</h3>
        <div className="space-y-3">
          {portfolio.map((stock, index) => {
            const stockReturn = ((stock.currentPrice - stock.purchasePrice) / stock.purchasePrice) * 100;
            return (
              <div
                key={stock.symbol}
                className="flex items-center justify-between bg-black/30 border border-terminal-green/10 rounded p-4"
              >
                <div className="flex items-center gap-8">
                  <span className="text-terminal-green font-bold w-16">{stock.symbol}</span>
                  <span className="text-terminal-grey w-24">{stock.shares} acciones</span>
                  <span className="text-terminal-grey w-32">
                    Compra: ${stock.purchasePrice.toFixed(2)}
                  </span>
                  <span className="text-terminal-grey w-32">
                    Actual: ${stock.currentPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <span className={`font-bold ${stockReturn >= 0 ? 'text-terminal-green' : 'text-terminal-red'}`}>
                    {stockReturn >= 0 ? '+' : ''}{stockReturn.toFixed(2)}%
                  </span>
                  <span className="text-terminal-green">
                    ${(stock.shares * stock.currentPrice).toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 