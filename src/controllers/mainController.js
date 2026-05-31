const { Product, Category, Brand } = require('../database/models');

const mainController = {
  home: async (req, res) => {
    const products = await Product.findAll({
      where: { featured: true },
      include: [
        { model: Category, as: 'category' },
        { model: Brand, as: 'brand' }
      ],
      limit: 4,
      order: [['id', 'ASC']]
    });

    const categories = await Category.findAll({ order: [['name', 'ASC']] });

    res.render('index', {
      title: 'PixelForge Store',
      active: 'home',
      products,
      categories
    });
  },

  cart: async (req, res) => {
    const cartProducts = await Product.findAll({
      include: [{ model: Category, as: 'category' }],
      limit: 2
    });

    const subtotal = cartProducts.reduce((total, product) => total + Number(product.price), 0);

    res.render('products/productCart', {
      title: 'Carrito de compras',
      active: 'cart',
      cartProducts,
      subtotal
    });
  }
};

module.exports = mainController;
