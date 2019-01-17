var router = require("express").Router();
var apiRoutes = require("./api");
var viewRoutes = require("../routes/api");

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
