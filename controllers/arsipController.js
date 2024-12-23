// controllers/arsipController.js
const Absensi = require('../models/Absensi'); // Model Absensi
const Arsip = require('../models/Arsip');     // Model Arsip

// Fungsi untuk mendapatkan semua data absensi
const getAbsensi = async (req, res) => {
  try {
    const absensiList = await Absensi.findAll();
    res.status(200).json({ message: 'List absensi', absensiList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
};

// Fungsi untuk melihat arsip berdasarkan kategori
const getArsipByCategory = async (req, res) => {
  const { kategori } = req.params; // Kategori yang dipilih oleh pengguna
  try {
    const arsipList = await Arsip.findAll({
      where: { kategori: kategori },  // Menyesuaikan kategori yang diminta
    });

    if (arsipList.length === 0) {
      return res.status(404).json({ message: 'Arsip tidak ditemukan untuk kategori ini.' });
    }

    res.status(200).json({ message: 'List arsip', arsipList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
};

// Fungsi untuk mengarsipkan absensi
const archiveAbsensi = async (req, res) => {
  const { id_absensi, kategori } = req.body; // Mengambil ID Absensi dan kategori yang akan diarsipkan
  try {
    // Cari absensi yang akan diarsipkan
    const absensi = await Absensi.findByPk(id_absensi);

    if (!absensi) {
      return res.status(404).json({ message: 'Absensi tidak ditemukan.' });
    }

    // Membuat arsip dari absensi yang ditemukan
    const newArsip = await Arsip.create({
      id_absensi: absensi.id_absensi,
      kategori: kategori, // Pastikan kategori dikirimkan dari frontend
    });

    // Hapus data dari tabel absensi setelah diarsipkan
    await absensi.destroy();

    res.status(201).json({ message: 'Absensi berhasil diarsipkan!', newArsip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengarsipkan absensi.' });
  }
};

module.exports = { getAbsensi, getArsipByCategory, archiveAbsensi };
