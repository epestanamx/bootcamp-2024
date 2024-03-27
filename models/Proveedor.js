const ProveedorDef = (sequelize, DataTypes) => {
  const Proveedor = sequelize.define(
    "Proveedor",
    {
      idProveedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "IDPROVEEDOR",
      },
      nombre: {
        type: DataTypes.STRING,
        field: "NOMBRE",
      },
      fechaHora: {
        type: DataTypes.DATE,
        field: 'FECHAHORA'
      }
    },
    {
      tableName: "PROVEEDORES",
      timestamps: false,
    }
  );

  Proveedor.associate = (models) => {
    Proveedor.hasMany(models.CuentaDetalle, {
      foreignKey: 'idProveedor',
      as: 'detalles'
    });
  };

  return Proveedor;
};

module.exports = ProveedorDef;
