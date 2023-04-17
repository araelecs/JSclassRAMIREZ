const FORM = document.getElementById("form-input")

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

const AVERAGE_COST = () => {
    let totalCost = 0
    for (let i = 0; i < DATA_COST.length; i++){          
        totalCost = totalCost + DATA_COST[i]
    }
    let AVERAGE_COST = (totalCost/DATA_COST.length)
    updateDOM(` Your average trip cost is $${Math.round(AVERAGE_COST)}.`) 
}


FORM.addEventListener('submit', (e) => { //"Listens" for code, waits for input. No data = code with not run
    e.preventDefault() //since we are not going to be calling a server script, we must prevent the default by using this line of code
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value) //we had a string being injected, which did not work
    const price = parseInt(e.target.price.value) //parseInt takes the # from the string and is read a number instead of a string
    MILEAGE(miles, gallons, price)//here we are getting the values of miles, gallons, and the price of gas
})


const selectElement = document.querySelector(".newForm")

selectElement.addEventListener("change", (event) => { //"Listens" for code, waits for input. No data = code with not run
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value) //we had a string being injected, which did not work
    const price = parseInt(e.target.price.value) //parseInt takes the # from the string and is read a number instead of a string
    AVERAGE_COST(miles, gallons, price)//here we are getting the values of miles, gallons, and the price of gas
})

