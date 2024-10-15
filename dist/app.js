"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = require("./cart");
var cart = new cart_1.default();
cart.add({
    id: 1,
    name: 'Война и мир',
    price: 1000
});
cart.add({
    id: 2,
    name: 'Гарри Поттер',
    price: 1500
});
cart.add({
    id: 3,
    name: 'Зеленая миля',
    price: 1800,
});
console.log(cart.deleteObj(1));
console.log(cart.items);
//# sourceMappingURL=app.js.map