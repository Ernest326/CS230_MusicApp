const express = require("express");
const router = express.Router();
const controller = require("../controllers/albumController");

router.get("/", controller.getAllAlbums);
router.post("/", controller.createAlbum);
router.put("/:id&:artist", controller.updateAlbum);
router.delete("/:id&:artist", controller.deleteAlbum);

module.exports = router;