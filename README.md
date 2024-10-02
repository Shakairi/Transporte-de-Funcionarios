#### :construction: Pré requisitos e tecnologias usadas no projeto
[![My Skills](https://skillicons.dev/icons?i=mysql,js,express,css,npm)](https://skillicons.dev)

---
##### :page_facing_up: Passo a passo da execucao do projeto

- crie sua conexao e banco no mysql 

<code>CREATE TABLE transporte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_funcionario VARCHAR(255),
    partida VARCHAR(255),
    destino VARCHAR(255),
    data_viagem DATE,
    horario TIME,
    veiculo VARCHAR(255),
    capacidade_veiculo INT,
    status_transporte VARCHAR(50),
    observacoes TEXT
);
</code>

- edite o arquivo `db.js` informando os campos da const **connection** de acordo com os dados da sua conexao: host, user, passowar, database.

<code>const connection = mysql.createConnection({
      host: 'localhost',   
      user: 'root',        
      password: '12345', 
      database: 'transporte_funcionarios' 
});
</code>

- abra o terminal, execute o scrip `npm install` para instalar as dependencias do projeto

- execute em seguida o `npm start` para iniciar a aplicacao

---
