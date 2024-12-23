module.exports = {
        up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('AbsensiUjian', {
            id_absensi_ujian: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            id_ujian: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'Ujian',
                key: 'id_ujian'
              },
              onDelete: 'CASCADE'
            },
            id_mahasiswa: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'Mahasiswa',
                key: 'id_mahasiswa'
              },
              onDelete: 'CASCADE'
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
          await queryInterface.dropTable('AbsensiUjian');
        }
      };
      