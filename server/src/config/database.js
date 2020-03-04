require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: process.env.DB_DIALECT,
  },
  local: {
    username: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASS,
    database: process.env.LOCAL_DB,
    host: process.env.LOCAL_HOST,
    dialect: 'mysql',
    logging: false,
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true,
      timezone: '-03:00',
    },
  },
  predial: {
    username: process.env.PREDIAL_USER,
    password: process.env.PREDIAL_PASS,
    database: process.env.PREDIAL_DB,
    host: process.env.PREDIAL_HOST,
    dialect: 'mysql',
    logging: false,
  },
  pppoe: {
    username: process.env.PPPOE_USER,
    password: process.env.PPPOE_PASS,
    database: process.env.PPPOE_DB,
    host: process.env.PPPOE_HOST,
    dialect: 'mysql',
    logging: false,
  },

};
