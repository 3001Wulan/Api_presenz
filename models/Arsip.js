// models/Arsip.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Arsip = sequelize.define(
  'Arsip',
  {
    id_arsip: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_absensi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'absensi',
        key: 'id_absensi',
      },
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    waktu_arsip: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'arsip',
    timestamps: true,
  }
);

module.exports = Arsip;
