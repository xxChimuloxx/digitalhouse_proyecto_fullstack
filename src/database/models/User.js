module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING(80), allowNull: false, field: 'first_name' },
    lastName: { type: DataTypes.STRING(80), allowNull: false, field: 'last_name' },
    email: { type: DataTypes.STRING(120), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    category: { type: DataTypes.STRING(50), allowNull: false, defaultValue: 'customer' },
    image: { type: DataTypes.STRING(255), allowNull: false, defaultValue: 'default-user.png' }
  }, { tableName: 'users', timestamps: true, underscored: true });

  User.associate = models => {
    User.hasMany(models.Cart, { as: 'carts', foreignKey: 'user_id' });
  };
  return User;
};
