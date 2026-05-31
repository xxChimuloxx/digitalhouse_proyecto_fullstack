const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const userModel = {
  findAll: () => {
    const usersJson = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(usersJson);
  },

  saveAll: (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  },

  findById: (id) => {
    const users = userModel.findAll();
    return users.find(user => Number(user.id) === Number(id));
  },

  findByEmail: (email) => {
    const users = userModel.findAll();
    return users.find(user => user.email.toLowerCase() === String(email).toLowerCase());
  },

  create: (userData) => {
    const users = userModel.findAll();
    const newUser = {
      id: users.length ? Math.max(...users.map(user => Number(user.id))) + 1 : 1,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      category: userData.category || 'customer',
      image: userData.image || 'default-user.png'
    };

    users.push(newUser);
    userModel.saveAll(users);
    return newUser;
  },

  publicData: (user) => {
    if (!user) return null;
    const { password, ...safeUser } = user;
    return safeUser;
  }
};

module.exports = userModel;
