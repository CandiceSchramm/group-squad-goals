const router = require("express").Router();
const messageController = require("../../controlers/messageController");

router.route("/")
  .get(messageController.findAll)
  .post(messageController.create);

router.route("/:id")
  .get(messageController.findById)
  .put(messageController.update)
  .delete(messageController.remove);

module.exports = router;