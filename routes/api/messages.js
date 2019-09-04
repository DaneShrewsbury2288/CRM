const router = require("express").Router();
const messageController = require("../../controllers/messageController");

// Matches with "/api/messages"
router.route("/")
  .get(messageController.findAll)
  .post(messageController.create);

router.route("/:userIds")
  .get(messageController.findMessages)

module.exports = router;