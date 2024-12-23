const { Notifikasi } = require('../models/notifikasi');

// Fungsi untuk membuat notifikasi baru
async function createNotifikasi(req, res) {
  try {
    const { id_user, judul, isi } = req.body; // Data dari body request

    // Validasi input
    if (!id_user || !judul || !isi) {
      return res.status(400).json({ message: 'Semua field wajib diisi' });
    }

    // Menyimpan data ke database
    const notifikasiBaru = await Notifikasi.create({
      id_user,
      judul,
      isi,
    });

    res.status(201).json({
      message: 'Notifikasi berhasil dibuat',
      data: notifikasiBaru,
    });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
  }
}

// Fungsi untuk mendapatkan semua notifikasi
async function getAllNotifikasi(req, res) {
  try {
    const notifikasi = await Notifikasi.findAll(); // Mengambil semua data
    res.status(200).json(notifikasi);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
  }
}

// Fungsi untuk mendapatkan notifikasi berdasarkan ID
async function getNotifikasiById(req, res) {
  try {
    const { id } = req.params;

    const notifikasi = await Notifikasi.findByPk(id); // Mencari notifikasi berdasarkan primary key
    if (!notifikasi) {
      return res.status(404).json({ message: 'Notifikasi tidak ditemukan' });
    }

    res.status(200).json(notifikasi);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
  }
}

// Fungsi untuk menghapus notifikasi
async function deleteNotifikasi(req, res) {
  try {
    const { id } = req.params;

    const deleted = await Notifikasi.destroy({ where: { id_notifikasi: id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Notifikasi tidak ditemukan' });
    }

    res.status(200).json({ message: 'Notifikasi berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
  }
}

module.exports = {
  createNotifikasi,
  getAllNotifikasi,
  getNotifikasiById,
  deleteNotifikasi,
};
