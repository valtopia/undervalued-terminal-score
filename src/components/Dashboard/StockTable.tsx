import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertCircle, Eye, Star, Bell, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StockDetailPanel } from './StockDetailPanel';
import { Stock, StockDetail } from '@/types/stock';

interface StockData {
  symbol: string;
  company: string;
  price: number;
  change: number;
  changePercent: number;
  uvScore: number;
  undervalueScore: number;
  pe: number;
  marketCap: string;
  sector: string;
  rank: number;
  name: string;
  volume: string;
  alerts: number;
}

const mockStocks: StockData[] = [
  {
    symbol: 'MSFT',
    company: 'Microsoft Corporation',
    price: 412.73,
    change: -2.45,
    changePercent: -0.59,
    uvScore: 8.7,
    undervalueScore: 8.7,
    pe: 34.2,
    marketCap: '3.1T',
    sector: 'Technology',
    rank: 1,
    name: 'Microsoft Corporation',
    volume: '22.3M',
    alerts: 0
  },
  {
    symbol: 'GOOGL',
    company: 'Alphabet Inc.',
    price: 175.84,
    change: 1.23,
    changePercent: 0.70,
    uvScore: 8.4,
    undervalueScore: 8.4,
    pe: 24.1,
    marketCap: '2.2T',
    sector: 'Technology',
    rank: 2,
    name: 'Alphabet Inc.',
    volume: '22.3M',
    alerts: 0
  },
  {
    symbol: 'BRK.B',
    company: 'Berkshire Hathaway Inc.',
    price: 452.18,
    change: 3.47,
    changePercent: 0.77,
    uvScore: 8.1,
    undervalueScore: 8.1,
    pe: 9.2,
    marketCap: '981B',
    sector: 'Financial',
    rank: 3,
    name: 'Berkshire Hathaway Inc.',
    volume: '22.3M',
    alerts: 0
  },
  {
    symbol: 'JNJ',
    company: 'Johnson & Johnson',
    price: 158.92,
    change: -0.85,
    changePercent: -0.53,
    uvScore: 7.9,
    undervalueScore: 7.9,
    pe: 15.7,
    marketCap: '421B',
    sector: 'Healthcare',
    rank: 4,
    name: 'Johnson & Johnson',
    volume: '22.3M',
    alerts: 0
  },
  {
    symbol: 'V',
    company: 'Visa Inc.',
    price: 284.56,
    change: 2.18,
    changePercent: 0.77,
    uvScore: 7.8,
    undervalueScore: 7.8,
    pe: 32.8,
    marketCap: '612B',
    sector: 'Financial',
    rank: 5,
    name: 'Visa Inc.',
    volume: '22.3M',
    alerts: 0
  },
  {
    symbol: 'NVDA',
    company: 'NVIDIA Corporation',
    price: 875.32,
    change: 15.67,
    changePercent: 1.82,
    uvScore: 7.7,
    undervalueScore: 7.7,
    pe: 72.4,
    marketCap: '2.16T',
    sector: 'Technology',
    rank: 6,
    name: 'NVIDIA Corporation',
    volume: '35.1M',
    alerts: 0
  },
  {
    symbol: 'JPM',
    company: 'JPMorgan Chase & Co.',
    price: 183.27,
    change: -0.92,
    changePercent: -0.50,
    uvScore: 7.6,
    undervalueScore: 7.6,
    pe: 11.3,
    marketCap: '528B',
    sector: 'Financial',
    rank: 7,
    name: 'JPMorgan Chase & Co.',
    volume: '8.9M',
    alerts: 0
  },
  {
    symbol: 'META',
    company: 'Meta Platforms Inc.',
    price: 505.95,
    change: 8.23,
    changePercent: 1.65,
    uvScore: 7.5,
    undervalueScore: 7.5,
    pe: 34.2,
    marketCap: '1.29T',
    sector: 'Technology',
    rank: 8,
    name: 'Meta Platforms Inc.',
    volume: '18.7M',
    alerts: 0
  },
  {
    symbol: 'TSM',
    company: 'Taiwan Semiconductor Manufacturing',
    price: 142.68,
    change: 3.45,
    changePercent: 2.48,
    uvScore: 7.4,
    undervalueScore: 7.4,
    pe: 25.8,
    marketCap: '740B',
    sector: 'Technology',
    rank: 9,
    name: 'Taiwan Semiconductor Manufacturing',
    volume: '12.4M',
    alerts: 0
  },
  {
    symbol: 'UNH',
    company: 'UnitedHealth Group Inc.',
    price: 492.31,
    change: -4.82,
    changePercent: -0.97,
    uvScore: 7.3,
    undervalueScore: 7.3,
    pe: 23.1,
    marketCap: '454B',
    sector: 'Healthcare',
    rank: 10,
    name: 'UnitedHealth Group Inc.',
    volume: '3.2M',
    alerts: 0
  }
];

