const router = require("express").Router();
const salesController = require("../../controllers/salesController");

// Matches with "/api/sales"
router.route("/")
  .get(salesController.findAll)
  .post(salesController.create);

// Matches with "/api/sales/:id"
router
  .route("/:id")
  .get(salesController.findById)
  .put(salesController.update)
  .delete(salesController.remove);

module.exports = router;