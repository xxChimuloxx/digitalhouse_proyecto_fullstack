const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const { Product, Category, Brand, Color } = require('../database/models');

const includes = [
  { model: Category, as: 'category' },
  { model: Brand, as: 'brand' },
  { model: Color, as: 'colors' }
];

const getFormData = async () => {
  const [categories, brands, colors] = await Promise.all([
    Category.findAll({ order: [['name', 'ASC']] }),
    Brand.findAll({ order: [['name', 'ASC']] }),
    Color.findAll({ order: [['name', 'ASC']] })
  ]);

  return { categories, brands, colors };
};

const normalizeColors = value => Array.isArray(value) ? value : (value ? [value] : []);

const productController = {
  list: async (req, res) => {
    const search = req.query.search || '';
    const where = search ? {
      [Op.or]: [
        { name: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ]
    } : {};

    const products = await Product.findAll({
      where,
      include: includes,
      order: [['id', 'DESC']]
    });

    res.render('products/productList', {
      title: 'Listado de productos',
      active: 'products',
      products,
      search
    });
  },

  detail: async (req, res) => {
    const product = await Product.findByPk(req.params.id, { include: includes });

    if (!product) {
      return res.status(404).render('notFound', { title: 'Producto no encontrado', active: 'products' });
    }

    res.render('products/productDetail', {
      title: product.name,
      active: 'products',
      product
    });
  },

  create: async (req, res) => {
    const formData = await getFormData();
    res.render('products/productCreate', {
      title: 'Crear producto',
      active: 'admin',
      product: null,
      errors: {},
      oldData: {},
      selectedColors: [],
      ...formData
    });
  },

  store: async (req, res) => {
    const errors = validationResult(req);
    const formData = await getFormData();

    if (!errors.isEmpty()) {
      return res.status(400).render('products/productCreate', {
        title: 'Crear producto',
        active: 'admin',
        product: null,
        errors: errors.mapped(),
        oldData: req.body,
        selectedColors: normalizeColors(req.body.colors).map(Number),
        ...formData
      });
    }

    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image || 'product-default.png',
      category_id: req.body.category_id,
      brand_id: req.body.brand_id,
      price: req.body.price,
      featured: req.body.featured === 'on'
    });

    const colorIds = normalizeColors(req.body.colors);
    if (colorIds.length) await product.setColors(colorIds);

    res.redirect(`/products/${product.id}`);
  },

  edit: async (req, res) => {
    const product = await Product.findByPk(req.params.id, { include: [{ model: Color, as: 'colors' }] });

    if (!product) {
      return res.status(404).render('notFound', { title: 'Producto no encontrado', active: 'products' });
    }

    const formData = await getFormData();
    res.render('products/productEdit', {
      title: `Editar ${product.name}`,
      active: 'admin',
      product,
      errors: {},
      oldData: {},
      selectedColors: product.colors.map(color => color.id),
      ...formData
    });
  },

  update: async (req, res) => {
    const product = await Product.findByPk(req.params.id, { include: [{ model: Color, as: 'colors' }] });

    if (!product) {
      return res.status(404).render('notFound', { title: 'Producto no encontrado', active: 'products' });
    }

    const errors = validationResult(req);
    const formData = await getFormData();

    if (!errors.isEmpty()) {
      return res.status(400).render('products/productEdit', {
        title: `Editar ${product.name}`,
        active: 'admin',
        product,
        errors: errors.mapped(),
        oldData: req.body,
        selectedColors: normalizeColors(req.body.colors).map(Number),
        ...formData
      });
    }

    await product.update({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image || 'product-default.png',
      category_id: req.body.category_id,
      brand_id: req.body.brand_id,
      price: req.body.price,
      featured: req.body.featured === 'on'
    });

    const colorIds = normalizeColors(req.body.colors);
    await product.setColors(colorIds);

    res.redirect(`/products/${product.id}`);
  },

  destroy: async (req, res) => {
    const product = await Product.findByPk(req.params.id);

    if (product) {
      await product.destroy();
    }

    res.redirect('/products');
  }
};

module.exports = productController;
