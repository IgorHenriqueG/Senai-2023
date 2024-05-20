const express = require('express');
const router = express.Router();

const destinos = require('./controllers/destinos');
const hoteis = require('./controllers/hoteis');
const pontos_turisticos = require('./controllers/pontos_turisticos');
const telefones = require('./controllers/telefones');

router.post('/destinos', destinos.create);
router.get('/destinos', destinos.read);
router.put('/destinos/:id', destinos.update);
router.delete('/destinos/:id', destinos.del);

router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.put('/hoteis/:id', hoteis.update);
router.delete('/hoteis/:id', hoteis.del);

router.post('/pontos_turisticos', pontos_turisticos.create);
router.get('/pontos_turisticos', pontos_turisticos.read);
router.put('/pontos_turisticos/:id', pontos_turisticos.update);
router.delete('/pontos_turisticos/:id', pontos_turisticos.del);

router.post('/telefones', telefones.create);
router.get('/telefones', telefones.read);
router.put('/telefones/:id', telefones.update);
router.delete('/telefones/:id', telefones.del);

module.exports = router;