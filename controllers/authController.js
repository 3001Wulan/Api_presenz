const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const User = require('../models/User');  // Pastikan path sesuai

// Fungsi untuk membuat refresh token
const createRefreshToken = (id_user) => {
  return jwt.sign({ id_user }, process.env.JWT_SECRET, { expiresIn: '7d' }); // Refresh token berlaku 7 hari
};

// Endpoint Register
exports.register = async (req, res) => {
  const { nama, email, password, role } = req.body;

  try {
    // Periksa apakah email sudah digunakan
    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah digunakan' });
    }

    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat pengguna baru di database
    const newUser = await User.create({
      nama,
      email,
      password: hashedPassword,
      role, // Role opsional
    });

    res.status(201).json({
      message: 'Registrasi berhasil',
      user: {
        id_user: newUser.id_user,
        nama: newUser.nama,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
  }
};

// Endpoint Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Password salah' });
    }

    const token = jwt.sign(
      { id_user: user.id_user, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const refreshToken = createRefreshToken(user.id_user);

    res.json({
      message: 'Login berhasil',
      token,
      refreshToken,
      user: {
        id_user: user.id_user,
        nama: user.nama,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
  }
};

// Endpoint Refresh Token
exports.refreshToken = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token diperlukan' });
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Refresh token tidak valid' });
    }

    const newAccessToken = jwt.sign(
      { id_user: decoded.id_user },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token: newAccessToken });
  });
};
