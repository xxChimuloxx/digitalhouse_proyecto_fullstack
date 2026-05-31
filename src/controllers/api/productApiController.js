const { Op } = require('sequelize');
const { Product, Category, Brand, Color } = require('../../database/models');

const getBaseUrl = req => `${req.protocol}://${req.get('host')}`;

const includes = [
  { model: Category, as: 'category', attributes: ['id', 'name'] },
  { model: Brand, as: 'brand', attributes: ['id', 'name'] },
  { model: Color, as: 'colors', attributes: ['id', 'name'], through: { attributes: [] } }
];

const getPagination = req => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = 10;
  const offset = (page - 1) * limit;
  return { page, limit, offset };
};

const buildPageUrl = (req, page) => {
  const url = new URL(`${getBaseUrl(req)}${req.originalUrl.split('?')[0]}`);
  url.searchParams.set('page', page);
  if (req.query.search) url.searchParams.set('search', req.query.search);
  return url.toString();
};

const getCountByCategory = async () => {
  const categories = await Category.findAll({
    include: [{ model: Product, as: 'products', attributes: ['id'] }],
    order: [['name', 'ASC']]
  });

  return categories.reduce((result, category) => {
    result[category.name] = category.products.length;
    return result;
  }, {});
};

const productApiController = {
  list: async (req, res) => {
    try {
      const { page, limit, offset } = getPagination(req);
      const search = req.query.search || '';
      const where = search ? {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { description: { [Op.like]: `%${search}%` } }
        ]
      } : {};

      const [countByCategory, result] = await Promise.all([
        getCountByCategory(),
        Product.findAndCountAll({
          where,
          include: includes,
          distinct: true,
          order: [['id', 'DESC']],
          limit,
          offset
        })
      ]);

      const totalPages = Math.ceil(result.count / limit);
      const products = result.rows.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: Number(product.price),
        category: product.category ? { id: product.category.id, name: product.category.name } : null,
        brand: product.brand ? { id: product.brand.id, name: product.brand.name } : null,
        colors: product.colors.map(color => ({ id: color.id, name: color.name })),
        detail: `${getBaseUrl(req)}/api/products/${product.id}`
      }));

      return res.json({
        count: result.count,
        countByCategory,
        page,
        totalPages,
        next: page < totalPages ? buildPageUrl(req, page + 1) : null,
        previous: page > 1 ? buildPageUrl(req, page - 1) : null,
        products
      });
    } catch (error) {
      return res.status(500).json({ error: 'No se pudo obtener el listado de productos.' });
    }
  },

  detail: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id, { include: includes });

      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
      }

      return res.json({
        id: product.id,
        name: product.name,
        description: product.description,
        image: `${getBaseUrl(req)}/images/products/${product.image}`,
        price: Number(product.price),
        featured: product.featured,
        category: product.category ? { id: product.category.id, name: product.category.name } : null,
        brand: product.brand ? { id: product.brand.id, name: product.brand.name } : null,
        colors: product.colors.map(color => ({ id: color.id, name: color.name })),
        createdAt: product.createdAt,
        updatedAt: product.updatedAt
      });
    } catch (error) {
      return res.status(500).json({ error: 'No se pudo obtener el detalle del producto.' });
    }
  }
};

module.exports = productApiController;
