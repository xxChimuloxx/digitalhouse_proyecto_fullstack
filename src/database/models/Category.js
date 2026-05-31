module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(100), allowNull: false, unique: true }
  }, { tableName: 'categories', timestamps: true, underscored: true });

  Category.associate = models => {
    Category.hasMany(models.Product, { as: 'products', foreignKey: 'category_id' });
  };
  return Category;
};
