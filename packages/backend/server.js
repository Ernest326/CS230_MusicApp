const PORT = 5000;
const express = require('express');
const app = express();
app.use(express.urlencoded());

const artistRoutes = require('./routes/artistRouter');
const songRoutes = require('./routes/songRouter');

app.use("/artist", artistRoutes)
app.use("/song", songRoutes)

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});