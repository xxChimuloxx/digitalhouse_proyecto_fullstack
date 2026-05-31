const productModel = require('../models/productModel');

const mainController = {
  home: (req, res) => {
    const products = productModel.findAll();

    res.render('index', {
      title: 'PixelForge Store | Home',
      active: 'home',
      products: products.filter(product => product.featured),
      categories: ['Videojuegos', 'PC y componentes', 'Audio', 'Periféricos']
    });
  },

  cart: (req, res) => {
    const products = productModel.findAll();
    const cartProducts = products.slice(0, 3);
    const subtotal = cartProducts.reduce((acc, product) => acc + product.price, 0);

    res.render('products/productCart', {
      title: 'Carrito de compras',
      active: 'cart',
      cartProducts,
      subtotal
    });
  }
};

module.exports = mainController;
