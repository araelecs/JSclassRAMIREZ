let pizza
function orderPizza() {
    console.log('Order Pizza')
    setTimeout(() => {
    pizza = '🍕'
}, 2000)
    console.log('Pizza was ordered')
}
orderPizza()
console.log(`Eat ${pizza}`)