const mockStockDetails: Record<string, StockDetail> = {
  MSFT: {
    ...mockStocks[0],
    description: "Microsoft Corporation desarrolla, licencia y vende software, servicios y dispositivos. La compañía ofrece una amplia gama de productos que incluyen sistemas operativos, aplicaciones de oficina, servicios en la nube (Azure), y hardware como la línea Surface y Xbox.",
    metrics: {
      pegRatio: 1.8,
      roe: 35.2,
      grossMargin: 68.5,
      revenueGrowth: 18.3,
      eps: [
        { year: '2019', value: 5.76 },
        { year: '2020', value: 6.78 },
        { year: '2021', value: 8.05 },
        { year: '2022', value: 9.65 },
        { year: '2023', value: 11.02 }
      ]
    },
    sentiment: {
      analystRating: 'BUY',
      ratings: {
        buy: 28,
        hold: 4,
        sell: 1
      }
    },
    riskFactors: [
      {
        severity: 'HIGH',
        description: 'Intensificación de la competencia en servicios cloud con AWS y Google Cloud'
      },
      {
        severity: 'MEDIUM',
        description: 'Exposición a regulaciones antimonopolio globales'
      },
      {
        severity: 'LOW',
        description: 'Dependencia de la adopción empresarial de soluciones cloud'
      }
    ],
    news: [
      {
        date: '2024-03-15',
        title: 'Microsoft amplía su inversión en IA con nuevas capacidades en Azure',
        source: 'Reuters',
        url: '#'
      },
      {
        date: '2024-03-14',
        title: 'La integración de Activision muestra resultados positivos en Q1',
        source: 'Bloomberg',
        url: '#'
      },
      {
        date: '2024-03-12',
        title: 'Microsoft Teams supera los 300M de usuarios activos mensuales',
        source: 'TechCrunch',
        url: '#'
      }
    ],
    sectorComparison: [
      {
        metric: 'Margen Operativo',
        value: 42.5,
        sectorAvg: 35.8,
        percentile: 75
      },
      {
        metric: 'ROE',
        value: 35.2,
        sectorAvg: 28.4,
        percentile: 82
      },
      {
        metric: 'Crecimiento',
        value: 18.3,
        sectorAvg: 15.1,
        percentile: 68
      }
    ]
  },
  GOOGL: {
    ...mockStocks[1],
    description: "Alphabet Inc. es una compañía tecnológica multinacional que se especializa en servicios y productos relacionados con Internet, incluyendo tecnologías de publicidad online, motores de búsqueda, cloud computing, software y hardware.",
    metrics: {
      pegRatio: 1.5,
      roe: 28.9,
      grossMargin: 56.8,
      revenueGrowth: 15.2,
      eps: [
        { year: '2019', value: 49.16 },
        { year: '2020', value: 58.61 },
        { year: '2021', value: 112.20 },
        { year: '2022', value: 95.00 },
        { year: '2023', value: 99.71 }
      ]
    },
    sentiment: {
      analystRating: 'BUY',
      ratings: {
        buy: 32,
        hold: 3,
        sell: 0
      }
    },
    riskFactors: [
      {
        severity: 'HIGH',
        description: 'Presión regulatoria global sobre prácticas publicitarias y privacidad'
      },
      {
        severity: 'MEDIUM',
        description: 'Dependencia de ingresos publicitarios'
      },
      {
        severity: 'LOW',
        description: 'Competencia en el mercado de IA y cloud computing'
      }
    ],
    news: [
      {
        date: '2024-03-15',
        title: 'Google Cloud expande su infraestructura en Latinoamérica',
        source: 'Reuters',
        url: '#'
      },
      {
        date: '2024-03-13',
        title: 'Gemini alcanza nuevos hitos en capacidades de IA',
        source: 'TechCrunch',
        url: '#'
      },
      {
        date: '2024-03-10',
        title: 'Alphabet anuncia nuevas medidas de privacidad para usuarios',
        source: 'Bloomberg',
        url: '#'
      }
    ],
    sectorComparison: [
      {
        metric: 'Margen Operativo',
        value: 38.2,
        sectorAvg: 35.8,
        percentile: 65
      },
      {
        metric: 'ROE',
        value: 28.9,
        sectorAvg: 28.4,
        percentile: 58
      },
      {
        metric: 'Crecimiento',
        value: 15.2,
        sectorAvg: 15.1,
        percentile: 52
      }
    ]
  },
  'BRK.B': {
    ...mockStocks[2],
    description: "Berkshire Hathaway Inc. es un conglomerado multinacional que posee y opera una diversa cartera de negocios, incluyendo seguros, ferrocarriles, servicios públicos, retail y manufactura.",
    metrics: {
      pegRatio: 1.2,
      roe: 15.8,
      grossMargin: 42.3,
      revenueGrowth: 8.5,
      eps: [
        { year: '2019', value: 14.25 },
        { year: '2020', value: 12.02 },
        { year: '2021', value: 16.73 },
        { year: '2022', value: 18.45 },
        { year: '2023', value: 19.82 }
      ]
    },
    sentiment: {
      analystRating: 'BUY',
      ratings: {
        buy: 18,
        hold: 8,
        sell: 0
      }
    },
    riskFactors: [
      {
        severity: 'MEDIUM',
        description: 'Exposición a riesgos del mercado asegurador'
      },
      {
        severity: 'MEDIUM',
        description: 'Dependencia de condiciones económicas generales'
      },
      {
        severity: 'LOW',
        description: 'Sucesión de liderazgo y gestión de cartera a largo plazo'
      }
    ],
    news: [
      {
        date: '2024-03-14',
        title: 'Berkshire aumenta su participación en el sector energético',
        source: 'WSJ',
        url: '#'
      },
      {
        date: '2024-03-12',
        title: 'GEICO reporta crecimiento sólido en nuevas pólizas',
        source: 'Reuters',
        url: '#'
      },
      {
        date: '2024-03-10',
        title: 'Carta anual de Warren Buffett destaca oportunidades en mercados volátiles',
        source: 'Bloomberg',
        url: '#'
      }
    ],
    sectorComparison: [
      {
        metric: 'Margen Operativo',
        value: 25.4,
        sectorAvg: 22.1,
        percentile: 68
      },
      {
        metric: 'ROE',
        value: 15.8,
        sectorAvg: 14.2,
        percentile: 62
      },
      {
        metric: 'Crecimiento',
        value: 8.5,
        sectorAvg: 7.8,
        percentile: 58
      }
    ]
  }
};

