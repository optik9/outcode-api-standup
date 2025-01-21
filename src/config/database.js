require('dotenv').config();
const { Pool } = require('pg');


const decodeBase64 = (str) => {
  try {
    return Buffer.from(str, 'base64').toString('utf-8');
  } catch (e) {
    return str;
  }
};

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: decodeBase64(process.env.DB_PASSWORD),
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 5000
});

module.exports = pool;