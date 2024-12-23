// controllers/absensiUjianController.js
const AbsensiUjian = require('../models/Absensi_Ujian');

// Menambahkan absensi ujian
const addAbsensiUjian = async (req, res) => {
  const { id_ujian, id_mahasiswa, status_kehadiran } = req.body;
  try {
    const newAbsensiUjian = await AbsensiUjian.create({
      id_ujian,
      id_mahasiswa,
      status_kehadiran,
    });
    res.status(201).json({ message: 'Absensi ujian berhasil ditambahkan!', newAbsensiUjian });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menambahkan absensi ujian.' });
  }
};

// Mengambil daftar absensi berdasarkan ujian
const getAbsensiByUjian = async (req, res) => {
  const { id_ujian } = req.params;
  try {
    const absensiList = await AbsensiUjian.findAll({
      where: { id_ujian },
      include: ['mahasiswa'], // Menampilkan data mahasiswa yang hadir
    });

    if (!absensiList.length) {
      return res.status(404).json({ message: 'Tidak ada absensi untuk ujian ini.' });
    }

    res.status(200).json({ message: 'Daftar absensi ujian', absensiList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil data absensi ujian.' });
  }
};

module.exports = { addAbsensiUjian, getAbsensiByUjian };
