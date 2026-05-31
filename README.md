# PixelForge Store - Sprint 7

Proyecto e-commerce desarrollado para el Desafío Profesional Full Stack.

En este sprint se agregan validaciones de back-end y front-end sobre la base del Sprint 6, que ya trabajaba con Node.js, Express, EJS, Sequelize y MySQL.

## Funcionalidades principales

- Home dinámica.
- Listado de productos.
- Detalle de producto.
- Carrito visual.
- CRUD de productos con Sequelize.
- CRUD básico de usuarios con Sequelize.
- Registro de usuarios con imagen de perfil.
- Login, logout, sesión y cookie de recordarme.
- Rutas protegidas para usuarios logueados.
- Rutas de huéspedes para login y registro.
- Validaciones de back-end con Express Validator.
- Validaciones de front-end con JavaScript custom.

## Validaciones implementadas

### Registro de usuarios

Back-end y front-end validan:

- Nombre obligatorio y mínimo 2 caracteres.
- Apellido obligatorio y mínimo 2 caracteres.
- Email obligatorio y formato válido.
- Email no repetido en base de datos.
- Contraseña obligatoria y mínimo 8 caracteres.
- Confirmación de contraseña coincidente.
- Imagen válida: JPG, JPEG, PNG o GIF.

### Login de usuarios

Back-end y front-end validan:

- Email obligatorio.
- Email con formato válido.
- Email existente en base de datos.
- Contraseña obligatoria.
- Contraseña coincidente con la almacenada.

### Creación y edición de productos

Back-end y front-end validan:

- Nombre obligatorio y mínimo 5 caracteres.
- Descripción obligatoria y mínimo 20 caracteres.
- Imagen válida: JPG, JPEG, PNG o GIF.
- Categoría existente en base.
- Marca existente en base.
- Colores existentes en base.
- Precio obligatorio y mayor a cero.

## Estructura relevante

```txt
src/
├── controllers/
├── database/models/
├── middlewares/
├── routes/
├── validations/
│   ├── productValidations.js
│   └── userValidations.js
└── views/

public/
├── css/styles.css
└── js/
    ├── productValidation.js
    └── userValidation.js
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

## Usuarios de prueba

```txt
lucia.gomez@example.com / 123456
admin@pixelforge.com / admin123
```

## Tablero de trabajo

Tablero sugerido: GitHub Projects o Trello, con columnas Backlog, To Do, In Progress, Testing y Done.
