const router = require("express").Router();
const clientController = require("../../controllers/clientController");

// Matches with "/api/sales"
router.route("/")
  .get(clientController.findAll)
  .post(clientController.create);

// Matches with "/api/sales/:id"
router
  .route("/:id")
  .get(clientController.findById)
  .put(clientController.update)
  .delete(clientController.remove);

module.exports = router;