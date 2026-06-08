require('dotenv').config();

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const productApiRoutes = require('./routes/api/productApiRoutes');
const userApiRoutes = require('./routes/api/userApiRoutes');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const db = require('./database/models');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'pixelforge-secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(userLoggedMiddleware);

app.use('/api/products', productApiRoutes);
app.use('/api/users', userApiRoutes);
app.get('/dashboard', (req, res) => {
  res.redirect('http://localhost:5173');
});

app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.use((req, res) => {
  res.status(404).render('notFound', {
    title: 'Página no encontrada',
    active: ''
  });
});

db.sequelize.authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor PixelForge activo en http://localhost:${PORT}`);
      console.log('Base de datos conectada correctamente con Sequelize.');
    });
  })
  .catch(error => {
    console.error('No se pudo conectar a la base de datos.');
    console.error('Revisá database/scripts/structure.sql, data.sql y la configuración en .env');
    console.error(error.message);
  });
