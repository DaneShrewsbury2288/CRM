const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/orders"
router.route("/")
  .get(ordersController.findAll)
  .post(ordersController.create);

// Matches with "/api/orders/:id"
router
  .route("/:id")
  .get(ordersController.findById)
  .put(ordersController.update)
  .delete(ordersController.remove);

// Matches with "/api/orders/usertotal/:userid/"
router.route("/usertotal/:userid/:dayone/:daytwo").get(ordersController.getUserOrderTotal);

// Matches with "/api/orders/clienttotal/:clientid"
router.route("/clienttotal/:clientid/:dayone/:daytwo").get(ordersController.getClientOrderTotal);

// Matches with "/api/orders/total/:dayone/:daytwo"
router.route("/total/:dayone/:daytwo").get(ordersController.getBusinessTotal);

// Matches with "/api/orders/client/:id"
router.route("/client/:id").get(ordersController.getClientOrders);

// Matches with "/api/orders/user/:id"
router.route("/user/:id").get(ordersController.getUserOrders);

module.exports = router;