const DATA_MPG = [] //globally scoped, anything can access //SETTING ALL CONSTS TO UPPERCASE AND UNDERSCORE IS STANDARD
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
    DATA_COST.push(tripCost) //separate arrays = more flexible
}

const CALC_SUM = (arr) => { //arr will be replaced with whatever array is mentioned in the averageCalc formula, in this case DATA_MPG and DATA_COST
    let sum = 0
    for (let i = 0; i < arr.length; i++){ //will calculate the sum before
        sum = sum + arr[i]
    }
    return sum
}//will return the sum and we will be able to plug CALC_SUM into the averageCalc 

const averageCalc = () => {
    let totalMPG = CALC_SUM(DATA_MPG)
    let totalCost = CALC_SUM(DATA_COST)    //move this outside so that it reestablishes each time
    let averageMPG = Math.round(totalMPG/DATA_MPG.length)
    let averageCost = Math.round(totalCost/DATA_COST.length)
    updateDOM(` Your average MPG is ${averageMPG}.`)
    updateDOM(` Your average trip cost is $${averageCost}.`)

}

 //calling function for it to updateDOM 
//calculate average cost 
//how would I do it? 
//commit message : "my code for calc average cost"
const averageCost = () => {
    let totalCost = 0
    for (let i = 0; i < DATA_COST.length; i++){          //refactored this to be one formula
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
