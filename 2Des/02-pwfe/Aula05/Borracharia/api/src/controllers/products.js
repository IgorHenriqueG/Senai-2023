const con = require('../connect/connect').con;

const create = (req, res) => {  
    const { name, description, price } = req.body;

    con.query('INSERT INTO Products(name, description, price, supplier_id) VALUES (?, ?, ?, ?)', [name, description, price, supplier_id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM Products', (err, result) => {
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

    con.query('UPDATE Products SET name = ?, description = ?, price = ?, supplier_id = ?  WHERE id = ?', [name, description, price, supplier_id, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const del = (req, res) => {
    const { id } = req.params;

    con.query('DELETE FROM Products WHERE id = ?', [id], (err, result) => {
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