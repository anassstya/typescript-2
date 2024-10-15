import Cart from "../cart";

const cart = new Cart();
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
test('test add', (id = 1, name = 'Война и мир', price = 1000) => {
    const cart2 = new Cart()
    cart2.add({
            id: id,
            name: name,
            price: price
        }
    )
    expect(cart2.items).toEqual([{
        id: 1,
        name: 'Война и мир',
        price: 1000
    }])
})

test('get Items', ()  => {
    expect(cart.items).toEqual([{
        id: 1,
        name: 'Война и мир',
        price: 1000
    }, {
        id: 2,
        name: 'Гарри Поттер',
        price: 1500

    },{
        id: 3,
        name: 'Зеленая миля',
        price: 1800,
    }])
})

test('countSum', () => {
    expect(cart.countSum()).toBe("Сумма без скидок всех товаров 4300");

})

test('test countSumObj', (done) => {
    const result = cart.countSumObj(1);
    expect(result).toBe(`Цена (отдельного товара) без скидки 1000`);
    done(); // Убедитесь, что вызываете done(), когда тест завершен
}, 10000);

test('test countSumDisc', (done) => {
    let result = cart.countSumDisc(1,10)
    expect(result).toBe(`Цена (отдельного товара) со скидкой 900`);
    done();
}, 10000)

test('test countDisc', (done) =>{
    let result =cart.countDisc(10);
    expect(result).toBe(`Сумма всех товаров со скидкой 3870`);
    done();
}, 10000)

test('deleteObj', () => {
    let result = [{
        "id": 2,
        "name": 'Гарри Поттер',
        "price": 1500
    },{
        "id": 3,
        "name": 'Зеленая миля',
        "price": 1800,
    }
    ]
    expect(cart.deleteObj(1)).toEqual(result)
})