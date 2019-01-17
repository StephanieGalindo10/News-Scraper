var router = require("express").Router();
var noteController = require("../../controllers/notes");

router.get("/:id", noteController.find);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

module.exports = router;
