# Sprint 5 - Usuarios, login, sesiones y middlewares

## Objetivo del sprint

El objetivo del Sprint 5 fue implementar el flujo completo de usuarios: registro, login, logout, perfil, sesiones, cookies y middlewares de acceso.

## Funcionalidades implementadas

- Registro de usuarios.
- Subida de imagen de perfil con Multer.
- Encriptación de contraseñas con bcrypt.js.
- Guardado de usuarios en JSON.
- Login con validación de credenciales.
- Logout.
- Perfil de usuario.
- Opción de recordar usuario mediante cookies.
- Middleware de usuario logueado.
- Middleware para rutas de huéspedes.
- Middleware para rutas protegidas.

## Estructura destacada

```txt
src/
├── controllers/
│   └── usersController.js
├── data/
│   └── users.json
├── middlewares/
│   ├── authMiddleware.js
│   ├── guestMiddleware.js
│   ├── uploadUserImage.js
│   └── userLoggedMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   └── users.js
└── views/
    └── users/
        ├── register.ejs
        ├── login.ejs
        └── profile.ejs
```

## Paquetes utilizados

- Express Session.
- Cookie Parser.
- Bcrypt.js.
- Multer.

## Rutas principales de usuarios

```txt
GET  /users/register
POST /users/register
GET  /users/login
POST /users/login
GET  /users/profile
GET  /users/logout
```

## Usuarios de prueba

```txt
Email: lucia.gomez@example.com
Password: 123456

Email: admin@pixelforge.com
Password: admin123
```

## Entregables del sprint

- Registro funcional.
- Login funcional.
- Perfil protegido.
- Logout.
- Cookies y sesiones.
- Rutas diferenciadas para huéspedes y usuarios.
- Retrospectiva actualizada.
