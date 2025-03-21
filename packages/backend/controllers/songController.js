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
}

exports.createSong = (req, res) => {
    console.log("BACKEND: Received request createSong");
    console.log(req.body);
    const { album, artist, name, release_year } = req.body;

    db.query('INSERT INTO SONG (album, artist, name, release_year) VALUES (?, ?, ?, ?)', [album, artist, name, release_year], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in createArtist");
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });

}

exports.updateSong = (req, res) => {
    console.log("BACKEND: Received request updateSong");
    const id = req.params.id;
    const album_id = req.params.album;
    console.log(album_id);
    const { album, artist, name, release_year } = req.body;
    db.query('UPDATE SONG SET album = ?, artist = ?, name = ?, release_year = ? WHERE name = ? AND album = ?', [album, artist, name, release_year, id, album_id], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in updateArtist");
            console.log(err);
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });
}

exports.deleteSong = (req, res) => {
    console.log("BACKEND: Received request deleteSong");
    const id = req.params.id;
    const album_id = req.params.album;

    db.query('DELETE FROM SONG WHERE name = ? AND album = ?', [id, album_id], (err, result) => {
        if (err) {
            console.log("BACKEND: Error in deleteArtist");
            res.sendStatus(500);
            //throw err;
        }
        res.send(result)
    });
}