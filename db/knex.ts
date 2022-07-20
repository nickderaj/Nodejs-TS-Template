'use strict';

require('dotenv').config({});
const knexfile = require('../knexfile');
const db = require('knex')(knexfile[process.env.NODE_ENV ?? 'local']);

module.exports = db;
