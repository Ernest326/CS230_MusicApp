dotenv = require('dotenv').config({ path:'../../.env'} );

const mysql = require('mysql');
const express = require('express');
const app = express();

console.log(dotenv.DB_SERVER);
console.log(dotenv.DB_USER);
console.log(dotenv.DB_PASS);
console.log(dotenv.DB_NAME);

const connection = mysql.createConnection({
    host: dotenv.DB_SERVER,
    user: dotenv.DB_USER,
    password: dotenv.DB_PASS,
    database: dotenv.DB_PASS
});


app.get('/', (req, res) => {
    data = connection.query('SELECT * FROM ARTIST');
    res.send(data);
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
