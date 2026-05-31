# Sprint 4 - CRUD de productos con JSON

## Objetivo del sprint

El objetivo del Sprint 4 fue incorporar datos reales mediante archivos JSON y permitir la administración completa de productos.

## Fuente de datos

```txt
src/data/
├── products.json
└── users.json
```

## Modelo de productos

Campos principales:

- id
- name
- description
- image
- category
- colors
- price

## CRUD de productos

Se implementaron las operaciones principales:

- Listar productos.
- Ver detalle de producto.
- Crear producto.
- Editar producto.
- Eliminar producto.

## Rutas implementadas

```txt
GET     /products
GET     /products/create
GET     /products/:id
POST    /products
GET     /products/:id/edit
PUT     /products/:id
DELETE  /products/:id
```

## Paquetes utilizados

- Express.
- EJS.
- Method Override.

## Entregables del sprint

- Archivo `products.json`.
- Archivo `users.json`.
- CRUD funcional de productos.
- Rutas, controladores, modelos y vistas necesarios.
- Retrospectiva actualizada.
