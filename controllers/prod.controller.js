const methodBank = require("../methodBank");

class Container {
  static getAll() {
    const productos = methodBank.getAll();
    return productos;
  }

  static create(title, price) {
    const prod = methodBank.save(title, price);
    return prod;
  }
}

module.exports = Container;