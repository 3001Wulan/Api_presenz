const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Mengimpor route auth
const rekapRoutes = require('./routes/rekapRoutes'); 
const morgan = require('morgan');
const catatanRoutes = require('./routes/catatanRoutes');
const arsipRoutes = require('./routes/arsipRoutes');
const absensiujianRoutes = require('./routes/absensiujianRoutes');
const perubahanabsenRoutes = require('./routes/perubahanabsenRoutes');
const absensipratikumRoutes = require('./routes/absensipratikumRoutes');
const notifikasiRoutes = require('./routes/notifikasiRoutes');


const app = express();

// Middleware untuk parsing JSON dan logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/catatan', catatanRoutes);
app.use('/api/rekapitulasi', rekapRoutes);
app.use('/api/arsip', arsipRoutes);
app.use('/api/absensi-ujian', absensiujianRoutes);
app.use('/api/perubahanabsen', perubahanabsenRoutes);
app.use('/api/absensi-pratikum', absensipratikumRoutes);
app.use('/api/notifikasi', notifikasiRoutes);

// Rute utama
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Menambahkan route untuk autentikasi
app.use('/api/auth', authRoutes);



// Middleware untuk menangani error
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  });
});

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
