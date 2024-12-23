// models/Rekapitulasi.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rekapitulasi = sequelize.define('Rekapitulasi', {
  id_rekap: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pertemuan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_matakuliah: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_hadir: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_izin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_alpha: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  catatan_pertemuan: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'rekapitulasi', 
  timestamps: true,
});

module.exports = Rekapitulasi;
