// Dependencias - Frameworks
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Conexão com o my SQL
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "lojinha"
});

// Rota de teste
const teste = (req, res)=>{
    res.send("Back-end funcionando!");
};

// CRUD - Read
const read = (req, res)=>{
    con.query("SELECT * FROM Clientes", (err, result)=>{
        // if(err) throw err;
        if(err) res.json(err);
        else res.json(result); 
    });
}

// Configurações de saida - Front-end
const app = express();
app.use(express.json());
app.use(cors());

// Rotas de saída - Front-end
app.get('/', teste);
app.get('/Clientes', read);

// Teste e porta no console
app.listen(3000, ()=> {
    console.log("Servidor rodando na porta 3000");
});