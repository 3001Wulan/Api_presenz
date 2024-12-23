// routes/absensiPraktikumRoutes.js
const express = require('express');
const router = express.Router();
const { addAbsensiPraktikum, getAbsensiByPraktikum } = require('../controllers/absensipratikumController');


// Menambahkan absensi praktikum
router.post('/add', addAbsensiPraktikum);

// Melihat absensi berdasarkan id_praktikum
router.get('/praktikum/:id_praktikum', getAbsensiByPraktikum);

module.exports = router;
