# Undervalued Terminal Score

Una aplicación web moderna para análisis financiero y seguimiento de mercados, con un diseño inspirado en terminales financieras profesionales.

## Características Principales

- **Dashboard Responsivo**: Visualización adaptativa de datos financieros con soporte para diferentes tamaños de pantalla
- **Análisis de Mercado**: Herramientas avanzadas para análisis de acciones y mercados
- **Sistema de Alertas**: Notificaciones en tiempo real sobre movimientos del mercado
- **Gestión de Portafolio**: Seguimiento y análisis detallado de inversiones
- **Métricas Dinámicas**: Indicadores clave de rendimiento y análisis técnico
- **Diseño Terminal**: Interfaz moderna inspirada en terminales financieras profesionales

## Tecnologías Utilizadas

- **Frontend**: React + TypeScript
- **Estilizado**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Estado**: Zustand (para gestión de estado)
- **Routing**: React Router
- **Componentes**: Componentes personalizados con diseño responsivo

## Estructura del Proyecto

```
src/
├── components/
│   ├── Analytics/       # Componentes de análisis
│   ├── Dashboard/       # Componentes del dashboard
│   ├── Layout/         # Componentes de estructura
│   └── Auth/           # Componentes de autenticación
├── pages/              # Páginas principales
├── lib/               # Utilidades y configuraciones
└── styles/            # Estilos globales
```

## Instalación y Desarrollo

1. **Clonar el repositorio**:
```bash
git clone https://github.com/valtopia/undervalued-terminal-score.git
cd undervalued-terminal-score
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Iniciar entorno de desarrollo**:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:8080` (o el siguiente puerto disponible).

## Características de Diseño

- **Diseño Responsivo**: Adaptación completa a diferentes tamaños de pantalla
- **Scroll Horizontal**: Implementado en tablas y elementos que lo requieren
- **Paleta de Colores**: Esquema profesional con énfasis en grises y acentos semánticos
- **Componentes Modulares**: Diseño modular para fácil mantenimiento y escalabilidad

## Contribución

Las contribuciones son bienvenidas. Por favor, asegúrate de:

1. Hacer fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
