"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rekapitulasi", {
      id_rekap: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_pertemuan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Pertemuan", // Pastikan tabel "Pertemuan" sudah ada
          key: "id_pertemuan",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_matakuliah: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Matakuliah", // Pastikan tabel "Matakuliah" sudah ada
          key: "id_matakuliah",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      total_hadir: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_izin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_alpha: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      catatan_pertemuan: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    await queryInterface.dropTable("Rekapitulasi");
  },
};
