// controllers/absensiPraktikumController.js
const AbsensiPraktikum = require('../models/AbsensiPraktikum');

// Menambahkan absensi praktikum
const addAbsensiPraktikum = async (req, res) => {
  const { id_praktikum, id_mahasiswa, status_kehadiran } = req.body;
  try {
    const newAbsensiPraktikum = await AbsensiPraktikum.create({
      id_praktikum,
      id_mahasiswa,
      status_kehadiran,
    });
    res.status(201).json({ message: 'Absensi praktikum berhasil ditambahkan!', newAbsensiPraktikum });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menambahkan absensi praktikum.' });
  }
};

// Mengambil daftar absensi berdasarkan praktikum
const getAbsensiByPraktikum = async (req, res) => {
  const { id_praktikum } = req.params;
  try {
    const absensiList = await AbsensiPraktikum.findAll({
      where: { id_praktikum },
      include: ['mahasiswa'], // Menampilkan data mahasiswa yang hadir
    });

    if (!absensiList.length) {
      return res.status(404).json({ message: 'Tidak ada absensi untuk praktikum ini.' });
    }

    res.status(200).json({ message: 'Daftar absensi praktikum', absensiList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil data absensi praktikum.' });
  }
};

module.exports = { addAbsensiPraktikum, getAbsensiByPraktikum };
