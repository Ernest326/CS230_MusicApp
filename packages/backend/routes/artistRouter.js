const express = require("express");
const router = express.Router();
const controller = require("../controllers/artistController");

router.get("/", controller.getAllArtists);
router.post("/", controller.createArtist);
router.put("/:id", controller.updateArtist);
router.delete("/:id", controller.deleteArtist);

module.exports = router;