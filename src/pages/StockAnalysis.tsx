import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info, AlertTriangle } from 'lucide-react';

const priceData = [
  { date: '2023-01', marketPrice: 190, intrinsicValue: 180 },
  { date: '2023-02', marketPrice: 220, intrinsicValue: 200 },
  { date: '2023-03', marketPrice: 180, intrinsicValue: 210 },
];

export default function StockAnalysis() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 bg-black/20 border border-terminal-green/30 rounded-lg p-6">
        <div className="mb-4 md:mb-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-mono text-terminal-green font-bold">MSFT</h1>
              <div className="text-terminal-grey text-sm px-2 py-1 border border-terminal-green/30 rounded">
                Technology
              </div>
            </div>
            <h2 className="text-terminal-grey text-xl mt-2">Microsoft Corporation</h2>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="terminal-button h-10 px-6">
            WATCH
          </button>
          <button className="terminal-button h-10 px-6">
            CLOSE
          </button>
        </div>
      </div>

      {/* Company Overview */}
      <div className="mb-8 bg-black/20 border border-terminal-green/30 rounded-lg p-6">
        <h2 className="text-xl font-mono text-terminal-green mb-4 flex items-center gap-2">
          <Info className="h-5 w-5" />
          COMPANY OVERVIEW
        </h2>
        <p className="text-terminal-grey mb-4">
          Microsoft Corporation desarrolla, licencia y vende software, servicios y dispositivos. La 
          compañía ofrece una amplia gama de productos que incluyen sistemas operativos, aplicaciones 
          de oficina, servicios en la nube (Azure), y hardware como la línea Surface y Xbox.
        </p>
        <div className="flex gap-8 text-sm">
          <div>
            <span className="text-terminal-grey">Market Cap: </span>
            <span className="text-terminal-green">$3.1T</span>
          </div>
          <div>
            <span className="text-terminal-grey">Volume: </span>
            <span className="text-terminal-green">22.3M</span>
          </div>
        </div>
      </div>

      {/* Price vs. Intrinsic Value Chart */}
      <div className="mb-8 bg-black/20 border border-terminal-green/30 rounded-lg p-6">
        <h2 className="text-xl font-mono text-terminal-green mb-4">PRICE VS. INTRINSIC VALUE</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 65, 0.1)" />
              <XAxis dataKey="date" stroke="#808080" />
              <YAxis stroke="#808080" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'black',
                  border: '1px solid rgba(0, 255, 65, 0.3)',
                  borderRadius: '4px',
                }}
              />
              <Line
                type="monotone"
                dataKey="marketPrice"
                stroke="#00FF41"
                name="Market Price"
              />
              <Line
                type="monotone"
                dataKey="intrinsicValue"
                stroke="#FFBE00"
                name="Intrinsic Value"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Metrics and Market Sentiment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Key Metrics */}
        <div className="bg-black/20 border border-terminal-green/30 rounded-lg p-6">
          <h2 className="text-xl font-mono text-terminal-green mb-4">KEY METRICS</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-terminal-grey">P/E Ratio</span>
              <span className="text-terminal-green">34.2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-grey">PEG Ratio</span>
              <span className="text-terminal-amber">1.80</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-grey">ROE</span>
              <span className="text-terminal-green">35.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-grey">Gross Margin</span>
              <span className="text-terminal-green">68.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-terminal-grey">Revenue Growth</span>
              <span className="text-terminal-green">18.3%</span>
            </div>
          </div>
        </div>

        {/* Market Sentiment */}
        <div className="bg-black/20 border border-terminal-green/30 rounded-lg p-6">
          <h2 className="text-xl font-mono text-terminal-green mb-4">MARKET SENTIMENT</h2>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-terminal-grey">Analyst Rating</span>
              <span className="text-terminal-green">BUY</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="text-terminal-red">SELL 1</div>
              <div className="flex-1 h-2 bg-black/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-terminal-red via-terminal-amber to-terminal-green"
                  style={{ width: '85%' }}
                />
              </div>
              <div className="text-terminal-green">BUY 28</div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Factors */}
      <div className="bg-black/20 border border-terminal-green/30 rounded-lg p-6">
        <h2 className="text-xl font-mono text-terminal-green mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          RISK FACTORS
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <span className="text-terminal-red">●</span>
            <span className="text-terminal-grey">
              Intensificación de la competencia en servicios cloud con AWS y Google Cloud
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-terminal-amber">●</span>
            <span className="text-terminal-grey">
              Exposición a regulaciones antimonopolio globales
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-terminal-amber">●</span>
            <span className="text-terminal-grey">
              Dependencia de la adopción empresarial de soluciones cloud
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
} 