const fs = require ('fs');

const data = [];
let id = 0;

const list = () => {
  return data;
};

const findOne = (id) => {
  return data.find((product) => product.id === id);
};

const add = (title, price, thumbnail) => {
  const product = { id: ++id, title, price, thumbnail };
  data.push(product);
  return product;
};

const findAllMatch = (title) => {
  const newArr = data.filter((product) => product.title === title);
  return newArr;
};

const remove = (id) => {
  data.forEach((product, i) => {
    if (product.id === id) data.splice(i, 1);
  });
};

const update = (id, newProduct) => {
  const data = findOne(id);
  data.title = newProduct.title;
  data.price = newProduct.price;
  data.thumbnail = newProduct.thumbnail;
};

module.exports = { list, findOne, add, findAllMatch, remove, update };

const products = [
 {
   title: "Escuadra",
   price: 123.45,
   thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
   id: 1
 },
 {
   title: "Calculadora",
   price: 234.56,
   thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
   id: 2
 },
 {
   title: "Globo Terráqueo",
   price: 345.67,
   thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
   id: 3
 }
];

for (let i = 0; i < products.length; i++) {
  module.exports.add(products[i].title, products[i].price, products[i].thumbnail);
};