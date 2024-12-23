const express = require('express');
const router = express.Router();
const absensiController = require('../controllers/absensiController'); // pastikan path ini benar

// Route untuk mengambil laporan absensi
router.get('/laporan', absensiController.getLaporanAbsensi);

module.exports = router;
