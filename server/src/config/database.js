const dbConfig = require('../credentials/databaseCredentials')

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: process.env.DB_DIALECT,
  },
  local: {
    username: dbConfig.local.user,
    password: dbConfig.local.pass,
    database: dbConfig.local.database,
    host: dbConfig.local.host,
    dialect: 'mysql',
    logging: false,
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  predial: {
    username: dbConfig.predial.user,
    password: dbConfig.predial.pass,
    database: dbConfig.predial.database,
    host: dbConfig.predial.host,
    dialect: 'mysql',
    logging: false,
  },
  pppoe: {
    username: dbConfig.ppp.user,
    password: dbConfig.ppp.pass,
    database: dbConfig.ppp.database,
    host: dbConfig.ppp.host,
    dialect: 'mysql',
    logging: false,
  },

};
