const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
router.route("/")
  .get(tasksController.findAll)
  .post(tasksController.create);
// router.get('/', (req, res) => {
//   res.send('you have requestd a task')
// })

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = router;