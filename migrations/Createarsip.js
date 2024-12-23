'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('arsip', {
      id_arsip: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_absensi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'absensi',
          key: 'id_absensi',
        },
      },
      kategori: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      waktu_arsip: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('arsip');
  },
};