export const StockTable: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState<string | null>(null);
  const [sortColumn, setSortColumn] = useState<keyof StockData>('uvScore');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (column: keyof StockData) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  const sortedStocks = [...mockStocks].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    return sortDirection === 'asc'
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  return (
    <div className="w-full bg-black/30 rounded-lg border border-terminal-grey/20">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-terminal-grey/20 scrollbar-track-transparent">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-terminal-grey/20">
              <th className="p-3 text-left text-xs font-mono text-terminal-grey/70">SYMBOL</th>
              <th className="p-3 text-left text-xs font-mono text-terminal-grey/70">COMPANY</th>
              <th className="p-3 text-right text-xs font-mono text-terminal-grey/70">PRICE</th>
              <th className="p-3 text-right text-xs font-mono text-terminal-grey/70">CHANGE</th>
              <th className="p-3 text-right text-xs font-mono text-terminal-grey/70">UV SCORE</th>
              <th className="p-3 text-right text-xs font-mono text-terminal-grey/70">VOLUME</th>
              <th className="p-3 text-center text-xs font-mono text-terminal-grey/70">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {sortedStocks.map((stock) => (
              <tr 
                key={stock.symbol}
                className="border-b border-terminal-grey/10 hover:bg-terminal-grey/5 cursor-pointer"
                onClick={() => setSelectedStock(stock.symbol)}
              >
                <td className="p-3">
                  <div className="font-mono text-terminal-grey">{stock.symbol}</div>
                </td>
                <td className="p-3">
                  <div className="font-mono text-terminal-grey/70">{stock.company}</div>
                </td>
                <td className="p-3 text-right">
                  <div className="font-mono text-terminal-grey">${stock.price.toFixed(2)}</div>
                </td>
                <td className="p-3 text-right">
                  <div className={cn(
                    "font-mono flex items-center justify-end gap-1",
                    stock.change > 0 ? "text-terminal-green" : "text-terminal-red"
                  )}>
                    {stock.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {Math.abs(stock.change).toFixed(2)}%
                  </div>
                </td>
                <td className="p-3 text-right">
                  <div className="font-mono text-terminal-grey">{stock.uvScore.toFixed(1)}</div>
                </td>
                <td className="p-3 text-right">
                  <div className="font-mono text-terminal-grey/70">{stock.volume}</div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1 hover:bg-terminal-grey/10 rounded">
                      <Star className="h-4 w-4 text-terminal-grey/50" />
                    </button>
                    <button className="p-1 hover:bg-terminal-grey/10 rounded">
                      <Bell className="h-4 w-4 text-terminal-grey/50" />
                    </button>
                    <button className="p-1 hover:bg-terminal-grey/10 rounded">
                      <MoreHorizontal className="h-4 w-4 text-terminal-grey/50" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {selectedStock && (
        <div className="p-4 border-t border-terminal-grey/20">
          <StockDetailPanel 
            isOpen={true}
            onClose={() => setSelectedStock(null)}
            stockData={mockStockDetails[selectedStock]}
          />
        </div>
      )}
    </div>
  );
};
