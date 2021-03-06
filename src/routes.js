const { Router } = require('express');

const routes = Router();

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

routes.post('/devs', DevController.create);
routes.get('/devs', DevController.findAll);

routes.get('/search', SearchController.index);

module.exports = routes;
