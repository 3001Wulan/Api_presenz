const express = require('express');
const router = express.Router();
const {
  addAttendance,
  getAttendanceBySubjectAndMeeting,
  saveNotes,
} = require('../controllers/CatatankehadiranController');

// Route untuk menambahkan catatan kehadiran
router.post('/attendance', addAttendance);

// Route untuk mendapatkan daftar catatan kehadiran berdasarkan mata kuliah dan pertemuan
router.get('/attendance', getAttendanceBySubjectAndMeeting);

// Route untuk menyimpan catatan kehadiran dan kesimpulan pertemuan
router.put('/attendance/notes', saveNotes);

module.exports = router;
