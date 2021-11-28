const router = require('express').Router();
const genre_controller = require("../../controllers/genreController");
/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.create_get);

//POST request for creating Genre.
router.post("/genre/create", genre_controller.create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.list);

module.exports = router;