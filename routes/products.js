const express = require("express");
const Container = require("../controllers/prod.controller");
const productosRouter = express.Router();
const methodBank = require("../methodBank");

productosRouter.get("/", (req, res) => {
  const productos = Container.getAll();
  res.send(productos);
});

productosRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(methodBank.getById(parseInt(id)));
});

productosRouter.post("/", (req, res) => {
  const { title, price } = req.body;
  const prod = Container.save(title, price);
  res.status(201).send(prod);
});

module.exports = productosRouter;