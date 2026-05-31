const { User } = require('../database/models');

module.exports = async (req, res, next) => {
  res.locals.userLogged = req.session.userLogged || null;

  if (!req.session.userLogged && req.cookies.userEmail) {
    const user = await User.findOne({ where: { email: req.cookies.userEmail } });

    if (user) {
      req.session.userLogged = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        category: user.category,
        image: user.image
      };
      res.locals.userLogged = req.session.userLogged;
    }
  }

  next();
};
