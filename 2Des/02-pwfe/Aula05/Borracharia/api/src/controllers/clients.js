const con = require('../connect/connect').con;

const create = (req, res) => {  
    const { name } = req.body;

    con.query('INSERT INTO Clients(name) VALUES (?)', [name], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM Clients', (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    con.query('UPDATE Clients SET name = ?, WHERE id = ?', [name, description, price, supplier_id, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const del = (req, res) => {
    const { id } = req.params;

    con.query('DELETE FROM Clients WHERE id = ?', [id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

module.exports = {
    create,
    read,
    update,
    del
}