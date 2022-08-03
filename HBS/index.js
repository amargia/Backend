const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "datos.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

const data = []

app.set("view engine", "hbs");
app.set("views", "../HBS/views");

app.get("/", (req, res) => {
  res.render("main", { data })
})

app.post("/datos", (req, res) => {
  data.push(req.body);
  res.render("main", { data })
});

app.listen(8080, () => console.log("Server up"));