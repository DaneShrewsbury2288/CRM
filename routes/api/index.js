const router = require("express").Router();
const orderRoutes = require("./orders");
const productRoutes = require("./products");
const userRoutes = require("./users");

// Book routes
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
