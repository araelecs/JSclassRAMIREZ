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
//*Playing around with formulas v do...while & while

const CALC_SUM = (arr) => {
     let sum = 0
     //FOR EACH Loop below
    // arr.forEach(element => { //"each of (for each) of the elements (element) inside the array (arr)"
    //      sum += element
    // })

    // for(value of arr){
    // sum += (value)
// }
//EXAMPLE ONE, *DO...WHILE STATEMENT* v
let i = 0
// do{
//     i += 1  // will add 1 counter to the value of i each time this function runs. 
//     for(value of arr)
//     sum += value
//}while (i < 1)
//END OF DO...WHILE STATEMENT

 //will only run once, as the value of i will now be 1, which make this requirement false
//EXAMPLE TWO, WHILE STATEMENT
 while (i < 1) {
    i += 1
    for(value of arr) //this seems to be about the same as the do...while statement, except it checks for conditions before the function is runy
    sum += value
}
    return sum //both functions properly return my sum of 93, they are in working order
}



//while statement
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
