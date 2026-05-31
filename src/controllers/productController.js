const productModel = require('../models/productModel');

const productController = {
  list: (req, res) => {
    const products = productModel.findAll();

    res.render('products/productList', {
      title: 'Listado de productos',
      active: 'products',
      products
    });
  },

  detail: (req, res) => {
    const product = productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).render('notFound', {
        title: 'Producto no encontrado',
        active: 'products'
      });
    }

    res.render('products/productDetail', {
      title: product.name,
      active: 'products',
      product
    });
  },

  create: (req, res) => {
    res.render('products/productCreate', {
      title: 'Crear producto',
      active: 'admin'
    });
  },

  store: (req, res) => {
    const newProduct = productModel.create(req.body);
    res.redirect(`/products/${newProduct.id}`);
  },

  edit: (req, res) => {
    const product = productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).render('notFound', {
        title: 'Producto no encontrado',
        active: 'products'
      });
    }

    res.render('products/productEdit', {
      title: `Editar ${product.name}`,
      active: 'admin',
      product
    });
  },

  update: (req, res) => {
    productModel.update(req.params.id, req.body);
    res.redirect(`/products/${req.params.id}`);
  },

  destroy: (req, res) => {
    productModel.delete(req.params.id);
    res.redirect('/products');
  }
};

module.exports = productController;
