'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsTo(models.Favorites, {
        foreignKey: 'favoritesId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'favorites'
      })
    }
  }
  Food.init(
    {
      name: {
        type: DataTypes.STRING,
        notEmpty: true,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        notEmpty: true,
        allowNull: false
      },
      calories: DataTypes.INTEGER,
      protein: DataTypes.INTEGER,
      fats: DataTypes.INTEGER,
      carbohydrates: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Food',
      tableName: 'food'
    }
  )
  return Food
}
