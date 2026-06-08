# PixelForge Dashboard React

Dashboard desarrollado como proyecto React separado para el Sprint 8.

## Requisitos

Antes de iniciar este dashboard, la aplicación principal debe estar corriendo en:

```txt
http://localhost:3000
```

La app principal expone las APIs:

```txt
GET /api/products
GET /api/products/:id
GET /api/users
GET /api/users/:id
```

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

Luego abrir:

```txt
http://localhost:5173
```

## Estructura

```txt
dashboard-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── services/
    │   └── api.js
    ├── utils/
    │   └── formatters.js
    └── components/
        ├── CategoryPanel.jsx
        ├── ErrorMessage.jsx
        ├── Header.jsx
        ├── LastProductPanel.jsx
        ├── Loading.jsx
        ├── MetricCard.jsx
        └── ProductListPanel.jsx
```

## Componentes

El dashboard está dividido en componentes para evitar concentrar toda la lógica en `App.jsx`.

- `Header`: encabezado del dashboard.
- `MetricCard`: tarjetas de métricas principales.
- `LastProductPanel`: detalle del último producto.
- `CategoryPanel`: productos por categoría.
- `ProductListPanel`: listado de productos.
- `Loading`: estado de carga.
- `ErrorMessage`: mensaje de error.
