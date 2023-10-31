// Importando o módulo mysql2
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html'); // Envie o arquivo HTML diretamente
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html'); // Envie o arquivo HTML diretamente
});

app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/views/cadastro.html'); // Envie o arquivo HTML diretamente
});

app.get('/fila', (req, res) => {
  res.sendFile(__dirname + '/views/fila.html'); // Envie o arquivo HTML diretamente
});

app.get('/entregas', (req, res) => {
  res.sendFile(__dirname + '/views/entregas.html'); // Envie o arquivo HTML diretamente
});

app.get('/gestor', (req, res) => {
  res.sendFile(__dirname + '/views/gestor.html'); // Envie o arquivo HTML diretamente
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html'); // Envie o arquivo HTML diretamente
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conecta ao banco de dados
 const connection = mysql.createConnection({
  host: 'localhost',
  user: 'erickcarvalho',
  password: '1234',
  database: 'esfiharia',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');

  app.post('/api/data', (req, res) => {
  // Obtém os dados do JSON armazenado localmente
  const nome = req.body.nome;
  const sobrenome = req.body.sobrenome;
  const email = req.body.email;
  const endereco = req.body.endereco;
  const nascimento = req.body.nascimento; 
  const pagamento = req.body.pagamento;
  let total = req.body.total;
  total = total.replace(/,/g, '.');


  // Insere os dados no banco de dados MySQL
  const query = `INSERT INTO cadastro  (NOME, SOBRENOME, EMAIL, ENDERECO, DATA_NASCIMENTO, PAGAMENTO, TOTAL) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [nome, sobrenome, email, endereco, nascimento, pagamento, total];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Erro ao inserir dados no banco de dados:', error);
      return res.status(500).json({ status: 'error', message: 'Erro ao processar o formulário.' });
    }
    console.log('Dados inseridos com sucesso no banco de dados.');

    // Resposta de confirmação
    const resposta = {
      status: 'success',
      message: 'Cadastro realizado com sucesso!',
      data: {
        nome,
        sobrenome,
        email,
        endereco,
        nascimento,
        pagamento,
        total,
      },
    };
    res.json(resposta);
    });
  });
});

module.exports = app;       