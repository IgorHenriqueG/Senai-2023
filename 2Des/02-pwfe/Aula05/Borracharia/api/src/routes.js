const express = require('express');
const routes = express.Router();

const apiResponse = (req, res) => {
    res.send('API online.')
};

const suppliers = require('./controllers/suppliers');
const products = require('./controllers/products');
const clients = require('./controllers/clients');

routes.get('/', apiResponse);

routes.post('/suppliers', suppliers.create);
routes.get('/suppliers', suppliers.read);
routes.put('/suppliers/:id', suppliers.update);
routes.delete('/suppliers/:id', suppliers.del);

routes.post('/products', products.create);
routes.get('/products', products.read);
routes.put('/products/:id', products.update);
routes.delete('/products/:id', products.del);

routes.post('/clients', clients.create);
routes.get('/clients', clients.read);
routes.put('/clients/:id', clients.update);
routes.delete('/clients/:id', clients.del);

module.exports = routes;