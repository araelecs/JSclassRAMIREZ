// let pizza
// function orderPizza() {
//     console.log('Order Pizza')
//     setTimeout(() => {
//     pizza = '🍕'
//     console.log(`${pizza} is ready`)
// }, 2000)
//     console.log('Pizza was ordered')
// }
// orderPizza()
// console.log('Call Qoli')
// console.log(`Eat ${pizza}`)

function orderPizza(callback) {
    setTimeout(() => {
        const pizza ='🍕'
        callback()
    },2000)
}

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady)
console.log(`Call Qoli`)

window.addEventListener('click', callback)

function callback() {

}

function thing1() {
    //Call Pizza Shop
}

function thing2() {
    //Order the pizza
}

function thing3() {
    //Eat the pizza

}

function thing1(callback) {
    callback()
}

function thing2(callback) {
    callback()
}

function thing3(callback) {
    callback()
}

thing1(() => {
    thing2(() => {
        thing3()
    })
})