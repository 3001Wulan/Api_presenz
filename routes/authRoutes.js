const express = require('express');
const router = express.Router();
const { login, refreshToken } = require('../controllers/authController');
const authController = require('../controllers/authController');


// Route untuk login
router.post('/login', login);
router.post('/register', authController.register);

// Route untuk refresh token
router.post('/refresh-token', refreshToken);

module.exports = router;
