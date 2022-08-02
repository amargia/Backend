const app = require("express")();
const handlebars = require("express-handlebars");

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", function (req, res) {
    const { title, price, thumbnail } = req.query;
    res.render("main", { title, price, thumbnail });
});

app.listen(8080, () => console.log("Server up"));