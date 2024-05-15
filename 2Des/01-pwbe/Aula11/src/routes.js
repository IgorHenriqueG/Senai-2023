const express = require('express');
const router = express.Router();

const clientes = require('./controllers/cliente');
const telefones = require('./controllers/telefone');

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id', clientes.del);

router.post('/telefones', telefones.create);
router.get('/telefones', telefones.read);
router.put('/telefones/:id', telefones.update);
router.delete('/telefones/:id', telefones.del);

module.exports = router