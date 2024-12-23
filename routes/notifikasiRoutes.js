const express = require('express');
const { createNotifikasi, getAllNotifikasi } = require('../controllers/notifikasiController');

const router = express.Router();

router.post('/', createNotifikasi); // Endpoint untuk membuat notifikasi
router.get('/', getAllNotifikasi); // Endpoint untuk mendapatkan semua notifikasi

module.exports = router;
