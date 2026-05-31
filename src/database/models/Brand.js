module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(100), allowNull: false, unique: true }
  }, { tableName: 'brands', timestamps: true, underscored: true });

  Brand.associate = models => {
    Brand.hasMany(models.Product, { as: 'products', foreignKey: 'brand_id' });
  };
  return Brand;
};
