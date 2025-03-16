dotenv = require('dotenv').config({path: '../../.env'});

const mysql = require('mysql');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


app.get('/', (req, res) => {
    data = connection.query('SELECT * FROM ARTIST', (err, results) => {
        if (err) throw error;
        console.log(results);
        res.send(results);
    });
    
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

connection.connect();