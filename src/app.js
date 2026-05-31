const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));

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
