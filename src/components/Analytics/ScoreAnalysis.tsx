import React from 'react';
import { Shield, TrendingUp, AlertCircle, Activity, DollarSign, LineChart } from 'lucide-react';

interface ScoreBreakdown {
  category: string;
  score: number;
  metrics: {
    name: string;
    value: number;
    weight: number;
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}

const mockScoreBreakdown: ScoreBreakdown[] = [
  {
    category: 'Fundamentals',
    score: 8.5,
    metrics: [
      {
        name: 'P/E Ratio',
        value: 25.4,
        weight: 0.3,
        impact: 'positive'
      },
      {
        name: 'Revenue Growth',
        value: 18.2,
        weight: 0.4,
        impact: 'positive'
      },
      {
        name: 'Debt/Equity',
        value: 1.2,
        weight: 0.3,
        impact: 'neutral'
      }
    ]
  },
  {
    category: 'Technical',
    score: 7.8,
    metrics: [
      {
        name: 'RSI',
        value: 65,
        weight: 0.25,
        impact: 'neutral'
      },
      {
        name: 'MACD',
        value: 2.3,
        weight: 0.35,
        impact: 'positive'
      },
      {
        name: 'Volume Trend',
        value: -5.2,
        weight: 0.4,
        impact: 'negative'
      }
    ]
  },
  {
    category: 'Market Sentiment',
    score: 9.2,
    metrics: [
      {
        name: 'Analyst Ratings',
        value: 4.5,
        weight: 0.4,
        impact: 'positive'
      },
      {
        name: 'News Sentiment',
        value: 0.8,
        weight: 0.3,
        impact: 'positive'
      },
      {
        name: 'Social Sentiment',
        value: 0.6,
        weight: 0.3,
        impact: 'neutral'
      }
    ]
  },
  {
    category: 'Risk Assessment',
    score: 8.1,
    metrics: [
      {
        name: 'Beta',
        value: 1.1,
        weight: 0.35,
        impact: 'neutral'
      },
      {
        name: 'Volatility',
        value: 15.4,
        weight: 0.35,
        impact: 'negative'
      },
      {
        name: 'Liquidity',
        value: 0.9,
        weight: 0.3,
        impact: 'positive'
      }
    ]
  }
];

export const ScoreAnalysis = () => {
  const getImpactColor = (impact: 'positive' | 'negative' | 'neutral') => {
    switch (impact) {
      case 'positive':
        return 'text-terminal-green';
      case 'negative':
        return 'text-terminal-red';
      default:
        return 'text-terminal-yellow';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8.5) return 'text-terminal-green';
    if (score >= 7) return 'text-terminal-yellow';
    return 'text-terminal-red';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fundamentals':
        return <DollarSign className="w-5 h-5" />;
      case 'Technical':
        return <LineChart className="w-5 h-5" />;
      case 'Market Sentiment':
        return <TrendingUp className="w-5 h-5" />;
      case 'Risk Assessment':
        return <Shield className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Overall Score Summary */}
      <div className="grid grid-cols-4 gap-4">
        {mockScoreBreakdown.map((breakdown) => (
          <div 
            key={breakdown.category}
            className="p-4 bg-black/20 rounded border border-terminal-green/10"
          >
            <div className="flex items-center gap-2 mb-3">
              {getCategoryIcon(breakdown.category)}
              <span className="text-terminal-green/70">{breakdown.category}</span>
            </div>
            <div className={`text-2xl font-bold ${getScoreColor(breakdown.score)}`}>
              {breakdown.score.toFixed(1)}
            </div>
            <div className="mt-2 h-1 bg-black/30 rounded">
              <div 
                className="h-full bg-terminal-green rounded"
                style={{ width: `${breakdown.score * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-2 gap-6">
        {mockScoreBreakdown.map((breakdown) => (
          <div 
            key={breakdown.category}
            className="bg-black/20 rounded border border-terminal-green/10 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {getCategoryIcon(breakdown.category)}
                <h3 className="text-terminal-green font-mono">{breakdown.category}</h3>
              </div>
              <div className={`font-bold ${getScoreColor(breakdown.score)}`}>
                Score: {breakdown.score.toFixed(1)}
              </div>
            </div>

            <div className="space-y-4">
              {breakdown.metrics.map((metric) => (
                <div key={metric.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-terminal-grey">{metric.name}</span>
                    <div className="flex items-center gap-4">
                      <span className={getImpactColor(metric.impact)}>
                        {metric.value}
                      </span>
                      <span className="text-terminal-grey text-sm">
                        Weight: {(metric.weight * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="h-1 bg-black/30 rounded">
                    <div 
                      className={`h-full rounded ${
                        metric.impact === 'positive' ? 'bg-terminal-green' :
                        metric.impact === 'negative' ? 'bg-terminal-red' :
                        'bg-terminal-yellow'
                      }`}
                      style={{ width: `${metric.weight * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 