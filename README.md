# PixelForge Store - Sprint 8

Proyecto e-commerce desarrollado para el Desafío Profesional Full Stack.

En este sprint final se agregan endpoints API para usuarios y productos, más un dashboard desarrollado con React que consume esas APIs y muestra métricas generales del negocio.

## Funcionalidades principales acumuladas

- Home dinámica.
- Listado de productos.
- Detalle de producto.
- Carrito visual.
- CRUD de productos con Sequelize y MySQL.
- CRUD básico de usuarios con Sequelize y MySQL.
- Registro de usuarios con imagen de perfil.
- Login, logout, sesión y cookie de recordarme.
- Rutas protegidas para usuarios logueados.
- Rutas de huéspedes para login y registro.
- Validaciones de back-end con Express Validator.
- Validaciones de front-end con JavaScript custom.
- API REST de usuarios.
- API REST de productos.
- Dashboard React consumiendo datos de la API.

## Endpoints API

### Usuarios

```txt
GET /api/users
GET /api/users/:id
```

`/api/users` devuelve:

- `count`: cantidad total de usuarios.
- `users`: colección de usuarios con `id`, `name`, `email` y `detail`.
- `next` y `previous` para paginado opcional.

`/api/users/:id` devuelve el detalle del usuario sin datos sensibles como contraseña o categoría.

### Productos

```txt
GET /api/products
GET /api/products/:id
```

`/api/products` devuelve:

- `count`: cantidad total de productos.
- `countByCategory`: cantidad de productos por categoría.
- `products`: colección de productos con `id`, `name`, `description`, relaciones principales y `detail`.
- `next` y `previous` para paginado opcional.

`/api/products/:id` devuelve el detalle del producto, relaciones e imagen.

## Dashboard React

El dashboard se encuentra en:

```txt
http://localhost:3000/dashboard
```

Incluye:

- Total de productos.
- Total de usuarios.
- Total de categorías.
- Panel de último producto creado.
- Panel de categorías con cantidad de productos.
- Listado de productos.

## Estructura relevante

```txt
src/
├── controllers/
│   └── api/
│       ├── productApiController.js
│       └── userApiController.js
├── database/models/
├── middlewares/
├── routes/
│   └── api/
│       ├── productApiRoutes.js
│       └── userApiRoutes.js
├── validations/
└── views/

public/
├── css/styles.css
├── js/
└── dashboard/
    ├── index.html
    ├── app.jsx
    └── styles.css
```

## Instalación

```bash
npm install
```

## Base de datos

Primero ejecutar los scripts SQL en MySQL:

```txt
database/scripts/structure.sql
database/scripts/data.sql
```

Luego copiar `.env.example` como `.env` y ajustar usuario, contraseña y nombre de la base si fuera necesario.

## Ejecución

```bash
npm start
```

Abrir en el navegador:

```txt
http://localhost:3000
```

Dashboard:

```txt
http://localhost:3000/dashboard
```

## Usuarios de prueba

```txt
lucia.gomez@example.com / 123456
admin@pixelforge.com / admin123
```

## Tablero de trabajo

Tablero sugerido: GitHub Projects o Trello, con columnas Backlog, To Do, In Progress, Testing y Done.
