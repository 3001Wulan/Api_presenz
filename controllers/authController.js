const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const User = require('../models/User');  // Pastikan path sesuai

// Fungsi untuk membuat refresh token
const createRefreshToken = (id_user) => {
  return jwt.sign({ id_user }, process.env.JWT_SECRET, { expiresIn: '7d' }); // Refresh token berlaku 7 hari
};

// Endpoint Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari user berdasarkan email
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    // Bandingkan password dengan hash di database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Password salah' });
    }

    // Buat access token JWT jika password cocok
    const token = jwt.sign(
      {
        id_user: user.id_user, // ID user sebagai payload
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,  // Kunci rahasia untuk signing token
      { expiresIn: '1h' }  // Akses token berlaku selama 1 jam
    );

    // Buat refresh token
    const refreshToken = createRefreshToken(user.id_user);

    res.json({
      message: 'Login berhasil',
      token,  // Access token
      refreshToken,  // Refresh token
      user: {
        id_user: user.id_user,  // ID user
        nama: user.nama,  // Nama pengguna
        email: user.email,  // Email pengguna
        role: user.role,  // Role pengguna
      },
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
  }
};

// Endpoint untuk refresh token
exports.refreshToken = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token diperlukan' });
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Invalid refresh token:', err); // Logging error
      return res.status(403).json({ message: 'Refresh token tidak valid' });
    }

    const newAccessToken = jwt.sign(
      {
        id_user: decoded.id_user, // Menggunakan id_user dari token refresh
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token: newAccessToken });
  });
};
