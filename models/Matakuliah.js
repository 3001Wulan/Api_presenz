module.exports = (sequelize, DataTypes) => {
  const Matakuliah = sequelize.define('Matakuliah', {
    id_matakuliah: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_jurusan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jurusan',  // Pastikan relasi dengan tabel jurusan
        key: 'id_jurusan',
      },
    },
    nama_matakuliah: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'matakuliah',
    timestamps: false,  // Jika tabel tidak memiliki createdAt/updatedAt
  });

  Matakuliah.associate = (models) => {
    Matakuliah.belongsTo(models.Jurusan, {
      foreignKey: 'id_jurusan',
      as: 'jurusan',
    });
  };

  return Matakuliah;
};
