'use strict';

require('dotenv').config({});
const { DB_PORT, DB_ENGINE, DB_HOST, DB_NAME, DB_USER_NAME, DB_USER_PASSWORD } = process.env;

const connection = {
  host: DB_HOST,
  user: DB_USER_NAME,
  password: DB_USER_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
};
const migrations = { tableName: 'knex_migrations' };

module.exports = {
  development: {
    client: DB_ENGINE,
    connection,
    pool: { min: 2, max: 10 },
    migrations,
  },

  staging: {
    client: DB_ENGINE,
    connection,
    pool: { min: 2, max: 10 },
    migrations,
  },

  production: {
    client: DB_ENGINE,
    connection,
    pool: { min: 2, max: 10 },
    migrations,
  },
};
