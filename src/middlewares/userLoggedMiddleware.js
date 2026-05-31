const userModel = require('../models/userModel');

function userLoggedMiddleware(req, res, next) {
  res.locals.userLogged = null;

  if (req.cookies && req.cookies.userEmail && !req.session.userLogged) {
    const userFromCookie = userModel.findByEmail(req.cookies.userEmail);
    if (userFromCookie) {
      req.session.userLogged = userModel.publicData(userFromCookie);
    }
  }

  if (req.session && req.session.userLogged) {
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;
