const CuentaDetalleDef = (sequelize, DataTypes) => {
  const CuentaDetalle = sequelize.define(
    "CuentaDetalle",
    {
      idCuentaDetalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "IDCUENTADETALLE",
      },
      idCategoria: {
        type: DataTypes.INTEGER,
        field: "IDCATEGORIA",
      },
      idProveedor: {
        type: DataTypes.INTEGER,
        field: "IDPROVEEDOR",
      },
      idCuenta: {
        type: DataTypes.INTEGER,
        field: "IDCUENTA",
      },
      idCliente: {
        type: DataTypes.INTEGER,
        field: "IDCLIENTE",
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        field: "IDUSUARIO",
      },
      cargo: {
        type: DataTypes.FLOAT,
        field: 'CARGO'
      },
      abono: {
        type: DataTypes.FLOAT,
        field: 'ABONO'
      },
      fechaHora: {
        type: DataTypes.DATE,
        field: "FECHA",
      },
    },
    {
      tableName: "CUENTAS_DETALLE",
      timestamps: false,
    }
  );

  CuentaDetalle.associate = (models) => {
    CuentaDetalle.belongsTo(models.Cliente, {
      foreignKey: 'idCliente',
      as: 'cliente'
    });
  };

  return CuentaDetalle;
};

module.exports = CuentaDetalleDef;
