var router = require("express").Router();

var noteRoutes = require("../api/notes");
var headlineRoutes = require("../api/headline");
var clearRoutes = require("../api/clear");


router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);
router.use("/clear", clearRoutes);

module.exports = router;
