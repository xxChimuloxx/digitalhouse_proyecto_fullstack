# Sprint 3 - Node.js, Express y EJS

## Objetivo del sprint

El objetivo del Sprint 3 fue migrar el sitio estático a una aplicación Node.js con Express y EJS, separando componentes repetidos y reutilizando vistas parciales.

## Tecnologías incorporadas

- Node.js.
- Express.js.
- EJS.
- CSS estático servido desde `public`.

## Cambios principales

- Se creó una aplicación Express.
- Se configuró EJS como motor de plantillas.
- Se migraron las páginas HTML a vistas `.ejs`.
- Se separaron las vistas por entidad.
- Se crearon parciales reutilizables.
- Se agregaron rutas y controladores.

## Estructura destacada

```txt
src/
├── app.js
├── controllers/
├── routes/
├── data/
└── views/
    ├── partials/
    │   ├── head.ejs
    │   ├── header.ejs
    │   ├── footer.ejs
    │   └── productCard.ejs
    ├── products/
    │   ├── productList.ejs
    │   ├── productDetail.ejs
    │   ├── productCart.ejs
    │   ├── productCreate.ejs
    │   └── productEdit.ejs
    └── users/
        ├── register.ejs
        └── login.ejs
```

## Rutas principales

```txt
/                       Home
/products               Listado de productos
/products/detail/1      Detalle de producto
/cart                   Carrito
/users/register         Registro
/users/login            Login
/products/create        Crear producto
/products/edit/1        Editar producto
```

## Entregables del sprint

- Aplicación Express funcionando.
- Vistas EJS.
- Parciales `head`, `header` y `footer`.
- Vistas separadas en carpetas `products` y `users`.
- Formularios de creación y edición de productos.
- Retrospectiva actualizada.
