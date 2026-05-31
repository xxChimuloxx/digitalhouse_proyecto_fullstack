# PixelForge Store - Sprint 6

PixelForge Store es un e-commerce de productos gamer y accesorios tecnológicos desarrollado como desafío profesional Full Stack.

## Sprint 6

En esta iteración se deja atrás la persistencia basada en archivos JSON y se incorpora una base de datos relacional con MySQL y Sequelize.

## Entregables incluidos

- Diagrama de entidad-relación en PDF.
- Script `structure.sql` para crear la base de datos completa.
- Script `data.sql` para poblar la base con datos iniciales.
- Carpeta `database` con configuración y modelos de Sequelize.
- CRUD de productos usando Sequelize.
- CRUD básico de usuarios usando Sequelize.
- Buscador de productos.
- Relaciones entre productos, categorías, marcas y colores.

## Estructura principal

```txt
DPFS_sebastian_fuentes_sprint6/
├── database/
│   ├── config/
│   ├── diagram/
│   ├── models/
│   └── scripts/
├── public/
├── src/
│   ├── controllers/
│   ├── database/models/
│   ├── middlewares/
│   ├── routes/
│   └── views/
├── .env.example
├── package.json
├── README.md
└── retro.md
```

## Configuración de base de datos

1. Crear la base ejecutando:

```sql
source database/scripts/structure.sql;
```

2. Cargar datos iniciales:

```sql
source database/scripts/data.sql;
```

También se pueden ejecutar ambos archivos desde phpMyAdmin o MySQL Workbench.

## Variables de entorno

Copiar `.env.example` como `.env` y ajustar los datos según el entorno local:

```env
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=pixelforge_store
DB_HOST=127.0.0.1
DB_DIALECT=mysql
PORT=3000
SESSION_SECRET=pixelforge-secret-key
```

## Instalación y ejecución

```bash
npm install
npm start
```

Luego abrir:

```txt
http://localhost:3000
```

## Usuarios de prueba

```txt
Email: lucia.gomez@example.com
Password: 123456

Email: admin@pixelforge.com
Password: admin123
```

## Rutas principales

```txt
GET     /products
GET     /products?search=teclado
GET     /products/create
POST    /products
GET     /products/:id
GET     /products/:id/edit
PUT     /products/:id
DELETE  /products/:id

GET     /users
GET     /users/:id
GET     /users/:id/edit
PUT     /users/:id
GET     /users/register
POST    /users/register
GET     /users/login
POST    /users/login
GET     /users/profile
POST    /users/logout
```

## Tablero de trabajo

El tablero de trabajo se mantiene actualizado para organizar las tareas del sprint, incluyendo diseño de base de datos, scripts SQL, configuración Sequelize, modelos, relaciones y actualización de CRUDs.
