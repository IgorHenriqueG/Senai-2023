const con = require('../connect/connect').con;

const create = (req, res) => {
    const { name, email, phone, address } = req.body;

    con.query('INSERT INTO Rotas(nome, email, telefone, endereco) VALUES(?, ?, ?, ?)', [name, email, phone, address], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
};

const read = (req, res) => {
    con.query('SELECT * FROM Rotas', (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    })
};

const update = (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;

    con.query('UPDATE Rotas SET nome = ?, email = ?, telefone = ?, endereco = ? WHERE id = ?', [name, email, phone, address, id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
};

const del = (req, res) => {
    const { id } = req.params;

    con.query('DELETE FROM Rotas WHERE id = ?', [id], (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
    });
};

module.exports = {
    create,
    read,
    update,
    del
};