const express = require('express');
const fs = require("fs");
const app = express();
const port = 8080;
let visitas = 1
const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
app.get('/productos', (req, res) => {
    function getProds() {
        const rutaProds = fs.readFileSync("./productos.txt", "utf-8");
        return JSON.parse(rutaProds);
    }
    res.send(getProds())
    visitas++
})
app.get('/productosRandom', (req, res) => {
    function getProdsRandom() {
        const rutaProds = fs.readFileSync("./productos.txt", "utf-8");
        const randomElement = rutaProds[Math.floor(Math.random() * rutaProds.length)]
        return randomElement;
    }
    res.send(getProdsRandom());
    visitas++
})
