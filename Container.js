const fs = require("fs");

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

const desaf = new Contenedor("productos")
//desaf.save(item);
//desaf.getById(1);
//desaf.getAll();
//desaf.deleteById(1);
//desaf.deleteAll();