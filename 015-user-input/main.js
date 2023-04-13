const DATA_MPG = [] 
const DATA_COST = []
const updateDOM = (input) => {
    const divEl = document.querySelector('#output') 
     const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p) 
} 

 
const mileage = (miles, gallons, gasPrice = 4.95) => {
    const mpg = Math.round(miles/gallons)
    const tripCost = gallons * gasPrice
    updateDOM(` You purchased ${gallons} gallons of fuel at a price of ${gasPrice} and traveled a total of ${miles} miles.`)
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

const averageCalc = () => {
    let totalMPG = CALC_SUM(DATA_MPG)
    let totalCost = CALC_SUM(DATA_COST)    
    let averageMPG = Math.round(totalMPG/DATA_MPG.length)
    let averageCost = Math.round(totalCost/DATA_COST.length)
    updateDOM(` Your average MPG is ${averageMPG}.`)
    updateDOM(` Your average trip cost is $${averageCost}.`)

}

const averageCost = () => {
    let totalCost = 0
    for (let i = 0; i < DATA_COST.length; i++){          
        totalCost = totalCost + DATA_COST[i]
    }
    let averageCost = (totalCost/DATA_COST.length)
    updateDOM(` Your average trip cost is $${Math.round(averageCost)}.`) 
}


mileage(150, 10, 5.05)
mileage(100, 20, 5.25)
mileage(200, 5, 5)
mileage(175, 15, 5.65)
mileage(250, 30, 5.95)
mileage(115, 9, 5)
averageCalc()
