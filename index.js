const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const { CuentaDetalle } = require('./models')();
const auth = require('./middlewares/auth');
const router = require('./routes');

const app = express();
const server = http.createServer(app);

app.use(auth);
app.use(cors({
  origin: '*',
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.send({
    app: 'ContAPI',
    version: '1.0.0',
  });
});

app.use('/', router);

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
