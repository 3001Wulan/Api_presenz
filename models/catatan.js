module.exports = (sequelize, DataTypes) => {
    const Catatan = sequelize.define('Catatan', {
      id_catatan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_pertemuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isi_catatan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      jenis_catatan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waktu_dibuat: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'catatan',
      timestamps: false,
    });
  
    Catatan.associate = (models) => {
      Catatan.belongsTo(models.Pertemuan, {
        foreignKey: 'id_pertemuan',
        as: 'pertemuan',
      });
    };
  
    return Catatan;
  };
  