const fs = require ('fs');

//const data = [];
//let id = 0;

/* const list = () => {
  return data;
}; */

const getById = async (number) => {
  try {
      const productos = await fs.promises.readFile("./productos.txt", "utf-8");
      const data = JSON.parse(productos);
      let prod = data.find((i) => {
          return i.id === number});
      console.log(prod);
  } catch (error) {
      console.log(error);
  }
};

/* const findOne = (id) => {
  return data.find((tweet) => tweet.id === id);
}; */

const save = async (object) => {
  try {
      const productos = await fs.promises.readFile("./productos.txt", "utf-8");
      console.log(productos);
      const data = JSON.parse(productos);
      if (data.length > 0) {
          data.push({...object, id: data[data.length - 1].id + 1})
      }else {
          data.push({...object, id: 1})
      }
      fs.promises.writeFile("./productos.txt", JSON.stringify(data, null, 2))
      return data[data.length - 1].id;
  } catch (error) {
      console.log("error de lectura", error);
  }
};

/* const add = (name, content) => {
  const tweet = { id: ++id, name, content };
  data.push(tweet);
  return tweet;
}; */

const getAll = async () => {
  try {
      const productos = await fs.promises.readFile("./productos.txt", "utf-8");
      return JSON.parse(productos);
  } catch (error) {
      console.log("error");
  }
};

/* const findAllMatch = (name) => {
  const newArr = data.filter((tweet) => tweet.name === name);
  return newArr;
}; */

const deleteById = async (id) => {
  try {
      const productos = await fs.promises.readFile("./productos.txt", "utf-8");
      const data = JSON.parse(productos);
      const prod = data.filter((i) => i.id !== id);
      fs.promises.writeFile("./productos.txt", JSON.stringify(prod, null, 2));
      return prod;
  } catch (error) {
      console.log("error");
  }
};

/* const remove = (id) => {
  data.forEach((tweet, i) => {
    if (tweet.id === id) data.splice(i, 1);
  });
}; */

/* const update = (id, newContent) => {
  const tweet = findOne(id);
  tweet.content = newContent;
}; */

module.exports = { save, getById, getAll, deleteById };

const productos = [
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

for (let i = 0; i < productos.length; i++) {
  module.exports.save(productos[i].title, productos[i].price, productos[i].thumbnail);
};

/* const fs = require("fs");

class Contenedor {
    constructor (file) {
        this.file = file + ".txt"
    }
    async save(object) {
            try {
                const productos = await fs.promises.readFile(this.file, "utf-8");
                console.log(productos);
                const data = JSON.parse(productos);
                if (data.length > 0) {
                    data.push({...object, id: data[data.length - 1].id + 1})
                }else {
                    data.push({...object, id: 1})
                }
                fs.promises.writeFile(this.file, JSON.stringify(data, null, 2))
                return data[data.length - 1].id;
            } catch (error) {
                console.log("error de lectura", error);
            }
    }
    async getById(number) {
        try {
            const productos = await fs.promises.readFile(this.file, "utf-8");
            const data = JSON.parse(productos);
            let prod = data.find((i) => {
                return i.id === number});
            console.log(prod);
        } catch (error) {
            console.log(error);
        }
    }
    async getAll() {
            try {
                const productos = await fs.promises.readFile(this.file, "utf-8");
                return JSON.parse(productos);
            } catch (error) {
                console.log("error");
            }
    }
    async deleteById(id) {
            try {
                const productos = await fs.promises.readFile(this.file, "utf-8");
                const data = JSON.parse(productos);
                const prod = data.filter((i) => i.id !== id);
                fs.promises.writeFile(this.file, JSON.stringify(prod, null, 2));
                return prod;
            } catch (error) {
                console.log("error");
            }
    }
    async deleteAll() {
            try {
                await fs.promises.writeFile(this.file, "[]");
                console.log("");       
            } catch (error) {
                console.log("error");
            }
    }
}

const item = {
    title: "lápiz",
    price: 55,
    thumbnail: "1234",
}

const desaf = new Contenedor("productos");
module.exports = Contenedor; */
//desaf.save(item);
//desaf.getById(1);
//desaf.getAll();
//desaf.deleteById(1);
//desaf.deleteAll();