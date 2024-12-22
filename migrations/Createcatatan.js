// migrations/<timestamp>-create-catatan.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('catatan', {
      id_catatan: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_pertemuan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pertemuan', // Replace with the correct table name for Pertemuan
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      isi_catatan: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      jenis_catatan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      waktu_dibuat: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('catatan');
  },
};
