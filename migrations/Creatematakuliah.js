// migrations/[timestamp]-create-matakuliah.js
module.exports = {
        up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('matakuliah', {
            id_matakuliah: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            id_jurusan: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'jurusan',  // Pastikan relasi dengan tabel jurusan
                key: 'id_jurusan',
              },
            },
            nama_matakuliah: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            sks: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
          });
        },
        down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('matakuliah');
        },
      };
      