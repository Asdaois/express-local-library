
const router = require('express').Router();
const controller = require("../../controllers/bookController");
/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", controller.create_get);

// POST request for creating Book.
router.post("/book/create", controller.create_post);

// GET request to delete Book.
router.get("/book/:id/delete", controller.delete_get);

// POST request to delete Book.
router.post("/book/:id/delete", controller.delete_post);

// GET request to update Book.
router.get("/book/:id/update", controller.update_get);

// POST request to update Book.
router.post("/book/:id/update", controller.update_post);

// GET request for one Book.
router.get("/book/:id", controller.detail);

// GET request for list of all Book items.
router.get("/books", controller.list);

module.exports = router;