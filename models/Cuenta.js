const CuentaDef = (sequelize, DataTypes) => {
  const Cuenta = sequelize.define(
    "Cuenta",
    {
      idCuenta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "IDCUENTA",
      },
      cuenta: {
        type: DataTypes.STRING,
        field: "CUENTA",
      },
      saldo: {
        type: DataTypes.DECIMAL,
        field: "SALDO",
        defaultValue: 0,
      },
      fechaHora: {
        type: DataTypes.DATE,
        field: "FECHAHORA",
      },
    },
    {
      tableName: "CUENTAS",
      timestamps: false,
    }
  );

  Cuenta.associate = (models) => {
    Cuenta.hasMany(models.CuentaDetalle, {
      foreignKey: "idCuenta",
      as: "detalles",
    });
  };

  return Cuenta;
};

module.exports = CuentaDef;
