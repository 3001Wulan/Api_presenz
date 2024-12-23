// models/Pertemuan.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Sesuaikan dengan konfigurasi Sequelize Anda

const Pertemuan = sequelize.define('Pertemuan', {
  id_pertemuan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_fakultas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_jurusan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_matakuliah: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'matakuliah',  // Relasi ke tabel matakuliah
      key: 'id_matakuliah',
    },
  },
  tanggal_pertemuan: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lokasi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jenis_pertemuan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'pertemuan',
  timestamps: false,  
});

module.exports = Pertemuan;
