const { Router } = require('express');
const User = require('./app/controllers/User');
const Auth = require('./app/controllers/Auth');
const Dashboard = require('./app/controllers/DashboardController');
const SerPredialfone = require('./app/controllers/SerPredialfone');
const Radius = require('./app/controllers/Radius');

const authMiddleware = require('./app/middlewares/auth');

const routes = Router();

routes.post('/telefonia/app/users/auth', Auth.index);
routes.post('/telefonia/app/users', authMiddleware, User.store);
routes.post('/telefonia/app/users/update', authMiddleware, User.update);

routes.get('/telefonia/app/dashboard', authMiddleware, Dashboard.index);
routes.get('/telefonia/app/dashboard/fone', authMiddleware, SerPredialfone.index);
routes.get('/telefonia/app/dashboard/radius', authMiddleware, Radius.index);


module.exports = routes;
