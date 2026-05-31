module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    status: { type: DataTypes.STRING(30), allowNull: false, defaultValue: 'open' },
    total: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0 }
  }, { tableName: 'carts', timestamps: true, underscored: true });

  Cart.associate = models => {
    Cart.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
    Cart.hasMany(models.CartItem, { as: 'items', foreignKey: 'cart_id' });
  };
  return Cart;
};
