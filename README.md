# PixelForge Store

PixelForge Store es un e-commerce orientado a la venta de productos gamer, accesorios tecnológicos y componentes para setup. El sitio ofrece productos como teclados mecánicos, mouses gamer, auriculares, monitores, sillas gamer, notebooks, componentes de PC y accesorios para streaming.

## Público objetivo

El sitio está dirigido a jóvenes y adultos interesados en gaming, tecnología, streaming, estudio, home office y armado de setups personalizados.

## Sprint 4

En este sprint el proyecto incorpora persistencia básica mediante archivos JSON y administración completa de productos.

### Funcionalidades incorporadas

- Lectura dinámica de productos desde `src/data/products.json`.
- Archivo `src/data/users.json` con usuarios mockeados.
- Listado de productos.
- Detalle de producto.
- Creación de productos.
- Edición de productos.
- Eliminación de productos.
- Uso de rutas HTTP `GET`, `POST`, `PUT` y `DELETE` mediante `method-override`.

## Instalación y ejecución

```bash
npm install
npm start
```

Luego abrir:

```txt
http://localhost:3000
```

## Rutas principales

```txt
/                       Home
/products               Listado de productos
/products/create        Formulario de creación
/products/:id           Detalle de producto
/products/:id/edit      Formulario de edición
/cart                   Carrito
/users/register         Registro
/users/login            Login
```

## Estructura del proyecto

```txt
DPFS_sebastian_fuentes/
├── package.json
├── README.md
├── retro.md
├── public/
│   └── css/
└── src/
    ├── app.js
    ├── controllers/
    ├── data/
    │   ├── products.json
    │   └── users.json
    ├── models/
    │   └── productModel.js
    ├── routes/
    └── views/
```

## Tablero de trabajo

Pendiente de incorporar enlace al tablero utilizado para el seguimiento del sprint.
