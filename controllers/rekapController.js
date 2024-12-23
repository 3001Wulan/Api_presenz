// controllers/rekapController.js
const Rekapitulasi = require('../models/Rekap');

// Fungsi untuk mendapatkan semua rekapitulasi
const getAllRekap = async (req, res) => {
  try {
    const rekapList = await Rekapitulasi.findAll();
    res.status(200).json({ message: 'List rekapitulasi', rekapList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
};

// Fungsi untuk menambah rekapitulasi
const addRekap = async (req, res) => {
  const { id_pertemuan, total_hadir, total_izin, total_alpha, catatan_pertemuan } = req.body;
  try {
    const newRekap = await Rekapitulasi.create({
      id_pertemuan,
      total_hadir,
      total_izin,
      total_alpha,
      catatan_pertemuan,
    });

    res.status(201).json({ message: 'Rekapitulasi berhasil ditambahkan!', newRekap });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menambahkan rekapitulasi.' });
  }
};

// Fungsi untuk mendapatkan rekapitulasi berdasarkan ID
const getRekapById = async (req, res) => {
  const { id } = req.params;
  try {
    const rekap = await Rekapitulasi.findByPk(id);

    if (!rekap) {
      return res.status(404).json({ message: 'Rekapitulasi tidak ditemukan.' });
    }

    res.status(200).json({ message: 'Rekapitulasi ditemukan', rekap });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil rekapitulasi.' });
  }
};

// Fungsi untuk memperbarui rekapitulasi
const updateRekap = async (req, res) => {
  const { id } = req.params;
  const { total_hadir, total_izin, total_alpha, catatan_pertemuan } = req.body;
  try {
    const rekap = await Rekapitulasi.findByPk(id);

    if (!rekap) {
      return res.status(404).json({ message: 'Rekapitulasi tidak ditemukan.' });
    }

    rekap.total_hadir = total_hadir;
    rekap.total_izin = total_izin;
    rekap.total_alpha = total_alpha;
    rekap.catatan_pertemuan = catatan_pertemuan;

    await rekap.save();

    res.status(200).json({ message: 'Rekapitulasi berhasil diperbarui!', rekap });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal memperbarui rekapitulasi.' });
  }
};

// Fungsi untuk menghapus rekapitulasi
const deleteRekap = async (req, res) => {
  const { id } = req.params;
  try {
    const rekap = await Rekapitulasi.findByPk(id);

    if (!rekap) {
      return res.status(404).json({ message: 'Rekapitulasi tidak ditemukan.' });
    }

    await rekap.destroy();

    res.status(200).json({ message: 'Rekapitulasi berhasil dihapus!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menghapus rekapitulasi.' });
  }
};

module.exports = { addRekap, getAllRekap, getRekapById, updateRekap, deleteRekap };
