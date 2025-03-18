const db = require('../db');

exports.getAllArtists = (req, res) => {
    console.log("BACKEND: Received request getAllArtists");
    db.query('SELECT * FROM ARTIST', (err, rows) => {
        if (err) {
            console.log("BACKEND: Error in getAllArtists");
            res.sendStatus(500);
            throw err;
        }
        res.send(rows)
    });
};