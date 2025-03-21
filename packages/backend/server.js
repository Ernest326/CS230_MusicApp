const PORT = 5000;
const express = require('express');
const app = express();
app.use(express.urlencoded());

const artistRoutes = require('./routes/artistRouter');
const songRoutes = require('./routes/songRouter');
const albumRoutes = require('./routes/albumRouter');

app.use("/artist", artistRoutes)
app.use("/song", songRoutes)
app.use("/album", albumRoutes)

/*
Note to self:
DELETE/POST REQUEST:
localhost:5000/song/name&album 
localhost:5000/album/name&artist

GET REQUEST:
localhost:5000/(song, album, artist)
*/

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});