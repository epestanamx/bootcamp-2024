const { Proveedor } = require('../models')();

const createProveedor = async (req, res) => {
  const requiredParams = ["nombre", "apellidos"];

  const lostParams = requiredParams
    .filter((param) => {
      return !req.body[param];
    })
    .map((param) => {
      return `El campo ${param} es requerido.`
  });

  if (lostParams.length > 0) {
    return res.status(400).send(lostParams);
  }

  const cliente = await Proveedor.create(req.body);
  return res.send(cliente);
};

const getProveedors = async (req, res) => {
  const clientes = await Proveedor.findAll();

  return res.send(clientes);
};

const getProveedorById = async (idProveedor) => {
  const cliente = await Proveedor.findOne({
    where: {
      idProveedor,
    },
  });

  return cliente;
};

const updateProveedor = async (req, res) => {
  const { idProveedor } = req.params;

  const cliente = await getProveedorById(idProveedor);

  if(!cliente) {
    return res.status(404).send({ msg: 'El cliente no existe' });
  }

  await cliente.update(req.body);

  return res.send(cliente);
};

const deleteProveedor = async (req, res) => {
  const { idProveedor } = req.params;

  const cliente = await getProveedorById(idProveedor);

  if (!cliente) {
    return res.status(404).send({ msg: "El cliente no existe" });
  }

  await cliente.destroy();
  return res.send({
    msg: 'Proveedor eliminado.'
  });
};

module.exports = {
  createProveedor,
  getProveedors,
  updateProveedor,
  deleteProveedor,
};
