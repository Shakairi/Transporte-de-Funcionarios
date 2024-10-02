const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('index');
});

app.post('/transporte', (req, res) => {
  const { nome_funcionario, partida, destino, data_viagem, horario, veiculo, capacidade_veiculo, status_transporte, observacoes } = req.body;
  
  const query = `
    INSERT INTO transporte (nome_funcionario, partida, destino, data_viagem, horario, veiculo, capacidade_veiculo, status_transporte, observacoes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(query, [nome_funcionario, partida, destino, data_viagem, horario, veiculo, capacidade_veiculo, status_transporte, observacoes], (err, result) => {
    if (err) throw err;
    res.send('Dados inseridos com sucesso!');
  });
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
