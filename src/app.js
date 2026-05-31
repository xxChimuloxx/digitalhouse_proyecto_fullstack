const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: 'pixelforge-secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(userLoggedMiddleware);

app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.use((req, res) => {
  res.status(404).render('notFound', {
    title: 'Página no encontrada',
    active: ''
  });
});

app.listen(PORT, () => {
  console.log(`Servidor PixelForge activo en http://localhost:${PORT}`);
});
