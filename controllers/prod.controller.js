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

  static update(id, newPrice, newTitle, newThumbnail) {
    const updateProd = methodBank.update(id, newPrice, newTitle, newThumbnail)
    return updateProd;
  }

  static delete(id) {
    const deleteProd = methodBank.remove(id);
    return deleteProd;
  }
}

module.exports = Container;