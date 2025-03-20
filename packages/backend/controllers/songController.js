const db = require('../db');

exports.getAllSongs = (req, res) => {
    console.log("BACKEND: Received request getAllSongs");
    db.query('SELECT * FROM SONG', (err, rows) => {
        if (err) {
            console.log("BACKEND: Error in getAllSongs");
            res.sendStatus(500);
            console.log(err);
            //throw err;
        }
        res.send(rows)
    });
};