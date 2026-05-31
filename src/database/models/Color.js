module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(50), allowNull: false, unique: true }
  }, { tableName: 'colors', timestamps: true, underscored: true });

  Color.associate = models => {
    Color.belongsToMany(models.Product, {
      as: 'products',
      through: 'product_colors',
      foreignKey: 'color_id',
      otherKey: 'product_id',
      timestamps: false
    });
  };
  return Color;
};
