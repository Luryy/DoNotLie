const express = require('express');  
const app = express();

app.use('/estatico', express.static('src/app/public')); //acessar o prório diretorio de arquivos

const rotas = require('../app/routes/routes');
rotas(app);

module.exports = app;