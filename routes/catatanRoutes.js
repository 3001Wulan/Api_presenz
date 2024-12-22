// routes/catatanRoutes.js
const express = require('express');
const catatanController = require('../controllers/catatanController');

const router = express.Router();

// Routes for Catatan
router.post('/', catatanController.createCatatan);
router.get('/', catatanController.getAllCatatan);
router.get('/:id', catatanController.getCatatanById);
router.put('/:id', catatanController.updateCatatan);
router.delete('/:id', catatanController.deleteCatatan);

module.exports = router;
