const express = require("express");
const app = express();
const router = require('./routes');
const productos = require ('./routes/products')

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});

app.use('/products', productos)


/* const express = require('express')

const app = express()
const personas = require('./routes/personas')
const productos = require('./routes/productos')
let PORT = 8080
const server = app.listen(PORT,()=>{
  console.log(`Servidor escuchando el puerto: ${server.address().port}`)
});

server.on("error",error=>`El servidor a tenido un error:${error}`);
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/personas',personas);
app.use('/productos',productos); */