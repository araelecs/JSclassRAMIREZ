const dataMPG = [] //globally scoped, anything can access
const dataCost = []
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
    dataMPG.push(mpg) 
    dataCost.push(tripCost) //separate arrays = more flexible
}

const averageMPG = () => {
    let totalMPG = 0 //move this outside so that it reestablishes each time
    for (let i = 0; i < dataMPG.length; i++){//++ is incrementer or afterthought, it adds 1 every time //i < 10 will force a the first 10 values of the array to pass through i =(0-9) Will now change this to dataMPG.length so that it limits the loop to the number of values in the array, will not get NaN
        totalMPG = totalMPG + dataMPG[i] //is adding each value within array every time it loops, sick
    }
    let averageMPG = (totalMPG/dataMPG.length)
    updateDOM(` Your average MPG is ${averageMPG}.`)
}

 //calling function for it to updateDOM 
//calculate average cost 
//how would I do it? 
//commit message : "my code for calc average cost"
const averageCost = () => {
    let totalCost = 0
    for (let i = 0; i < dataCost.length; i++){
        totalCost = totalCost + dataCost[i]
    }
    let averageCost = (totalCost/dataCost.length)
    updateDOM(` Your average trip cost is $${Math.round(averageCost)}.`)
}


mileage(150, 10, 5.05)
mileage(100, 20, 5.25)
mileage(200, 5, 5)
mileage(175, 15, 5.65)
mileage(250, 30, 5.95)
mileage(115, 9, 5)

averageMPG()
averageCost()