const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const { CuentaDetalle } = require('./models')();
const usuariosController = require('./controllers/usuarios');
const auth = require('./middlewares/auth');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(auth);

app.get('/', (req, res) => {
  return res.send({
    app: 'ContAPI',
    version: '1.0.0',
  });
});
app.post('/login', usuariosController.login);
app.get('/usuarios', usuariosController.getUsuarios);
app.post('/usuarios', usuariosController.createUsuario);
app.put('/usuarios/:idUsuario', usuariosController.updateUsuario);
app.delete('/usuarios/:idUsuario', usuariosController.deleteUsuario);

app.get('/cuentas-detalle', async (req, res) => {
  const include = [];
  const { cliente = 0 } = req.query;

  if (cliente) {
    include.push('cliente');
  }

  const detalles = await CuentaDetalle.findAll({
    include,
  });

  return res.send(detalles);
});

server.listen(3000, () => {
  console.log('Servidor inicializado.');
});
