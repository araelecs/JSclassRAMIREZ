//I tried to get rid of as many global consts as possible by refactoring them into objects, but I still need a bit more help getting the code to work
//I'll watch your next video and fix it, thanks!

const FORM = document.getElementById("form-input")
const ERR = document.getElementById("err")

const appInfo = {
DATA_MPG: [], 
DATA_COST: [],
updateDOM: (input) => {
    const divEl = document.querySelector('#output') 
     const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p) 
    } 
}

const mileageTrack = {
    MILEAGE: (miles, gallons, price = 4.95) => {
        const mpg = Math.round(miles/gallons)
        const tripCost = gallons * price
        updateDOM(` You purchased ${gallons} gallons of fuel at a price of ${price} and traveled a total of ${miles} miles.`)
        updateDOM(` Your current MPG is ${mpg}, your total cost is $${tripCost}.`)
        DATA_MPG.push(mpg) 
        DATA_COST.push(tripCost) 
    }

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

formCheck: function(e) {
    FORM.addEventListener('submit', (e) => { 
    e.preventDefault() 
    const errorMessage = []
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value) 
    const price = parseInt(e.target.price.value) 
    if(miles === 0 || gallons === 0 || price === 0){ 
        errorMessage.push('Invalid Entry (0)') 
    }
    if(price > 1000) {
        errorMessage.push(' Im Walking')
    } if(errorMessage.length > 0) { 
        ERR.textContent = errorMessage 
    } else {
        ERR.textContent = ''
        MILEAGE(miles, gallons, price) 
        AVERAGE_COST()
    }
    FORM.reset() 
    
}
    )
}

