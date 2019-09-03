const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./users");
const taskRoutes = require("./tasks");
const clientRoutes = require("./clients");
const orderRoutes = require("./orders");
const noteRoutes = require("./notes");
const messageRoutes = require("./messages")

// api routes
router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/clients", clientRoutes);
router.use("/orders", orderRoutes);
router.use("/notes", noteRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
