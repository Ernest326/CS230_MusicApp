const db = require('../db');

exports.getAllAlbums = (req, res) => {
    console.log("BACKEND: Received request getAllAlbums");
    db.query('SELECT * FROM ALBUM', (err, rows) => {
        if (err) {
            console.log("BACKEND: Error in getAllSongs");
            res.sendStatus(500);
            console.log(err);
            //throw err;
        }
        res.send(rows)
    });
}

exports.createAlbum = (req, res) => {
    console.log("BACKEND: Received request createAlbum");
    const { artist, name, release_year, listens } = req.body;

    db.query('INSERT INTO ALBUM (artist, name, release_year, listens) VALUES (?, ?, ?, ?)', [artist, name, release_year, listens], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in createArtist");
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });

}

exports.updateAlbum = (req, res) => {
    console.log("BACKEND: Received request updateAlbum");
    const id = req.params.id;
    const artist_id = req.params.artist;

    const {artist, name, release_year, listens} = req.body;
    db.query('UPDATE ALBUM SET artist = ?, name = ?, release_year = ?, listens = ? WHERE name = ? AND artist = ?', [artist, name, release_year, listens, id, artist_id], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in updateArtist");
            console.log(err);
            res.sendStatus(500);
            //throw err;
        }
    })
    //Update songs as well
    db.query('UPDATE SONG SET album = ? WHERE album = ? AND artist = ?', [name, id, artist_id], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in updateArtist::Song");
            console.log(err);
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });
}

exports.deleteAlbum = (req, res) => {
    console.log("BACKEND: Received request deleteAlbum");
    const id = req.params.id;
    const artist_id = req.params.artist;

    db.query('DELETE FROM ALBUM WHERE name = ? AND artist = ?', [id, artist_id], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in deleteArtist");
            res.sendStatus(500);
            //throw err;
        }
    });

    //Delete songs as well
    db.query('DELETE FROM SONG WHERE album = ? AND artist = ?', [id, artist_id], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in updateArtist::Song");
            console.log(err);
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });

}