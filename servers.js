const express = require('express');
const fs = require("fs");
const Contenedor = require("./Container.js")
const productos = new Contenedor("./productos")
const app = express();
const port = 8080;
const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
app.get('/productos', /*async*/ (req, res) => {
/*     try {
        const prods = await productos.getAll();
        res.send(JSON.parse(prods));
    } catch (error) {
        console.log("error");
    } */
    function getProds() {
        const rutaProds = fs.readFileSync("./productos.txt", "utf-8");
        return JSON.parse(rutaProds);
    }
    res.send(getProds())
})
app.get('/productosRandom', (req, res) => {
    function getProdsRandom() {
        const rutaProds = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));
        const randomElement = rutaProds[Math.floor(Math.random() * rutaProds.length)]
        return randomElement;
    }
    res.send(getProdsRandom());
})
