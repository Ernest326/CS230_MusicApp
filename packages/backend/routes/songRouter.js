const express = require("express");
const router = express.Router();
const controller = require("../controllers/songController");

router.get("/", controller.getAllSongs);
router.post("/", controller.createSong);
router.put("/:id&:album", controller.updateSong);
router.delete("/:id&:album", controller.deleteSong);

module.exports = router;