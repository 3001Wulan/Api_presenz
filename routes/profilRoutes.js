const express = require('express');
const router = express.Router();
const profilController = require('../controllers/profilController');

router.get('/:id', profilController.getProfil);
router.put('/:id', profilController.updateProfil);
router.put('/:id/password', profilController.updatePassword);

module.exports = router;
