const PORT = 5000;
const express = require('express');
const app = express();

const artistRoutes = require('./routes/artistRouter');

app.use("/artist", artistRoutes)

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});