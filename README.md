# PixelForge Store

## Descripción del proyecto

PixelForge Store es un e-commerce orientado a la venta de productos gamer, accesorios tecnológicos y componentes para setup. El sitio ofrecerá productos como teclados mecánicos, mouses gamer, auriculares, mousepads, monitores, sillas gamer, notebooks, componentes de PC y accesorios para streaming.

La propuesta busca combinar una experiencia visual moderna con una navegación simple, permitiendo que el usuario pueda explorar productos, consultar sus características principales, agregarlos al carrito y avanzar en el proceso de compra de manera clara e intuitiva.

## Público objetivo

El sitio está dirigido principalmente a jóvenes y adultos interesados en el gaming, la tecnología, el streaming, el home office y el armado de setups personalizados. También apunta a estudiantes, trabajadores remotos y usuarios que buscan mejorar su experiencia digital mediante accesorios de calidad.

## Descripción personal

Mi nombre es Sebastián Fuentes. Soy estudiante de desarrollo Full Stack y me interesa especialmente el desarrollo de soluciones tecnológicas funcionales, visualmente claras y orientadas a resolver necesidades reales de los usuarios.

## Sitios de referencia

1. Mercado Libre: referencia por su estructura de navegación, categorías, publicaciones de productos y carrito de compras.
2. Compra Gamer: referencia directa para productos gamer, componentes de PC y presentación técnica.
3. FullH4rd: referencia para organizar categorías de hardware y mostrar especificaciones relevantes.
4. Maximus Gaming Hardware: referencia estética orientada al público gamer.
5. Amazon: referencia internacional por su experiencia de usuario, detalle de producto y recomendaciones.

## Tablero de trabajo

Tablero de trabajo del proyecto: pendiente de reemplazar por URL real de Trello o GitHub Projects.

## Sprint 3

En esta etapa el proyecto deja de ser una maqueta HTML estática y pasa a una aplicación Node.js con Express y EJS.

### Funcionalidades y estructura implementada

- Servidor Express.
- Motor de templates EJS.
- Vistas renderizadas con `res.render()`.
- Carpeta `views/partials` con componentes reutilizables:
  - `head.ejs`
  - `header.ejs`
  - `footer.ejs`
  - `productCard.ejs`
- Vistas organizadas en carpetas:
  - `src/views/products/`
  - `src/views/users/`
- Home.
- Listado de productos.
- Detalle de producto.
- Carrito de compras.
- Registro.
- Login.
- Creación de producto.
- Edición de producto.

## Instalación y ejecución

```bash
npm install
npm start
```

Luego abrir en el navegador:

```txt
http://localhost:3000
```

## Rutas principales

```txt
/                       Home
/products               Listado de productos
/products/detail/1      Detalle de producto
/cart                   Carrito de compras
/users/register         Registro
/users/login            Login
/products/create        Crear producto
/products/edit/1        Editar producto
```
