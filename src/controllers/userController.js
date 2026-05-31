const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

const userController = {
  register: (req, res) => {
    res.render('users/register', {
      title: 'Registro',
      active: 'register',
      errors: {},
      oldData: {}
    });
  },

  processRegister: (req, res) => {
    const { firstName, lastName, email, password, category } = req.body;
    const errors = {};

    if (!firstName || firstName.trim().length < 2) errors.firstName = 'Ingresá un nombre válido.';
    if (!lastName || lastName.trim().length < 2) errors.lastName = 'Ingresá un apellido válido.';
    if (!email || !email.includes('@')) errors.email = 'Ingresá un email válido.';
    if (!password || password.length < 6) errors.password = 'La contraseña debe tener al menos 6 caracteres.';

    const existingUser = userModel.findByEmail(email || '');
    if (existingUser) errors.email = 'Ya existe un usuario registrado con ese email.';

    if (Object.keys(errors).length > 0) {
      return res.render('users/register', {
        title: 'Registro',
        active: 'register',
        errors,
        oldData: req.body
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = userModel.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: hashedPassword,
      category: category || 'customer',
      image: req.file ? req.file.filename : 'default-user.png'
    });

    req.session.userLogged = userModel.publicData(newUser);
    res.redirect('/users/profile');
  },

  login: (req, res) => {
    res.render('users/login', {
      title: 'Login',
      active: 'login',
      errors: {},
      oldData: {}
    });
  },

  processLogin: (req, res) => {
    const { email, password, remember } = req.body;
    const errors = {};
    const userToLogin = userModel.findByEmail(email || '');

    if (!userToLogin || !bcrypt.compareSync(password || '', userToLogin.password)) {
      errors.login = 'Las credenciales ingresadas no son correctas.';
      return res.render('users/login', {
        title: 'Login',
        active: 'login',
        errors,
        oldData: req.body
      });
    }

    req.session.userLogged = userModel.publicData(userToLogin);

    if (remember) {
      res.cookie('userEmail', userToLogin.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
    }

    res.redirect('/users/profile');
  },

  profile: (req, res) => {
    res.render('users/profile', {
      title: 'Mi perfil',
      active: 'profile',
      user: req.session.userLogged
    });
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy(() => {
      res.redirect('/');
    });
  }
};

module.exports = userController;
