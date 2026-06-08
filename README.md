# PixelForge Store - Sprint 8 corregido

## Descripción

PixelForge Store es un e-commerce de productos gamer y accesorios tecnológicos desarrollado como proyecto Full Stack. En este Sprint 8 se incorporan endpoints API para usuarios y productos, y se agrega un dashboard desarrollado como **proyecto React separado**.

## Corrección aplicada sobre Sprint 8

El dashboard ya no está dentro de `public/dashboard` ni concentra todo en un único `app.jsx`.

Ahora se encuentra en un directorio independiente:

```txt
dashboard-react/
```

El dashboard fue creado como proyecto React separado con Vite y sus partes fueron separadas en componentes.

## Estructura principal

```txt
DPFS_sebastian_fuentes_sprint8_corregido/
├── database/
│   ├── config/
│   ├── diagram/
│   ├── models/
│   └── scripts/
├── dashboard-react/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── services/
│       │   └── api.js
│       ├── utils/
│       │   └── formatters.js
│       └── components/
│           ├── CategoryPanel.jsx
│           ├── ErrorMessage.jsx
│           ├── Header.jsx
│           ├── LastProductPanel.jsx
│           ├── Loading.jsx
│           ├── MetricCard.jsx
│           └── ProductListPanel.jsx
├── public/
├── src/
│   ├── app.js
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── routes/
│   ├── validations/
│   └── views/
├── .env.example
├── .sequelizerc
├── package.json
└── README.md
```

## Instalación de la aplicación principal

Desde la raíz del proyecto:

```bash
npm install
```

Configurar `.env` tomando como base `.env.example`.

Luego crear y poblar la base ejecutando los scripts SQL:

```txt
database/scripts/structure.sql
database/scripts/data.sql
```

Iniciar el servidor Express:

```bash
npm start
```

La aplicación principal queda disponible en:

```txt
http://localhost:3000
```

## Endpoints API

### Usuarios

```txt
GET /api/users
GET /api/users/:id
```

### Productos

```txt
GET /api/products
GET /api/products/:id
```

## Instalación del dashboard React

En otra terminal, ingresar al proyecto React separado:

```bash
cd dashboard-react
npm install
npm run dev
```

El dashboard queda disponible en:

```txt
http://localhost:5173
```

## Componentes del dashboard

El dashboard está dividido en componentes para evitar concentrar toda la lógica dentro de `App.jsx`.

```txt
src/components/
├── CategoryPanel.jsx
├── ErrorMessage.jsx
├── Header.jsx
├── LastProductPanel.jsx
├── Loading.jsx
├── MetricCard.jsx
└── ProductListPanel.jsx
```

## Paneles incluidos

- Total de productos.
- Total de usuarios.
- Total de categorías.
- Último producto creado.
- Productos por categoría.
- Listado de productos.

## Usuarios de prueba

```txt
Email: lucia.gomez@example.com
Password: 123456

Email: admin@pixelforge.com
Password: admin123
```

## Notas de entrega

Para probar el Sprint 8 corregido deben estar activos al mismo tiempo:

1. Servidor Express en `http://localhost:3000`.
2. Dashboard React en `http://localhost:5173`.

No subir `node_modules/` al repositorio.
