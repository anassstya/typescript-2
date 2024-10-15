import Cart from "./cart";

const cart = new Cart()
cart.add({
        id: 1,
        name: 'Война и мир',
        price: 1000
    }
)
cart.add({
    id: 2,
    name: 'Гарри Поттер',
    price: 1500
})
cart.add({
    id: 3,
    name: 'Зеленая миля',
    price: 1800,
})

console.log(cart.countDisc(10))
console.log(cart.items)


