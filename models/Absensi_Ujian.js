module.exports = (sequelize, DataTypes) => {
        const AbsensiUjian = sequelize.define('AbsensiUjian', {
          id_absensi_ujian: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          id_ujian: {
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
          }
        });
      
        AbsensiUjian.associate = (models) => {
          // Relasi dengan model Ujian
          AbsensiUjian.belongsTo(models.Ujian, { foreignKey: 'id_ujian', as: 'ujian' });
      
          // Relasi dengan model Mahasiswa
          AbsensiUjian.belongsTo(models.Mahasiswa, { foreignKey: 'id_mahasiswa', as: 'mahasiswa' });
        };
      
        return AbsensiUjian;
      };
      