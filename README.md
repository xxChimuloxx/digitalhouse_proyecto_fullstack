# PixelForge Store - Sprint 5

PixelForge Store es un e-commerce orientado a productos gamer, accesorios tecnológicos y componentes para setup.

## Estado del proyecto

Sprint 5 implementado sobre la base del Sprint 4. El sitio ya cuenta con vistas dinámicas en EJS, CRUD de productos con JSON y flujo funcional de usuarios.

## Funcionalidades principales

- Home dinámica.
- Listado de productos.
- Detalle de producto.
- Carrito visual.
- CRUD de productos con JSON.
- Registro funcional de usuarios.
- Subida de imagen de perfil con Multer.
- Encriptación de contraseña con bcrypt.js.
- Login y logout con sesiones.
- Función opcional de recordar usuario con cookies.
- Página de perfil protegida.
- Middlewares para rutas de huéspedes y usuarios logueados.

## Estructura principal

```txt
src/
├── app.js
├── controllers/
│   ├── mainController.js
│   ├── productController.js
│   └── userController.js
├── data/
│   ├── products.json
│   └── users.json
├── middlewares/
│   ├── authMiddleware.js
│   ├── guestMiddleware.js
│   ├── uploadUserImage.js
│   └── userLoggedMiddleware.js
├── models/
│   ├── productModel.js
│   └── userModel.js
├── routes/
│   ├── mainRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
└── views/
    ├── partials/
    ├── products/
    └── users/
```

## Instalación

```bash
npm install
npm start
```

Luego abrir:

```txt
http://localhost:3000
```

## Rutas de usuarios

```txt
GET     /users/register
POST    /users/register
GET     /users/login
POST    /users/login
GET     /users/profile
POST    /users/logout
```

## Usuarios de prueba

```txt
Email: lucia.gomez@example.com
Password: 123456

Email: admin@pixelforge.com
Password: admin123
```

## Tablero de trabajo

Agregar aquí el enlace al tablero utilizado para organizar el sprint.

```txt
Link del tablero: pendiente de carga
```
