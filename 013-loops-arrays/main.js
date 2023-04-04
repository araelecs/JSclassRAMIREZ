const myArray = [] //globally scoped, anything can access

const updateDOM = (input) => {
    const divEl = document.querySelector('#output') 
     const newText = document.createElement("newText")
    newText.textContent = input
    divEl.appendChild(newText) 
} 

 
const mileage = (miles, gallons, gasPrice = 4.95) => {
    const mpg = Math.round(miles/gallons)
    const tripCost = gallons * gasPrice
    updateDOM(` You purchased ${gallons} gallons of fuel at a price of ${gasPrice} and traveled a total of ${miles} miles.`)
    updateDOM(` Your current MPG is ${mpg}, your total cost is $${tripCost}.`)
    myArray.push(mpg, tripCost) 
}

const averageMPG = () => {
   const mpgAverage = (myArray[0] + myArray[2]) / 2 //will now show up until it is called
   updateDOM(` Your total average MPG is ${mpgAverage} MPG.`)
}

 //calling function for it to updateDOM 

mileage(150, 10, 5.05)
mileage(100, 20, 5.25)
mileage(200, 5, 5)

averageMPG()