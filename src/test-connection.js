// test-connection.js
import 'dotenv/config';
import pg from 'pg';
const { Client } = pg;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

console.log({
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASSWORD,
  database        : process.env.DB_NAME,
  port            : process.env.DB_PORT
})


async function testConnection() {
  try {
    await client.connect();
    console.log('Connection successful');
    const result = await client.query('SELECT NOW()');
    console.log('Current time in database:', result.rows[0].now);
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    await client.end();
  }
}

testConnection();