export const terminalColors = {
  // Colores base con estética retro
  neutral: 'rgb(0, 255, 127)', // Verde terminal clásico
  muted: 'rgba(0, 255, 127, 0.5)', // Verde terminal atenuado

  // Indicadores de estado
  healthy: 'rgb(50, 205, 50)', // Verde brillante para valores saludables
  warning: 'rgb(255, 204, 0)', // Amarillo para advertencias
  critical: 'rgb(255, 69, 0)', // Rojo-naranja para estados críticos
  error: 'rgb(255, 0, 0)', // Rojo puro para errores

  // Indicadores de rendimiento
  performance: {
    excellent: 'rgb(0, 255, 127)', // Verde brillante > 90%
    good: 'rgb(50, 205, 50)', // Verde normal 70-90%
    average: 'rgb(255, 204, 0)', // Amarillo 50-70%
    poor: 'rgb(255, 69, 0)', // Naranja-rojo 30-50%
    critical: 'rgb(255, 0, 0)', // Rojo < 30%
  },

  // Indicadores de tendencia
  trend: {
    positive: 'rgb(50, 205, 50)', // Verde para tendencias positivas
    neutral: 'rgb(0, 255, 127)', // Verde terminal para neutral
    negative: 'rgb(255, 69, 0)', // Rojo-naranja para tendencias negativas
  },

  // Fondos con opacidad
  background: {
    healthy: 'rgba(50, 205, 50, 0.1)',
    warning: 'rgba(255, 204, 0, 0.1)',
    critical: 'rgba(255, 69, 0, 0.1)',
    neutral: 'rgba(0, 255, 127, 0.1)',
  },

  // Efectos de brillo
  glow: {
    healthy: '0 0 10px rgba(50, 205, 50, 0.5)',
    warning: '0 0 10px rgba(255, 204, 0, 0.5)',
    critical: '0 0 10px rgba(255, 69, 0, 0.5)',
    neutral: '0 0 10px rgba(0, 255, 127, 0.5)',
  }
}; 