const express = require("express");
const router = express.Router();
const productosRouter = require("./products");

router.use("/products", productosRouter);

module.exports = router;