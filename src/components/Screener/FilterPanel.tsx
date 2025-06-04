import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

interface FilterPanelProps {
  filters: {
    uvScore: { min: number; max: number };
    price: { min: number; max: number };
    peRatio: { min: number; max: number };
    marketCap: string[];
    sectors: string[];
    volatility: string[];
    dividendYield: { min: number; max: number };
    priceChange: {
      '7d': { min: number; max: number };
      '30d': { min: number; max: number };
    };
    dateAdded: Date | null;
  };
  onFiltersChange: (filters: FilterPanelProps['filters']) => void;
}

const marketCapOptions = [
  { label: 'MICRO CAP', value: 'micro' },
  { label: 'SMALL CAP', value: 'small' },
  { label: 'MID CAP', value: 'mid' },
  { label: 'LARGE CAP', value: 'large' },
  { label: 'MEGA CAP', value: 'mega' }
];

const sectorOptions = [
  'TECHNOLOGY',
  'HEALTHCARE',
  'FINANCIAL',
  'CONSUMER',
  'INDUSTRIAL',
  'ENERGY',
  'MATERIALS',
  'UTILITIES',
  'REAL ESTATE',
  'TELECOM'
];

const volatilityOptions = [
  { label: 'LOW', value: 'low' },
  { label: 'MEDIUM', value: 'medium' },
  { label: 'HIGH', value: 'high' }
];

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange }) => {
  const handleRangeChange = (
    field: keyof typeof filters,
    subField: 'min' | 'max',
    value: number
  ) => {
    onFiltersChange({
      ...filters,
      [field]: {
        ...filters[field],
        [subField]: value
      }
    });
  };

  const handleArrayChange = (field: keyof typeof filters, value: string) => {
    const currentArray = filters[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(v => v !== value)
      : [...currentArray, value];

    onFiltersChange({
      ...filters,
      [field]: newArray
    });
  };

  return (
    <div className="bg-black border border-terminal-green/30 rounded-lg p-6 space-y-6">
      <div className="text-terminal-green font-mono mb-4">FILTER CRITERIA</div>

      {/* UV Score Range */}
      <div className="space-y-2">
        <label className="text-xs text-terminal-grey">UV SCORE RANGE</label>
        <div className="flex items-center space-x-4">
          <span className="text-terminal-green font-mono">{filters.uvScore.min}</span>
          <Slider
            min={0}
            max={10}
            step={0.1}
            value={[filters.uvScore.min, filters.uvScore.max]}
            onValueChange={([min, max]) => {
              handleRangeChange('uvScore', 'min', min);
              handleRangeChange('uvScore', 'max', max);
            }}
            className="flex-1"
          />
          <span className="text-terminal-green font-mono">{filters.uvScore.max}</span>
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <label className="text-xs text-terminal-grey">PRICE RANGE ($)</label>
        <div className="flex items-center space-x-4">
          <span className="text-terminal-green font-mono">{filters.price.min}</span>
          <Slider
            min={0}
            max={1000}
            step={1}
            value={[filters.price.min, filters.price.max]}
            onValueChange={([min, max]) => {
              handleRangeChange('price', 'min', min);
              handleRangeChange('price', 'max', max);
            }}
            className="flex-1"
          />
          <span className="text-terminal-green font-mono">{filters.price.max}</span>
        </div>
      </div>

      {/* Market Cap */}
      <div className="space-y-2">
        <label className="text-xs text-terminal-grey">MARKET CAP</label>
        <div className="space-y-2">
          {marketCapOptions.map(option => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`market-cap-${option.value}`}
                checked={filters.marketCap.includes(option.value)}
                onCheckedChange={() => handleArrayChange('marketCap', option.value)}
              />
              <label
                htmlFor={`market-cap-${option.value}`}
                className="text-terminal-green text-sm cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Sectors */}
      <div className="space-y-2">
        <label className="text-xs text-terminal-grey">SECTORS</label>
        <div className="grid grid-cols-2 gap-2">
          {sectorOptions.map(sector => (
            <div key={sector} className="flex items-center space-x-2">
              <Checkbox
                id={`sector-${sector}`}
                checked={filters.sectors.includes(sector)}
                onCheckedChange={() => handleArrayChange('sectors', sector)}
              />
              <label
                htmlFor={`sector-${sector}`}
                className="text-terminal-green text-sm cursor-pointer"
              >
                {sector}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Volatility */}
      <div className="space-y-2">
        <label className="text-xs text-terminal-grey">VOLATILITY</label>
        <div className="space-y-2">
          {volatilityOptions.map(option => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`volatility-${option.value}`}
                checked={filters.volatility.includes(option.value)}
                onCheckedChange={() => handleArrayChange('volatility', option.value)}
              />
              <label
                htmlFor={`volatility-${option.value}`}
                className="text-terminal-green text-sm cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Dividend Yield */}
      <div className="space-y-2">
        <label className="text-xs text-terminal-grey">DIVIDEND YIELD (%)</label>
        <div className="flex items-center space-x-4">
          <span className="text-terminal-green font-mono">{filters.dividendYield.min}</span>
          <Slider
            min={0}
            max={10}
            step={0.1}
            value={[filters.dividendYield.min, filters.dividendYield.max]}
            onValueChange={([min, max]) => {
              handleRangeChange('dividendYield', 'min', min);
              handleRangeChange('dividendYield', 'max', max);
            }}
            className="flex-1"
          />
          <span className="text-terminal-green font-mono">{filters.dividendYield.max}</span>
        </div>
      </div>

      {/* Date Added */}
      <div className="space-y-2">
        <label className="text-xs text-terminal-grey">DATE ADDED</label>
        <Popover>
          <PopoverTrigger asChild>
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm border border-terminal-green/30 rounded hover:border-terminal-green focus:border-terminal-green focus:outline-none">
              {filters.dateAdded ? (
                format(filters.dateAdded, 'PPP')
              ) : (
                <span className="text-terminal-grey">Pick a date</span>
              )}
              <CalendarIcon className="h-4 w-4 text-terminal-grey" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-black border border-terminal-green/30">
            <Calendar
              mode="single"
              selected={filters.dateAdded || undefined}
              onSelect={(date) =>
                onFiltersChange({
                  ...filters,
                  dateAdded: date
                })
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Reset Button */}
      <button
        onClick={() =>
          onFiltersChange({
            uvScore: { min: 0, max: 10 },
            price: { min: 0, max: 1000 },
            peRatio: { min: 0, max: 100 },
            marketCap: [],
            sectors: [],
            volatility: [],
            dividendYield: { min: 0, max: 10 },
            priceChange: {
              '7d': { min: -100, max: 100 },
              '30d': { min: -100, max: 100 }
            },
            dateAdded: null
          })
        }
        className="w-full mt-6 px-4 py-2 text-sm border border-terminal-red/30 text-terminal-red rounded hover:border-terminal-red focus:border-terminal-red focus:outline-none"
      >
        RESET FILTERS
      </button>
    </div>
  );
}; 