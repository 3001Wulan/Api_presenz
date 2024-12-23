const express = require('express');
const router = express.Router();
const { addAttendance, getAttendanceBySubjectAndMeeting, saveNotes } = require('../controllers/attendanceController');

// Endpoint untuk menambahkan catatan kehadiran
router.post('/add', async (req, res) => {
  try {
    await addAttendance(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan catatan kehadiran.', error: error.message });
  }
});

// Endpoint untuk mendapatkan catatan kehadiran berdasarkan mata kuliah dan pertemuan
router.get('/list', async (req, res) => {
  try {
    await getAttendanceBySubjectAndMeeting(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil daftar catatan kehadiran.', error: error.message });
  }
});

// Endpoint untuk menyimpan catatan kehadiran dan kesimpulan pertemuan
router.put('/save', async (req, res) => {
  try {
    await saveNotes(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan catatan kehadiran.', error: error.message });
  }
});

module.exports = router;
