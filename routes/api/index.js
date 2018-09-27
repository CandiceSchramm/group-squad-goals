const router = require("express").Router();
const userRoutes = require("./user");
const activityRoutes = require("./activity");
const messageRoutes = require("./message");

// Book routes
router.use("/user", userRoutes);
router.use("/activity", activityRoutes);
router.use("/message", messageRoutes);

module.exports = router;