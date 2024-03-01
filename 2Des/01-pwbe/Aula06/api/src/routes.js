const express = require('express');
const routes = express.Router();
// const con = require('./connect/connect');

const apiResponse = (req, res) => {
    res.send('API online');
};

const clients = require('./controllers/clients');
const employees = require('./controllers/employees');
const orders = require('./controllers/orders');
const vehicles = require('./controllers/vehicles');
const deliveries = require('./controllers/deliveries');
const destinations = require('./controllers/destinations');

routes.get('/', apiResponse);

routes.post('/clients', clients.create);
routes.get('/clients', clients.read);
routes.put('/clients/:id', clients.update);
routes.delete('/clients/:id', clients.del);

routes.post('/employees', employees.create);
routes.get('/employees', employees.read);
routes.put('/employees/:id', employees.update);
routes.delete('/employees/:id', employees.del);

routes.post('/orders', orders.create);
routes.get('/orders', orders.read);
routes.put('/orders/:id', orders.update);
routes.delete('/orders/:id', orders.del);

routes.post('/vehicles', vehicles.create);
routes.get('/vehicles', vehicles.read);
routes.put('/vehicles/:id', vehicles.update);
routes.delete('/vehicles/:id', vehicles.del);

routes.post('/deliveries', deliveries.create);
routes.get('/deliveries', deliveries.read);
routes.put('/deliveries/:id', deliveries.update);
routes.delete('/deliveries/:id', deliveries.del);

routes.post('/destinations', destinations.create);
routes.get('/destinations', destinations.read);
routes.put('/destinations/:id', destinations.update);
routes.delete('/destinations/:id', destinations.del);

module.exports = routes;