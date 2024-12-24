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
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    no_handphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_kelamin: {
      type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
      allowNull: false,
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    },
  {
    tableName: 'User',  // Nama tabel yang digunakan di database
    timestamps: true,    // Menyimpan createdAt dan updatedAt
  }
);

module.exports = User;
