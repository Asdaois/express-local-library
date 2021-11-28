const router = require('express').Router();

const controller = require("../../controllers/authorController");
/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", controller.create_get);

// POST request for creating Author.
router.post("/author/create", controller.create_post);

// GET request to delete Author.
router.get("/author/:id/delete", controller.delete_get);

// POST request to delete Author.
router.post("/author/:id/delete", controller.delete_post);

// GET request to update Author.
router.get("/author/:id/update", controller.update_get);

// POST request to update Author.
router.post("/author/:id/update", controller.update_post);

// GET request for one Author.
router.get("/author/:id", controller.detail);

// GET request for list of all Authors.
router.get("/authors", controller.list);

module.exports = router;