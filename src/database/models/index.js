const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../../database/config/config').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = require('./Category')(sequelize, DataTypes);
db.Brand = require('./Brand')(sequelize, DataTypes);
db.Color = require('./Color')(sequelize, DataTypes);
db.Product = require('./Product')(sequelize, DataTypes);
db.User = require('./User')(sequelize, DataTypes);
db.Cart = require('./Cart')(sequelize, DataTypes);
db.CartItem = require('./CartItem')(sequelize, DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName] && db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
