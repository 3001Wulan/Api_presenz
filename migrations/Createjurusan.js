module.exports = {
        up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('jurusan', {
            id_jurusan: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            id_fakultas: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'fakultas',
                key: 'id_fakultas',
              },
            },
            nama_jurusan: {
              type: Sequelize.STRING,
              allowNull: false,
            },
          });
        },
      
        down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('jurusan');
        },
      };
      