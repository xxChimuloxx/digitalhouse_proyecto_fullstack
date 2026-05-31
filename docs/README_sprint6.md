# Sprint 6 - Base de datos y Sequelize

## Objetivo del sprint

El objetivo del Sprint 6 fue dejar atrás la persistencia en JSON y migrar el proyecto a una base de datos relacional utilizando MySQL y Sequelize.

## Base de datos

Se diseñó una base de datos para representar las entidades principales del e-commerce.

Entidades principales:

- Usuarios.
- Productos.
- Categorías.
- Marcas.
- Colores.
- Relación productos-colores.

## Entregables de base de datos

```txt
database/
├── config/
├── diagram/
│   └── DER_pixelforge_store.pdf
├── models/
└── scripts/
    ├── structure.sql
    └── data.sql
```

## Scripts SQL

### `structure.sql`

Incluye creación de base de datos, tablas, campos, primary keys, foreign keys, restricciones y relaciones.

### `data.sql`

Incluye datos iniciales para usuarios, categorías, marcas, colores, productos y relaciones entre productos y colores.

## Sequelize

Se incorporaron modelos Sequelize para representar las tablas de la base de datos y sus relaciones.

## Funcionalidades migradas

- Listado de productos desde base de datos.
- Detalle de producto desde base de datos.
- Creación de productos.
- Edición de productos.
- Eliminación de productos.
- Gestión básica de usuarios.

## Entregables del sprint

- DER en PDF.
- Script `structure.sql`.
- Script `data.sql`.
- Carpeta `database`.
- Configuración de Sequelize.
- Modelos y relaciones.
- CRUD de productos usando base de datos.
- CRUD de usuarios usando base de datos.
