const con = require('../connect/connect').con;

const create = (req, res) => {
    const { name } = req.body;

    con.query('INSERT INTO suppliers(name) VALUES (?)', [name], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM suppliers', (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    con.query('UPDATE suppliers SET name = ? WHERE id = ?', [name, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const del = (req, res) => {
    const { id } = req.params;

    con.query('DELETE FROM suppliers WHERE id = ?', [id], (err, result) => {
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
};