'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('absensi', {
      id_absensi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_pertemuan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_mahasiswa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status_kehadiran: {
        type: Sequelize.ENUM('Hadir', 'Izin', 'Alpha'),
        allowNull: false,
      },
      waktu_absensi: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('absensi');
  },
};
