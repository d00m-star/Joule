'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favorites.init(
    {
      name: DataTypes.STRING,
      favArray: DataTypes.ARRAY
    },
    {
      sequelize,
      modelName: 'Favorites',
      tableName: 'favorites'
    }
  )
  return Favorites
}
