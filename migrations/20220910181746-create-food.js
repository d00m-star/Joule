'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      calories: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      protein: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      fats: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      carbohydrates: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      favoritesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('food')
  }
}
