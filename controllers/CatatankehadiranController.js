// controllers/attendanceController.js
const Attendance = require('../models/CatatanKehadiran');

// Menambahkan catatan kehadiran
const addAttendance = async (req, res) => {
  const { subject, meeting, attendanceNote, summaryNote } = req.body;
  try {
    const newAttendance = await Attendance.create({
      subject,
      meeting,
      attendanceNote,
      summaryNote,
    });
    res.status(201).json({ message: 'Catatan kehadiran berhasil ditambahkan!', newAttendance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menambahkan catatan kehadiran.' });
  }
};

// Mengambil daftar catatan kehadiran berdasarkan mata kuliah dan pertemuan
const getAttendanceBySubjectAndMeeting = async (req, res) => {
  const { subject, meeting } = req.query;
  try {
    const attendanceList = await Attendance.findAll({
      where: { subject, meeting },
    });

    if (!attendanceList.length) {
      return res.status(404).json({ message: 'Tidak ada catatan kehadiran untuk mata kuliah dan pertemuan ini.' });
    }

    res.status(200).json({ message: 'Daftar catatan kehadiran', attendanceList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil data catatan kehadiran.' });
  }
};

// Menyimpan catatan kehadiran dan kesimpulan pertemuan
const saveNotes = async (req, res) => {
  const { id, attendanceNote, summaryNote } = req.body;
  try {
    const attendance = await Attendance.findByPk(id);

    if (!attendance) {
      return res.status(404).json({ message: 'Catatan kehadiran tidak ditemukan.' });
    }

    attendance.attendanceNote = attendanceNote;
    attendance.summaryNote = summaryNote;
    await attendance.save();

    res.status(200).json({ message: 'Catatan dan kesimpulan berhasil disimpan.', attendance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menyimpan catatan dan kesimpulan.' });
  }
};

module.exports = { addAttendance, getAttendanceBySubjectAndMeeting, saveNotes };
