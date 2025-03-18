dotenv = require('dotenv').config({path: '../../.env'});
const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;