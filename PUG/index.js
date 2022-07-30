const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/datos", (req, res) => {
  const { title, price, thumbnail } = req.query;
  res.render("datos", { title, price, thumbnail });
});

app.listen(8080, () => {
  console.log("Server up");
});