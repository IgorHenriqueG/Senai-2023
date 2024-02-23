const con = require('../connect/connect').con;

const create = (req, res) => {
    const { id, nome, descricao, valor } = req.body;

    let query = `INSERT INTO item(id, nome, descricao, valor) VALUE ('${id}', '${nome}', '${descricao}', '${valor}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(400).json({error: 'Falha ao criar item'}).end();
        }else{
            // const novo = {
            //     id: result.insertId,
            //     nome,
            //     descricao,
            //     valor
            // }
            res.status(201).json({success: 'Item criado com sucesso'}).end();
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM item', (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            res.status(200).json(result).end();
        }
    })
}

const update = (req, res) => {
    const { id } = req.params;
    const { nome, descricao, valor } = req.body;

    let query = `UPDATE item SET nome = '${nome}', descricao = '${descricao}', valor = '${valor}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(400).json(err).end();
        }else if(result.affectedRows > 0) {
            res.status(202).json({success: 'Item Atualizado com sucesso!'}).end();
        }else{
            res.status(404).json({error: 'Item não encontrado'}).end();
        }
    })
}

const del = (req, res) => {
    const { id } = req.params;

    let query = `DELETE FROM item WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(400).json(err).end();
        }else if(result.affectedRows > 0) {
            res.status(204).json({success: `Item de ID = ${id} deletado com sucesso`}).end();
        }else {
            res.status(404).json({error: 'Item não encontrado'}).end();
        }
    })
}

module.exports = {
    create,
    read,
    update,
    del
}