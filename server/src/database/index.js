const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/User');
const SerPredialfone = require('../app/models/SerPredialfone');
const Radius = require('../app/models/Radius');


const db = {
  local: new Sequelize(dbConfig.local),
  predial: new Sequelize(dbConfig.predial),
  pppoe: new Sequelize(dbConfig.pppoe),
};

User.init(db.local);
SerPredialfone.init(db.predial);
Radius.init(db.pppoe);

module.exports = db;
