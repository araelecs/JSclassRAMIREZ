const FORM = document.getElementById("form-input")
const ERR = document.getElementById("err")
const DATA_MPG = [] 
const DATA_COST = []
const updateDOM = (input) => {
    const divEl = document.querySelector('#output') 
     const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p) 
} 

 
const MILEAGE = (miles, gallons, price = 4.95) => {
    const mpg = Math.round(miles/gallons)
    const tripCost = gallons * price
    updateDOM(` You purchased ${gallons} gallons of fuel at a price of ${price} and traveled a total of ${miles} miles.`)
    updateDOM(` Your current MPG is ${mpg}, your total cost is $${tripCost}.`)
    DATA_MPG.push(mpg) 
    DATA_COST.push(tripCost) 
}

const CALC_SUM = (arr) => {
     let sum = 0
     for(value of arr) {
     sum += (value)

}
    return sum 
}

const AVERAGE_CALC = () => {
    let totalMPG = CALC_SUM(DATA_MPG)
    let totalCost = CALC_SUM(DATA_COST)    
    let averageMPG = Math.round(totalMPG/DATA_MPG.length)
    let AVERAGE_COST = Math.round(totalCost/DATA_COST.length)
    updateDOM(` Your average MPG is ${averageMPG}.`)
    updateDOM(` Your average trip cost is $${AVERAGE_COST}.`)

}

FORM.addEventListener('submit', (e) => { 
    e.preventDefault() 
    const errorMessage = []
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value) 
    const price = parseInt(e.target.price.value) 
    if(miles === 0 || gallons === 0 || price === 0){ //this will only happen if the input in miles is equal to 0, miles === must be true
        errorMessage.push('Invalid Entry (0)') //couldnt we use the "or" feature in the "if" statement to include gallons and price as well?
    }
// || or && AND

    if(price > 1000) {
        errorMessage.push(' Im Walking')
    }

    if(errorMessage.length > 0) {
        ERR.textContent = errorMessage
    } else {
        MILEAGE(miles, gallons, price) //otherwise, carry out this code 
    }
})

