const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "../EJS/views");
app.set("view engine", "ejs");

const data = []

app.get("/", (req, res) => {
  res.render("datos", { data })
})

app.post("/products", (req, res) => {
  data.push(req.body);
  res.render("datos", { data })
});

app.listen(8080, () => {
  console.log("Server up");
});