const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3001,
    user: 'brahim',
    password: '1234',
    database: 'e-commerce-db',
  },
});

module.exports = knex;
