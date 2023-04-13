const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'Transaction',
  port: 5432,
  idleTimeoutMillis: 1000,
});

module.exports = pool;
