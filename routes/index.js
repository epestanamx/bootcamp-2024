const express = require('express');
const router = express.Router();
const usuariosRouter = require('./usuarios');
const categoriasRouter = require('./categorias');
const cuentasRouter = require('./cuentas');
const { login } = require('../controllers/usuarios');

router.post("/login", login);
router.use('/usuarios', usuariosRouter);
router.use('/categorias', categoriasRouter);
router.use('/cuentas', cuentasRouter);

module.exports = router;
