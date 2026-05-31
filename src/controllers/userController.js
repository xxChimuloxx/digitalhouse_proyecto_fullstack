const userController = {
  register: (req, res) => {
    res.render('users/register', {
      title: 'Registro',
      active: 'register'
    });
  },
  login: (req, res) => {
    res.render('users/login', {
      title: 'Login',
      active: 'login'
    });
  }
};

module.exports = userController;
