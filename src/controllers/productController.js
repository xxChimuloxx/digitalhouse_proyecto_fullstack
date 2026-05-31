const products = require('../data/products');

const productController = {
  list: (req, res) => {
    res.render('products/productList', {
      title: 'Listado de productos',
      active: 'products',
      products
    });
  },
  detail: (req, res) => {
    const product = products.find(item => item.id === Number(req.params.id)) || products[0];

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
  edit: (req, res) => {
    const product = products.find(item => item.id === Number(req.params.id)) || products[0];

    res.render('products/productEdit', {
      title: `Editar ${product.name}`,
      active: 'admin',
      product
    });
  }
};

module.exports = productController;
