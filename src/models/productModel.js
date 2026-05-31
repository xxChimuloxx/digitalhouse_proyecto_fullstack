const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const productModel = {
  findAll: () => {
    const products = fs.readFileSync(productsFilePath, 'utf-8');
    return JSON.parse(products);
  },

  findById: (id) => {
    const products = productModel.findAll();
    return products.find(product => product.id === Number(id));
  },

  create: (productData) => {
    const products = productModel.findAll();
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: productData.name,
      description: productData.description,
      image: productData.image || 'producto-generico.png',
      category: productData.category,
      colors: productData.colors ? productData.colors.split(',').map(color => color.trim()).filter(Boolean) : [],
      price: Number(productData.price),
      featured: productData.featured === 'on'
    };

    products.push(newProduct);
    productModel.saveAll(products);
    return newProduct;
  },

  update: (id, productData) => {
    const products = productModel.findAll();
    const updatedProducts = products.map(product => {
      if (product.id === Number(id)) {
        return {
          ...product,
          name: productData.name,
          description: productData.description,
          image: productData.image || product.image,
          category: productData.category,
          colors: productData.colors ? productData.colors.split(',').map(color => color.trim()).filter(Boolean) : [],
          price: Number(productData.price),
          featured: productData.featured === 'on'
        };
      }
      return product;
    });

    productModel.saveAll(updatedProducts);
    return productModel.findById(id);
  },

  delete: (id) => {
    const products = productModel.findAll();
    const filteredProducts = products.filter(product => product.id !== Number(id));
    productModel.saveAll(filteredProducts);
  },

  saveAll: (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');
  }
};

module.exports = productModel;
