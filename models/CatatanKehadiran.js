module.exports = (sequelize, DataTypes) => {
    const CatatanKehadiran = sequelize.define('CatatanKehadiran', {
      id_catatan_kehadiran: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_pertemuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_mahasiswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_kehadiran: {
        type: DataTypes.STRING,
        allowNull: false, // Misalnya: 'Hadir', 'Tidak Hadir', 'Izin', 'Sakit'
      },
      waktu_dibuat: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'catatan_kehadiran',
      timestamps: false,
    });
  
    CatatanKehadiran.associate = (models) => {
      // Relasi dengan model Pertemuan
      CatatanKehadiran.belongsTo(models.Pertemuan, {
        foreignKey: 'id_pertemuan',  // Nama foreign key
        as: 'pertemuan',  // Alias untuk relasi
      });
  
      // Relasi dengan model Mahasiswa (misalnya model Mahasiswa sudah ada)
      CatatanKehadiran.belongsTo(models.Mahasiswa, {
        foreignKey: 'id_mahasiswa',  // Nama foreign key
        as: 'mahasiswa',  // Alias untuk relasi
      });
    };
  
    return CatatanKehadiran;
  };
  