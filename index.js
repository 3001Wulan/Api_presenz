const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Mengimpor route auth
const meetingRoutes = require('./routes/meetingRoutes'); // Mengimpor route meeting


const app = express();

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Menambahkan route untuk autentikasi
app.use('/api/auth', authRoutes);

// Menambahkan route untuk pertemuan
app.use('/api/meetings', meetingRoutes);

// Middleware untuk menangani error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Menjalankan server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
