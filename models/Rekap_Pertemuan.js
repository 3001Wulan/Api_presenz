// models/Pertemuan.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Pastikan model User sudah benar

const Pertemuan = sequelize.define(
  'pertemuan',
  {
    id_pertemuan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id_user',
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
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    jenis_pertemuan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'pertemuan',
    timestamps: true,
  }
);

// Relasi
Pertemuan.belongsTo(User, { foreignKey: 'id_user', as: 'user' });
User.hasMany(Pertemuan, { foreignKey: 'id_user', as: 'pertemuan' });

module.exports = Pertemuan;
