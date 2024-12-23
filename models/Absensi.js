const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Absensi = sequelize.define('Absensi', {
  id_absensi: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pertemuan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_mahasiswa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status_kehadiran: {
    type: DataTypes.ENUM('Hadir', 'Izin', 'Alpha'),
    allowNull: false,
  },
  waktu_absensi: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'absensi',
  timestamps: false,
});

module.exports = Absensi;
