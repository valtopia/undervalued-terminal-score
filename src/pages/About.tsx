import React from 'react';
import { Terminal, Code2, Cpu, LineChart } from 'lucide-react';

export default function About() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-mono text-terminal-green mb-8">ABOUT VALTOPIA</h1>
        
        <div className="space-y-12">
          {/* Mission Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-mono text-terminal-green flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              MISSION
            </h2>
            <p className="text-terminal-grey font-mono leading-relaxed">
              Valtopia nació de una simple pero poderosa idea: democratizar el análisis financiero avanzado. 
              Nuestra misión es proporcionar a inversores de todos los niveles las herramientas y análisis 
              que tradicionalmente solo estaban disponibles para instituciones financieras.
            </p>
          </section>

          {/* Technology Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-mono text-terminal-green flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              TECHNOLOGY
            </h2>
            <p className="text-terminal-grey font-mono leading-relaxed">
              Utilizamos algoritmos de aprendizaje automático y análisis cuantitativo avanzado para evaluar 
              más de 10,000 acciones en tiempo real. Nuestro sistema procesa millones de puntos de datos 
              diariamente para calcular nuestro indicador propietario "Undervalue Score".
            </p>
          </section>

          {/* Methodology Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-mono text-terminal-green flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              METHODOLOGY
            </h2>
            <p className="text-terminal-grey font-mono leading-relaxed">
              El Undervalue Score combina más de 50 métricas financieras diferentes, incluyendo:
            </p>
            <ul className="list-disc list-inside text-terminal-grey font-mono space-y-2 pl-4">
              <li>Análisis fundamental profundo</li>
              <li>Indicadores técnicos avanzados</li>
              <li>Sentimiento del mercado y análisis de noticias</li>
              <li>Métricas de momentum y volatilidad</li>
              <li>Patrones de flujo de capital institucional</li>
            </ul>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-sidebar p-6 rounded-lg">
              <h3 className="text-terminal-green font-mono text-3xl mb-2">10K+</h3>
              <p className="text-terminal-grey font-mono text-sm">Acciones Analizadas</p>
            </div>
            <div className="bg-sidebar p-6 rounded-lg">
              <h3 className="text-terminal-green font-mono text-3xl mb-2">99.9%</h3>
              <p className="text-terminal-grey font-mono text-sm">Tiempo de Actividad</p>
            </div>
            <div className="bg-sidebar p-6 rounded-lg">
              <h3 className="text-terminal-green font-mono text-3xl mb-2">50M+</h3>
              <p className="text-terminal-grey font-mono text-sm">Datos Procesados/Día</p>
            </div>
          </section>

          {/* Performance Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-mono text-terminal-green flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              PERFORMANCE
            </h2>
            <p className="text-terminal-grey font-mono leading-relaxed">
              Las acciones con un Undervalue Score superior a 8.0 han superado consistentemente al S&P 500 
              en un 12.3% anualizado desde nuestro lanzamiento. Nuestro compromiso con la precisión y la 
              transparencia nos ha convertido en la plataforma de confianza para más de 50,000 inversores 
              activos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 