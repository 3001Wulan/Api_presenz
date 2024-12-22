const express = require('express');
const router = express.Router();
const { addMeeting, getAllMeetings, getMeetingById, updateMeeting, deleteMeeting } = require('../controllers/meetingController');

// Route untuk menambah pertemuan
router.post('/add', addMeeting);

// Route untuk mendapatkan semua pertemuan
router.get('/', getAllMeetings);

// Route untuk mendapatkan pertemuan berdasarkan ID
router.get('/:id', getMeetingById);

// Route untuk memperbarui pertemuan
router.put('/:id', updateMeeting);

// Route untuk menghapus pertemuan
router.delete('/:id', deleteMeeting);

module.exports = router;