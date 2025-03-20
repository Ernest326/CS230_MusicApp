dotenv = require('dotenv').config({path: '../../.env'});
const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // ssl: {
    //     rejectUnauthorized: false
    // }
    acquireTimeout: 30000,
    connectTimeout: 30000
});

module.exports = pool;