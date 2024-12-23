const express = require('express');
const router = express.Router();
const {
  getPertemuanByMatakuliah,
  getAbsensiMahasiswa,
  updateStatusKehadiran,
} = require('../controllers/perubahanabsenController');

// Menampilkan daftar pertemuan berdasarkan fakultas, jurusan, dan matakuliah
router.get('/pertemuan/:fakultasId/:jurusanId/:matakuliahId', getPertemuanByMatakuliah);

// Menampilkan absensi mahasiswa pada pertemuan tertentu
router.get('/absensi/:pertemuanId', getAbsensiMahasiswa);

// Memperbarui status kehadiran mahasiswa
router.put('/update-status/:absensiId', updateStatusKehadiran);

module.exports = router;
