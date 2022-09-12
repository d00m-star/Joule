'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Day.hasMany(models.Food, {
        foreignKey: 'foodId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'food'
      })
    }
  }
  Day.init(
    {
      name: DataTypes.STRING,
      foodId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Day',
      tableName: 'days'
    }
  )
  return Day
}
