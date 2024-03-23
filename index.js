const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const usuariosController = require('./controllers/usuarios');
const auth = require('./middlewares/auth');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(auth);

app.post('/login', usuariosController.login);
app.get('/usuarios', usuariosController.getUsuarios);
app.post('/usuarios', usuariosController.createUsuario);
app.put('/usuarios/:idUsuario', usuariosController.updateUsuario);
app.delete('/usuarios/:idUsuario', usuariosController.deleteUsuario);

server.listen(3000, () => {
  console.log('Servidor inicializado.');
});
