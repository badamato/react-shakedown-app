//DEPENDENCIES
const pg = require('pg');
const pgp = require('pg-promise')();

//ENVIRONMENTAL VARIABLES
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'shakedown',
  user: 'postgres',
  password: ''
};
const db = pgp(cn);

