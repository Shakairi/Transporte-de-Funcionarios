const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',   
    user: 'root',        
    password: '12345', 
    database: 'transporte_funcionarios' 
});


connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados!');
});


const adicionarTransporte = (nomeFuncionario, partida, destino, dataViagem, horario, veiculo, capacidadeVeiculo, statusTransporte, observacoes) => {
    const query = `
        INSERT INTO transporte 
        (nome_funcionario, partida, destino, data_viagem, horario, veiculo, capacidade_veiculo, status_transporte, observacoes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [nomeFuncionario, partida, destino, dataViagem, horario, veiculo, capacidadeVeiculo, statusTransporte, observacoes];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error('Erro ao inserir transporte:', err);
            return;
        }
        console.log('Transporte adicionado com sucesso:', results.insertId);
    });
};


adicionarTransporte('Luiz Henrique', 'Origem X', 'Destino Y', '2024-10-02', '10:30', 'Ônibus', 50, 'Pendente', 'Nenhuma observação');

module.exports = connection;
