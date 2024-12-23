// migrations/[timestamp]-create-pertemuan.js
module.exports = {
        up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('pertemuan', {
            id_pertemuan: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            id_user: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
            id_fakultas: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
            id_jurusan: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
            id_matakuliah: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'matakuliah',  // Relasi ke tabel matakuliah
                key: 'id_matakuliah',
              },
            },
            tanggal_pertemuan: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            lokasi: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            jenis_pertemuan: {
              type: Sequelize.STRING,
              allowNull: false,
            },
          });
        },
        down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('pertemuan');
        },
      };
      