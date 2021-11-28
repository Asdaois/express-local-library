var express = require("express");
var router = express.Router();

// Require controller modules.
router.use(require("./author.Routes"));
router.use(require("./book.Routes"));
router.use(require("./bookInstances.Routes"));
router.use(require("./genres.Routes"));

module.exports = router;
