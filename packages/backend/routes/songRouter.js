const express = require("express");
const router = express.Router();
const controller = require("../controllers/songController");

router.get("/", controller.getAllSongs);
//router.post("/", controller.createArtist);
//router.put("/:id", controller.updateArtist);
//router.delete("/:id", controller.deleteArtist);

module.exports = router;