const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "../PUG/views");
app.set("view engine", "pug");

data = []

app.get("/", (req, res) => {
  const { title, price, thumbnail } = req.query;
  res.render("datos", { title, price, thumbnail });
});

app.post("/datos", (req, res) => {
  data.push(req.body);
  res.render("datos", { data })
})

app.listen(8080, () => {
  console.log("Server up");
});