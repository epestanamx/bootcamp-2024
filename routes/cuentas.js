const express = require("express");
const router = express.Router();
const cuentasController = require("../controllers/cuentas");

router
  .route("/")
  .post(cuentasController.createCuenta)
  .get(cuentasController.getCuentas);

router
  .route("/:idCuenta")
  .put(cuentasController.updateCuenta)
  .delete(cuentasController.deleteCuenta);

module.exports = router;
