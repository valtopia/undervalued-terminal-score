import React, { useState, useRef, useEffect } from 'react';
import { Plus, X, Save, DollarSign, Edit, Pencil } from 'lucide-react';

// Lista de acciones disponibles
const availableStocks = [
  {
    symbol: 'MSFT',
    company: 'Microsoft Corporation',
    price: 412.73,
    sector: 'Technology'
  },
  {
    symbol: 'GOOGL',
    company: 'Alphabet Inc.',
    price: 175.84,
    sector: 'Technology'
  },
  {
    symbol: 'BRK.B',
    company: 'Berkshire Hathaway Inc.',
    price: 452.18,
    sector: 'Financial'
  },
  {
    symbol: 'JNJ',
    company: 'Johnson & Johnson',
    price: 158.92,
    sector: 'Healthcare'
  },
  {
    symbol: 'V',
    company: 'Visa Inc.',
    price: 284.56,
    sector: 'Financial'
  },
  {
    symbol: 'NVDA',
    company: 'NVIDIA Corporation',
    price: 875.32,
    sector: 'Technology'
  },
  {
    symbol: 'JPM',
    company: 'JPMorgan Chase & Co.',
    price: 183.27,
    sector: 'Financial'
  },
  {
    symbol: 'META',
    company: 'Meta Platforms Inc.',
    price: 505.95,
    sector: 'Technology'
  },
  {
    symbol: 'TSM',
    company: 'Taiwan Semiconductor Manufacturing',
    price: 142.68,
    sector: 'Technology'
  },
  {
    symbol: 'UNH',
    company: 'UnitedHealth Group Inc.',
    price: 492.31,
    sector: 'Healthcare'
  }
];

interface StockEntry {
  symbol: string;
  shares: number;
  purchasePrice: number;
  date: string;
}

interface PortfolioManagerProps {
  onSave: (portfolio: StockEntry[]) => void;
  existingPortfolio?: StockEntry[];
}

