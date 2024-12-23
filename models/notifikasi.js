module.exports = (sequelize, DataTypes) => {
    const Notifikasi = sequelize.define(
      'Notifikasi',
      {
        id_notifikasi: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_user: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        judul: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isi: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        waktu_kirim: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
        },
      },
      {
        tableName: 'Notifikasi',
        timestamps: true, // Untuk createdAt dan updatedAt
      }
    );
  
    return Notifikasi;
  };
  