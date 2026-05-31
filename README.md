# PixelForge Store

## Descripción del proyecto

PixelForge Store es un e-commerce orientado a la venta de productos gamer, accesorios tecnológicos y componentes para setup. El sitio ofrece productos como teclados mecánicos, mouses gamer, auriculares, monitores, sillas gamer, notebooks, componentes de PC y accesorios para streaming.

El proyecto fue desarrollado como parte del Desafío Profesional Full Stack, avanzando de manera progresiva a través de ocho sprints. Durante el proceso se trabajó desde la planificación inicial y los wireframes hasta la implementación de un backend con Node.js, Express, EJS, Sequelize, validaciones, APIs y un dashboard en React.

## Público objetivo

El sitio está dirigido principalmente a jóvenes y adultos interesados en gaming, tecnología, streaming, home office y armado de setups personalizados. También apunta a estudiantes, trabajadores remotos y usuarios que buscan mejorar su experiencia digital mediante accesorios tecnológicos de calidad.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- EJS
- Method Override
- Multer
- Express Session
- Cookie Parser
- Bcrypt.js
- Express Validator
- MySQL
- Sequelize
- React

## Funcionalidades principales

- Home con productos destacados.
- Listado de productos.
- Detalle de producto.
- Carrito de compras.
- Registro de usuarios.
- Login y logout.
- Perfil de usuario.
- Recordar usuario mediante cookies.
- Rutas protegidas para usuarios logueados.
- Rutas exclusivas para huéspedes.
- CRUD completo de productos.
- CRUD básico de usuarios.
- Persistencia inicial en JSON.
- Migración a base de datos MySQL.
- Modelos y relaciones con Sequelize.
- Validaciones back-end y front-end.
- API REST de productos.
- API REST de usuarios.
- Dashboard en React con métricas del sitio.

## Estructura general del proyecto

```txt
DPFS_sebastian_fuentes/
├── database/
│   ├── config/
│   ├── diagram/
│   ├── models/
│   └── scripts/
├── docs/
│   ├── README_sprint1.md
│   ├── README_sprint2.md
│   ├── README_sprint3.md
│   ├── README_sprint4.md
│   ├── README_sprint5.md
│   ├── README_sprint6.md
│   ├── README_sprint7.md
│   └── README_sprint8.md
├── public/
│   ├── css/
│   ├── dashboard/
│   ├── images/
│   └── js/
├── src/
│   ├── app.js
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── validations/
│   └── views/
├── .env.example
├── .gitignore
├── .sequelizerc
├── package.json
├── package-lock.json
├── README.md
├── retro.md
└── daily.md
```

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
cd DPFS_sebastian_fuentes
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copiar el archivo `.env.example` y renombrarlo como `.env`.

```txt
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=pixelforge_store
DB_PORT=3306
```

Ajustar los valores según la configuración local de MySQL/XAMPP.

### 4. Crear y poblar la base de datos

Ejecutar los scripts SQL en el siguiente orden:

```txt
database/scripts/structure.sql
database/scripts/data.sql
```

### 5. Iniciar el servidor

```bash
npm start
```

Luego abrir en el navegador:

```txt
http://localhost:3000
```

## Rutas principales del sitio

```txt
/                         Home
/products                 Listado de productos
/products/:id             Detalle de producto
/products/create          Crear producto
/products/:id/edit        Editar producto
/cart                     Carrito
/users/register           Registro
/users/login              Login
/users/profile            Perfil de usuario
/dashboard                Dashboard React
```

## Endpoints API

### Usuarios

```txt
GET /api/users
GET /api/users/:id
```

### Productos

```txt
GET /api/products
GET /api/products/:id
```

## Usuarios de prueba

```txt
Email: lucia.gomez@example.com
Password: 123456

Email: admin@pixelforge.com
Password: admin123
```

## Documentación por sprint

- [Sprint 1 - Planificación y wireframes](docs/README_sprint1.md)
- [Sprint 2 - Maquetado HTML y CSS](docs/README_sprint2.md)
- [Sprint 3 - Express y EJS](docs/README_sprint3.md)
- [Sprint 4 - CRUD con JSON](docs/README_sprint4.md)
- [Sprint 5 - Usuarios, login y sesiones](docs/README_sprint5.md)
- [Sprint 6 - Base de datos y Sequelize](docs/README_sprint6.md)
- [Sprint 7 - Validaciones](docs/README_sprint7.md)
- [Sprint 8 - APIs y dashboard React](docs/README_sprint8.md)

## Evolución del proyecto

El proyecto se desarrolló de forma incremental, siguiendo una lógica de trabajo por sprints. En las primeras etapas se definió la temática, el público objetivo, los wireframes y la maqueta visual. Luego se migró la estructura estática a una aplicación Express con EJS, se incorporó persistencia con JSON, se implementaron usuarios, sesiones y cookies, y posteriormente se migró la fuente de datos a una base MySQL utilizando Sequelize.

En las etapas finales se agregaron validaciones tanto del lado del servidor como del cliente, se expusieron datos mediante APIs REST y se construyó un dashboard en React para visualizar métricas generales del negocio.

## Estado final

Proyecto finalizado como entrega integral del Desafío Profesional Full Stack.
