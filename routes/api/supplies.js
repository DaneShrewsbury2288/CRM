const router = require("express").Router();
const supplyController = require("../../controllers/supplyController");

router.route("/")
  .get(supplyController.findAll)
  .post(supplyController.create);

router
  .route("/:id")
  .get(supplyController.findById)
  .put(supplyController.update)
  .delete(supplyController.remove);

module.exports = router;