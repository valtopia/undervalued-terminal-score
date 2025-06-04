export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  uvScore: number;
  undervalueScore: number;
  marketCap: string;
  volume: string;
  pe: number;
  sector: string;
  company: string;
  rank: number;
}

export interface StockDetail extends Stock {
  description: string;
  metrics: {
    pegRatio: number;
    roe: number;
    grossMargin: number;
    revenueGrowth: number;
    eps: {
      year: string;
      value: number;
    }[];
  };
  sentiment: {
    analystRating: 'BUY' | 'HOLD' | 'SELL';
    ratings: {
      buy: number;
      hold: number;
      sell: number;
    };
  };
  riskFactors: {
    severity: 'HIGH' | 'MEDIUM' | 'LOW';
    description: string;
  }[];
  news: {
    date: string;
    title: string;
    source: string;
    url: string;
  }[];
  sectorComparison: {
    metric: string;
    value: number;
    sectorAvg: number;
    percentile: number;
  }[];
} 