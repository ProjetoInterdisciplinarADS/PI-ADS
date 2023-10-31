//Importando o app do arquivo app.js
const app = require('./app');

//Importando e configurando o dotenv
//require('dotenv').config({path:'variables.env'});

//console.log("Projeto interdiciplinar rodando");

//Configurando o servidor
//app.set('port',3000);
app.set('port', 3000);
const server = app.listen(app.get('port'),() => {
    console.log("Servidor Rodando na porta: http://localhost:" + server.address().port);
});


 
  