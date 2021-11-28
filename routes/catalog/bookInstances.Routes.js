const router = require('express').Router();
const instance_controller = require("../../controllers/bookinstanceController");

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  instance_controller.create_get
);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  instance_controller.create_post
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  instance_controller.delete_get
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  instance_controller.delete_post
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  instance_controller.update_get
);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  instance_controller.update_post
);

// GET request for one BookInstance.
router.get("/bookinstance/:id", instance_controller.detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", instance_controller.list);

module.exports = router;