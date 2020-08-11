require('dotenv').config();

const Pool = require('pg').Pool;

const devConfig = {
    connectionString: process.env.PG_URI,
    ssl: {
      rejectUnauthorized: false
    }
  }

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
}

const pool = new Pool(
  process.env.NODE_ENV === 'production' ? proConfig : devConfig
);

pool.connect()

module.exports = pool;