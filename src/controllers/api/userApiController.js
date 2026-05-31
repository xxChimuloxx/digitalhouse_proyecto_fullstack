const { User } = require('../../database/models');

const getBaseUrl = req => `${req.protocol}://${req.get('host')}`;

const getPagination = req => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const limit = 10;
  const offset = (page - 1) * limit;
  return { page, limit, offset };
};

const buildPageUrl = (req, page) => {
  const url = new URL(`${getBaseUrl(req)}${req.originalUrl.split('?')[0]}`);
  url.searchParams.set('page', page);
  return url.toString();
};

const userApiController = {
  list: async (req, res) => {
    try {
      const { page, limit, offset } = getPagination(req);
      const { count, rows } = await User.findAndCountAll({
        attributes: ['id', 'firstName', 'lastName', 'email'],
        order: [['id', 'ASC']],
        limit,
        offset
      });

      const totalPages = Math.ceil(count / limit);
      const users = rows.map(user => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        detail: `${getBaseUrl(req)}/api/users/${user.id}`
      }));

      return res.json({
        count,
        page,
        totalPages,
        next: page < totalPages ? buildPageUrl(req, page + 1) : null,
        previous: page > 1 ? buildPageUrl(req, page - 1) : null,
        users
      });
    } catch (error) {
      return res.status(500).json({ error: 'No se pudo obtener el listado de usuarios.' });
    }
  },

  detail: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: ['id', 'firstName', 'lastName', 'email', 'image', 'createdAt', 'updatedAt']
      });

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }

      return res.json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        image: `${getBaseUrl(req)}/images/users/${user.image}`,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      });
    } catch (error) {
      return res.status(500).json({ error: 'No se pudo obtener el detalle del usuario.' });
    }
  }
};

module.exports = userApiController;
