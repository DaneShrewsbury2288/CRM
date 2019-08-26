const router = require("express").Router();
const orderRoutes = require("./orders");
const productRoutes = require("./products");
const userRoutes = require("./users");
const taskRoutes = require("./tasks");
const clientRoutes = require("./clients");

// api routes
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/clients", clientRoutes);

module.exports = router;
