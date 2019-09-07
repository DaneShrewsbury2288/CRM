const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll);

// Matches with "/api/users/create"
router.route("/create")
  .post(usersController.create);

// Matches with "/api/users/login"
router.route("/login")
  .post(usersController.login);

// Matches with "/api/users/except/:id"
router.route("/except/:id")
  .get(usersController.findAllExcept);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;

