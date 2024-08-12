'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Banners', 'heading', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Limited time offer'
    });
    await queryInterface.removeColumn('Banners', 'timer');
    await queryInterface.addColumn('Banners', 'days', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
    await queryInterface.addColumn('Banners', 'hours', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
    await queryInterface.addColumn('Banners', 'minutes', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
    await queryInterface.addColumn('Banners', 'seconds', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Banners', 'heading');
    await queryInterface.addColumn('Banners', 'timer', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
    await queryInterface.removeColumn('Banners', 'days');
    await queryInterface.removeColumn('Banners', 'hours');
    await queryInterface.removeColumn('Banners', 'minutes');
    await queryInterface.removeColumn('Banners', 'seconds');
  }
};