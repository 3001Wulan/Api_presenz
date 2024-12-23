module.exports = (sequelize, DataTypes) => {
    const AbsensiPraktikum = sequelize.define('AbsensiPraktikum', {
      id_absensi_praktikum: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_praktikum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_mahasiswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_kehadiran: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waktu_absensi: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    AbsensiPraktikum.associate = (models) => {
      // Relasi dengan model Praktikum
      AbsensiPraktikum.belongsTo(models.Praktikum, { foreignKey: 'id_praktikum', as: 'praktikum' });
  
      // Relasi dengan model Mahasiswa
      AbsensiPraktikum.belongsTo(models.Mahasiswa, { foreignKey: 'id_mahasiswa', as: 'mahasiswa' });
    };
  
    return AbsensiPraktikum;
  };
  