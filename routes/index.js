const routes = require('express').Router();
const displayMessage = require('../controllers/');

routes.get('/', displayMessage.displayMessage);

module.exports = routes;