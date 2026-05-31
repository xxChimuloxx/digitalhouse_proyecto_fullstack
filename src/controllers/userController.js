const bcrypt = require('bcryptjs');
const { User } = require('../database/models');

const safeUser = user => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  category: user.category,
  image: user.image
});

const userController = {
  register: (req, res) => {
    res.render('users/register', {
      title: 'Registro',
      active: 'register',
      error: null,
      oldData: {}
    });
  },

  store: async (req, res) => {
    const existingUser = await User.findOne({ where: { email: req.body.email } });

    if (existingUser) {
      return res.render('users/register', {
        title: 'Registro',
        active: 'register',
        error: 'Ya existe un usuario registrado con ese email.',
        oldData: req.body
      });
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.render('users/register', {
        title: 'Registro',
        active: 'register',
        error: 'Las contraseñas no coinciden.',
        oldData: req.body
      });
    }

    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      category: 'customer',
      image: req.file ? req.file.filename : 'default-user.png'
    });

    req.session.userLogged = safeUser(user);
    res.redirect('/users/profile');
  },

  login: (req, res) => {
    res.render('users/login', {
      title: 'Login',
      active: 'login',
      error: null
    });
  },

  processLogin: async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      return res.render('users/login', {
        title: 'Login',
        active: 'login',
        error: 'Email o contraseña incorrectos.'
      });
    }

    req.session.userLogged = safeUser(user);

    if (req.body.remember) {
      res.cookie('userEmail', user.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
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

  list: async (req, res) => {
    const users = await User.findAll({ order: [['id', 'ASC']] });
    res.render('users/userList', {
      title: 'Usuarios',
      active: 'users',
      users
    });
  },

  detail: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).render('notFound', { title: 'Usuario no encontrado', active: 'users' });
    }
    res.render('users/userDetail', {
      title: `${user.firstName} ${user.lastName}`,
      active: 'users',
      user
    });
  },

  edit: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).render('notFound', { title: 'Usuario no encontrado', active: 'users' });
    }
    res.render('users/userEdit', {
      title: `Editar ${user.firstName}`,
      active: 'users',
      user,
      error: null
    });
  },

  update: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).render('notFound', { title: 'Usuario no encontrado', active: 'users' });
    }

    await user.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      category: req.body.category || user.category,
      image: req.file ? req.file.filename : user.image
    });

    if (req.session.userLogged && req.session.userLogged.id === user.id) {
      req.session.userLogged = safeUser(user);
    }

    res.redirect(`/users/${user.id}`);
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('userEmail');
    res.redirect('/');
  }
};

module.exports = userController;
