const methodBank = require("../methodBank");

class Container {
  static getAll() {
    const productos = methodBank.list();
    return productos;
  }

  static create(title, price, thumbnail) {
    const prod = methodBank.add(title, price, thumbnail);
    return prod;
  }

  static update(id, newProduct) {
    const updateProd = methodBank.update(id, newProduct)
    return updateProd;
  }

  static delete(id) {
    const deleteProd = methodBank.remove(id);
    return deleteProd;
  }
}

module.exports = Container;