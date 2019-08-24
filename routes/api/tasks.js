const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
router.route("/")
  .get(tasksController.findAll)
  .post(tasksController.create);

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = router;