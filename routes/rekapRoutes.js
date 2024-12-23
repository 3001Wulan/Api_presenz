// routes/rekapRoutes.js
const express = require('express');
const router = express.Router();
const { addRekap, getAllRekap, getRekapById, updateRekap, deleteRekap } = require('../controllers/rekapController');

// Route untuk menambah rekapitulasi
router.post('/add', addRekap);

// Route untuk mendapatkan semua rekapitulasi
router.get('/', getAllRekap);

// Route untuk mendapatkan rekapitulasi berdasarkan ID
router.get('/:id', getRekapById);

// Route untuk memperbarui rekapitulasi
router.put('/:id', updateRekap);

// Route untuk menghapus rekapitulasi
router.delete('/:id', deleteRekap);

module.exports = router;
