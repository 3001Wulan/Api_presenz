const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Pastikan konfigurasi sequelize benar

const User = sequelize.define(
  'User',
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // ID otomatis bertambah
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,  // Nama pengguna tidak boleh kosong
    },
    email: {
      type: DataTypes.STRING,
      unique: true,  // Pastikan email bersifat unik
      allowNull: false,  // Email harus diisi
      validate: {
        isEmail: true,  // Validasi agar format email benar
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,  // Password harus diisi
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,  // Role boleh kosong jika tidak ditentukan
    },
    preferensi: {
      type: DataTypes.STRING,
      allowNull: true,  // Preferensi pengguna boleh kosong
    },
  },
  {
    tableName: 'Users',  // Nama tabel yang digunakan di database
    timestamps: true,    // Menyimpan createdAt dan updatedAt
  }
);

module.exports = User;
