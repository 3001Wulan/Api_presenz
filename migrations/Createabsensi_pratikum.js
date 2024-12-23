module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('AbsensiPraktikum', {
        id_absensi_praktikum: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_praktikum: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Praktikum', // Mengacu ke tabel 'Praktikum'
            key: 'id_praktikum',
          },
          onDelete: 'CASCADE',
        },
        id_mahasiswa: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Mahasiswa',
            key: 'id_mahasiswa',
          },
          onDelete: 'CASCADE',
        },
        status_kehadiran: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        waktu_absensi: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('AbsensiPraktikum');
    },
  };
  