export const PortfolioManager: React.FC<PortfolioManagerProps> = ({ onSave, existingPortfolio = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [entries, setEntries] = useState<StockEntry[]>(existingPortfolio);
  const [currentEntry, setCurrentEntry] = useState<StockEntry>({
    symbol: '',
    shares: 0,
    purchasePrice: 0,
    date: new Date().toISOString().split('T')[0]
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredStocks, setFilteredStocks] = useState(availableStocks);
  const suggestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSymbolChange = (value: string) => {
    const upperValue = value.toUpperCase();
    setCurrentEntry({ ...currentEntry, symbol: upperValue });
    
    if (upperValue.length > 0) {
      const filtered = availableStocks.filter(stock => 
        stock.symbol.includes(upperValue) || 
        stock.company.toUpperCase().includes(upperValue)
      );
      setFilteredStocks(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelectStock = (stock: typeof availableStocks[0]) => {
    setCurrentEntry({
      ...currentEntry,
      symbol: stock.symbol,
      purchasePrice: stock.price
    });
    setShowSuggestions(false);
  };

  const handleAddEntry = () => {
    if (currentEntry.symbol && currentEntry.shares > 0 && currentEntry.purchasePrice > 0) {
      if (editingIndex !== null) {
        // Actualizar entrada existente
        const updatedEntries = [...entries];
        updatedEntries[editingIndex] = currentEntry;
        setEntries(updatedEntries);
        setEditingIndex(null);
      } else {
        // Añadir nueva entrada
        setEntries([...entries, currentEntry]);
      }
      setCurrentEntry({
        symbol: '',
        shares: 0,
        purchasePrice: 0,
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  const handleEditEntry = (index: number) => {
    setCurrentEntry(entries[index]);
    setEditingIndex(index);
  };

  const handleRemoveEntry = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(null);
      setCurrentEntry({
        symbol: '',
        shares: 0,
        purchasePrice: 0,
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  const handleSave = () => {
    onSave(entries);
    setIsOpen(false);
  };

  const handleCancel = () => {
    if (editingIndex !== null) {
      setEditingIndex(null);
      setCurrentEntry({
        symbol: '',
        shares: 0,
        purchasePrice: 0,
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-terminal-green/10 text-terminal-green border border-terminal-green/30 rounded hover:bg-terminal-green/20 transition-colors"
      >
        {existingPortfolio.length > 0 ? (
          <>
            <Edit className="w-4 h-4" />
            EDITAR PORTFOLIO
          </>
        ) : (
          <>
            <Plus className="w-4 h-4" />
            CREAR PORTFOLIO
          </>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-terminal-green/30 rounded-lg w-full max-w-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-terminal-green text-xl font-mono">
                {existingPortfolio.length > 0 ? 'EDITAR PORTFOLIO' : 'CREAR PORTFOLIO'}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-terminal-grey hover:text-terminal-green"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Formulario de entrada */}
            <div className="grid grid-cols-4 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="SÍMBOLO"
                  value={currentEntry.symbol}
                  onChange={(e) => handleSymbolChange(e.target.value)}
                  className="w-full bg-black/30 border border-terminal-green/30 rounded px-3 py-2 text-terminal-green placeholder-terminal-green/50"
                />
                {showSuggestions && filteredStocks.length > 0 && (
                  <div 
                    ref={suggestionRef}
                    className="absolute z-10 w-[300px] mt-1 bg-black border border-terminal-green/30 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                  >
                    {filteredStocks.map((stock) => (
                      <div
                        key={stock.symbol}
                        className="p-2 hover:bg-terminal-green/10 cursor-pointer border-b border-terminal-green/10 last:border-0"
                        onClick={() => handleSelectStock(stock)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-terminal-green font-bold">{stock.symbol}</span>
                            <span className="text-terminal-grey ml-2 text-sm">{stock.company}</span>
                          </div>
                          <span className="text-terminal-grey text-sm">${stock.price}</span>
                        </div>
                        <div className="text-terminal-grey/50 text-xs mt-1">{stock.sector}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="ACCIONES"
                  value={currentEntry.shares || ''}
                  onChange={(e) => setCurrentEntry({ ...currentEntry, shares: Number(e.target.value) })}
                  className="w-full bg-black/30 border border-terminal-green/30 rounded px-3 py-2 text-terminal-green placeholder-terminal-green/50"
                />
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="PRECIO (USD)"
                  value={currentEntry.purchasePrice || ''}
                  onChange={(e) => setCurrentEntry({ ...currentEntry, purchasePrice: Number(e.target.value) })}
                  className="w-full bg-black/30 border border-terminal-green/30 rounded pl-7 pr-3 py-2 text-terminal-green placeholder-terminal-green/50"
                />
                <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-green/50" />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleAddEntry}
                  className="flex-1 bg-terminal-green/10 text-terminal-green border border-terminal-green/30 rounded hover:bg-terminal-green/20 transition-colors flex items-center justify-center gap-2"
                >
                  {editingIndex !== null ? (
                    <>
                      <Save className="w-4 h-4" />
                      ACTUALIZAR
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      AÑADIR
                    </>
                  )}
                </button>
                {editingIndex !== null && (
                  <button
                    onClick={handleCancel}
                    className="bg-terminal-red/10 text-terminal-red border border-terminal-red/30 rounded hover:bg-terminal-red/20 transition-colors px-3"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Lista de entradas */}
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {entries.map((entry, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between bg-black/20 border rounded p-3 ${
                    editingIndex === index 
                      ? 'border-terminal-green' 
                      : 'border-terminal-green/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-terminal-green font-bold">{entry.symbol}</span>
                    <span className="text-terminal-grey">{entry.shares} acciones</span>
                    <span className="text-terminal-grey">${entry.purchasePrice}</span>
                    <span className="text-terminal-grey">Total: ${(entry.shares * entry.purchasePrice).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditEntry(index)}
                      className="text-terminal-green/70 hover:text-terminal-green"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleRemoveEntry(index)}
                      className="text-terminal-red/70 hover:text-terminal-red"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen y botón de guardar */}
            <div className="flex items-center justify-between pt-4 border-t border-terminal-green/20">
              <div className="text-terminal-grey">
                Total Portfolio: $
                {entries
                  .reduce((sum, entry) => sum + entry.shares * entry.purchasePrice, 0)
                  .toFixed(2)}
              </div>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-terminal-green/10 text-terminal-green border border-terminal-green/30 rounded hover:bg-terminal-green/20 transition-colors"
              >
                <Save className="w-4 h-4" />
                GUARDAR PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 