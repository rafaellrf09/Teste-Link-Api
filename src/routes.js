const { Router } = require('express');

const pipeDriveController = require('./app/controllers/pipeDriveController');
const blingController = require('./app/controllers/BlingController');

const routes = Router();

routes.get('/deals', pipeDriveController.index);

routes.get('/pedidos', blingController.index)
routes.get('/criar-pedido', blingController.store)


module.exports = routes;