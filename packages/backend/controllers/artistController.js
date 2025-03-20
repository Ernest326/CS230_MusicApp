const db = require('../db');

exports.getAllArtists = (req, res) => {
    console.log("BACKEND: Received request getAllArtists");
    db.query('SELECT * FROM ARTIST', (err, rows) => {
        if (err) {
            console.log("BACKEND: Error in getAllArtists");
            res.sendStatus(500);
            console.log(err);
            //throw err;
        }
        res.send(rows)
    });
};

exports.createArtist = (req, res) => {
    console.log("BACKEND: Received request createArtist");
    console.log(req.body);
    const { name, monthly_listeners, genre } = req.body;

    db.query('INSERT INTO ARTIST (name, monthly_listeners, genre) VALUES (?, ?, ?)', [name, monthly_listeners, genre], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in createArtist");
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });

}

exports.updateArtist = (req, res) => {
    console.log("BACKEND: Received request updateArtist");
    const id = req.params.id;
    const { name, monthly_listeners, genre } = req.body;
    db.query('UPDATE ARTIST SET name = ?, monthly_listeners = ?, genre = ? WHERE name = ?', [name, monthly_listeners, genre, id], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in updateArtist");
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });
}

exports.deleteArtist = (req, res) => {
    console.log("BACKEND: Received request deleteArtist");
    const id = req.params.id;
    db.query('DELETE FROM ARTIST WHERE name = ?', [id], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in deleteArtist");
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });
}