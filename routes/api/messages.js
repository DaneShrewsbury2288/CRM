const router = require("express").Router();
const messageController = require("../../controllers/messageController");

// Matches with "/api/messages"
router.route("/")
  .get(messageController.findAll)
  .post(messageController.create)
  .delete(messageController.remove);

router.route("/:userIds")
  .get(messageController.findMessages)
  .put(messageController.markAsRead);

router.route("/read/:id")
  .get(messageController.findUnread);

router.route("/many/:userIds")
  .get(messageController.findTheseUnread);

module.exports = router;