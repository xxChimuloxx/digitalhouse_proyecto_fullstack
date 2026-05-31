# Sprint 8 - APIs y dashboard React

## Objetivo del sprint

El objetivo del Sprint 8 fue cerrar el proyecto incorporando una API REST para usuarios y productos, y un dashboard desarrollado en React que consuma esos datos.

## API de usuarios

Endpoints implementados:

```txt
GET /api/users
GET /api/users/:id
```

### `GET /api/users`

Devuelve cantidad total de usuarios, listado de usuarios, ID, nombre, email y URL de detalle.

### `GET /api/users/:id`

Devuelve los datos del usuario y la URL de imagen de perfil, sin exponer información sensible como password.

## API de productos

Endpoints implementados:

```txt
GET /api/products
GET /api/products/:id
```

### `GET /api/products`

Devuelve cantidad total de productos, cantidad de productos por categoría, listado de productos, ID, nombre, descripción, categoría y URL de detalle.

### `GET /api/products/:id`

Devuelve los datos completos del producto, categoría, marca, colores y URL de imagen del producto.

## Dashboard React

Se creó un dashboard en React disponible en:

```txt
/dashboard
```

## Paneles del dashboard

- Total de productos.
- Total de usuarios.
- Total de categorías.
- Último producto creado.
- Productos por categoría.
- Listado de productos.

## Estructura agregada

```txt
src/controllers/api/
├── productApiController.js
└── userApiController.js

src/routes/api/
├── productApiRoutes.js
└── userApiRoutes.js

public/dashboard/
├── index.html
├── app.jsx
└── styles.css
```

## Entregables del sprint

- API de usuarios.
- API de productos.
- Dashboard React.
- Paneles de métricas.
- Listado de productos consumido desde API.
- Cierre del proyecto Full Stack.
