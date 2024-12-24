module.exports = {
        up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('Users', {  // Ganti 'Profiles' jadi 'Users'
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false,
            },
            id_user: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'Users', // Pastikan referensinya juga sesuai
                key: 'id',
              },
              onDelete: 'CASCADE',
            },
            nama: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            email: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true,
            },
            password: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            role: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            bio: {
              type: Sequelize.TEXT,
              allowNull: true,
            },
            no_handphone: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            jenis_kelamin: {
              type: Sequelize.ENUM('Laki-laki', 'Perempuan'),
              allowNull: false,
            },
            tanggal_lahir: {
              type: Sequelize.DATEONLY,
              allowNull: false,
            },
            createdAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.NOW,
            },
            updatedAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.NOW,
            },
          });
        },
        down: async (queryInterface) => {
          await queryInterface.dropTable('Users');  // Ganti 'Profiles' jadi 'Users'
        },
      };
      