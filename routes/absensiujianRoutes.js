// routes/absensiUjianRoutes.js
const express = require('express');
const router = express.Router();
const { addAbsensiUjian, getAbsensiByUjian } = require('../controllers/absensiujianController');

// Menambahkan absensi ujian
router.post('/add', addAbsensiUjian);

// Melihat absensi berdasarkan id_ujian
router.get('/ujian/:id_ujian', getAbsensiByUjian);

module.exports = router;
