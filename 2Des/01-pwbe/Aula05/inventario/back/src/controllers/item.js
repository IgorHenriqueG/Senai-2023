const con = require('../dao/connect');
const Item = require('../models/item');

const create = (req, res) => {
    let item = new Item(req.body);
    con.query(item.create(), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message }).end();
        } else {
            res.status(201).json({
                message: 'Item criado com sucesso',
                id: result.insertId
            }).end();
        };
    });
};

const read = (req, res) => {
    con.query(Item.read(), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message }).end();
        } else {
            res.status(200).json(result).end();
        };
    });
};

const update = (req, res) => {
    let item = new Item(req.body);
    con.query(item.update(), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message }).end();
        } else {
            res.status(200).json({
                message: 'Item atualizado com sucesso'
            }).end();
        };
    });
};

const del = (req, res) => {
    let item = new Item(req.body);
    con.query(item.delete(), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message }).end();
        } else {
            res.status(200).json({
                message: 'Item excluido com sucesso'
            }).end();
        };
    });
};

module.exports = {
    create,
    read,
    update,
    del
}