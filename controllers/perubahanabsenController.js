const Pertemuan = require('../models/Pertemuan');
const Absensi = require('../models/Absensi');
const Matakuliah = require('../models/Matakuliah');

// Fungsi untuk mendapatkan daftar pertemuan berdasarkan matakuliah, fakultas, dan jurusan
const getPertemuanByMatakuliah = async (req, res) => {
  const { fakultasId, jurusanId, matakuliahId } = req.params;

  try {
    // Menemukan pertemuan berdasarkan fakultas, jurusan, dan matakuliah
    const pertemuanList = await Pertemuan.findAll({
      where: {
        id_fakultas: fakultasId,
        id_jurusan: jurusanId,
        id_matakuliah: matakuliahId,
      },
      include: [
        {
          model: Matakuliah,
          as: 'matakuliah',
          attributes: ['nama_matakuliah'],
        },
      ],
    });

    if (pertemuanList.length === 0) {
      return res.status(404).json({ message: 'Tidak ada pertemuan ditemukan.' });
    }

    res.status(200).json({ message: 'Daftar pertemuan', pertemuanList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
};

// Fungsi untuk mendapatkan daftar absensi mahasiswa pada pertemuan tertentu
const getAbsensiMahasiswa = async (req, res) => {
  const { pertemuanId } = req.params;

  try {
    // Menemukan absensi berdasarkan id pertemuan
    const absensiList = await Absensi.findAll({
      where: { id_pertemuan: pertemuanId },
      include: [
        {
          model: Pertemuan,
          as: 'pertemuan',
          attributes: ['id_matakuliah'],
        },
      ],
    });

    if (absensiList.length === 0) {
      return res.status(404).json({ message: 'Tidak ada absensi ditemukan.' });
    }

    res.status(200).json({ message: 'Daftar absensi mahasiswa', absensiList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
};

// Fungsi untuk memperbarui status kehadiran mahasiswa
const updateStatusKehadiran = async (req, res) => {
  const { absensiId } = req.params;
  const { status_kehadiran } = req.body; // Status kehadiran yang baru (misalnya: hadir, izin, alpha)

  try {
    // Menemukan absensi berdasarkan id_absensi
    const absensi = await Absensi.findByPk(absensiId);

    if (!absensi) {
      return res.status(404).json({ message: 'Absensi tidak ditemukan.' });
    }

    // Memperbarui status kehadiran mahasiswa
    absensi.status_kehadiran = status_kehadiran;
    await absensi.save();

    res.status(200).json({ message: 'Status kehadiran berhasil diperbarui!', absensi });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal memperbarui status kehadiran.' });
  }
};

module.exports = {
  getPertemuanByMatakuliah,
  getAbsensiMahasiswa,
  updateStatusKehadiran,
};
