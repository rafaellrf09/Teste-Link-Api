const { Router } = require('express');

const pipeDriveController = require('./app/controllers/pipeDriveController');
const blingController = require('./app/controllers/BlingController');
const apiController = require('./app/controllers/ApiController');

const routes = Router();

routes.get('/deals', pipeDriveController.index);

routes.get('/pedidos', blingController.index)
routes.get('/criar-pedido', blingController.store)

routes.get('/orders', apiController.index);
routes.get('/save-orders', apiController.store);


module.exports = routes;