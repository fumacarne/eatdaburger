const mysql = require('mysql2');

const connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'qwerty212342467',
    database: 'burger_db'
  }
);

module.exports = connection;
