const { Absensi, Pertemuan, Mahasiswa } = require('../models/Absensi');

// Mengambil laporan absensi
const getLaporanAbsensi = async (req, res) => {
    try {
        const laporan = await Absensi.findAll({
            include: [
                { model: Pertemuan, attributes: ['tanggal'] },
                { model: Mahasiswa, attributes: ['nama_mahasiswa', 'nim'] }
            ],
            order: [['id_pertemuan', 'ASC'], ['id_mahasiswa', 'ASC']],
        });

        res.status(200).json(laporan);
    } catch (error) {
        console.error('Gagal mengambil laporan absensi:', error);
        res.status(500).json({ message: 'Gagal mengambil laporan absensi' });
    }
};

module.exports = {
    getLaporanAbsensi,
};
