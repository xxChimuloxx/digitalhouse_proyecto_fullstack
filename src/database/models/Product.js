module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(150), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING(255), allowNull: false, defaultValue: 'product-default.png' },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    featured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    category_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    brand_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
  }, { tableName: 'products', timestamps: true, underscored: true });

  Product.associate = models => {
    Product.belongsTo(models.Category, { as: 'category', foreignKey: 'category_id' });
    Product.belongsTo(models.Brand, { as: 'brand', foreignKey: 'brand_id' });
    Product.belongsToMany(models.Color, {
      as: 'colors',
      through: 'product_colors',
      foreignKey: 'product_id',
      otherKey: 'color_id',
      timestamps: false
    });
    Product.hasMany(models.CartItem, { as: 'cartItems', foreignKey: 'product_id' });
  };
  return Product;
};
