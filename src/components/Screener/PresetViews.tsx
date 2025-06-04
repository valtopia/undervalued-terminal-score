import React from 'react';
import { Bookmark } from 'lucide-react';

interface PresetViewsProps {
  activePreset: string | null;
  onPresetSelect: (preset: string) => void;
}

const presets = [
  {
    id: 'top-undervalued',
    label: 'TOP UNDERVALUED',
    description: 'Stocks with highest UV Score'
  },
  {
    id: 'high-yield-low-vol',
    label: 'HIGH YIELD, LOW VOL',
    description: 'High dividend yield with low volatility'
  },
  {
    id: 'score-upgrades',
    label: 'RECENT UPGRADES',
    description: 'Recently upgraded UV Scores'
  },
  {
    id: 'low-pe-growth',
    label: 'LOW P/E GROWTH',
    description: 'Low P/E ratio with high growth potential'
  }
];

export const PresetViews: React.FC<PresetViewsProps> = ({
  activePreset,
  onPresetSelect
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {presets.map(preset => (
        <button
          key={preset.id}
          onClick={() => onPresetSelect(preset.id)}
          className={`flex items-center space-x-2 px-3 py-1 text-xs border rounded transition-colors ${
            activePreset === preset.id
              ? 'border-terminal-green text-terminal-green bg-terminal-green/10'
              : 'border-terminal-green/30 text-terminal-grey hover:border-terminal-green hover:text-terminal-green'
          }`}
          title={preset.description}
        >
          <Bookmark className="h-3 w-3" />
          <span>{preset.label}</span>
        </button>
      ))}
    </div>
  );
}; 