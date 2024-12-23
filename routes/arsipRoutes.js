// routes/arsipRoutes.js
const express = require('express');
const router = express.Router();
const { getAbsensi, getArsipByCategory, archiveAbsensi } = require('../controllers/arsipController');

// Menambahkan arsip
router.post('/add', archiveAbsensi);  // Gunakan archiveAbsensi untuk mengarsipkan absensi

// Melihat daftar arsip
router.get('/', getAbsensi);  // Untuk mendapatkan daftar absensi, jika itu yang dimaksud

// Melihat arsip berdasarkan kategori
router.get('/kategori/:kategori', getArsipByCategory);

module.exports = router;
