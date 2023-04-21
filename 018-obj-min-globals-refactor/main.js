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
    },
    mileageTrack: function(miles, gallons, price = 4.95) {
        const mpg = Math.round(miles/gallons)
        const tripCost = Math.round(gallons * price)
        this.updateDOM(` You purchased ${gallons} gallons of fuel at a price of ${price} and traveled a total of ${miles} miles.`)
        this.DATA_MPG.push(mpg) 
        this.DATA_COST.push(tripCost) //we can use the this as this is going to refer to the local scope code (which is pretty much everything now)
        this.updateDOM(` Your current MPG is ${mpg}, your total cost is $${tripCost}.`)
    },
    CALC_SUM: (arr) => { //it's nice to get rid of all the "const" declarations, makes the code look a bit neater
        let sum = 0
        for(value of arr) {
        sum += (value) 
   }
        return sum 
    },
    AVERAGE_CALC: function() {
    const totalMPG = this.CALC_SUM(this.DATA_MPG)
    const totalCost = this.CALC_SUM(this.DATA_COST)    
    const averageMPG = Math.round(totalMPG/this.DATA_MPG.length)
    const AVERAGE_COST = Math.round(totalCost/this.DATA_COST.length)
    this.updateDOM(` Your average MPG is ${averageMPG}.`)
    this.updateDOM(` Your average trip cost is $${AVERAGE_COST}.`)

},
formCheck: function (e) {
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
        this.MILEAGE(miles, gallons, price) 
        this.AVERAGE_COST()
    }
    FORM.reset()   
    }
        
    }

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    appInfo.formCheck(e)
})






// const AVERAGE_COST = () => {
//     let totalCost = 0
//     for (let i = 0; i < DATA_COST.length; i++){          
//         totalCost = totalCost + DATA_COST[i]
//     }
//     let AVERAGE_COST = (totalCost/DATA_COST.length)
//     updateDOM(` Your average trip cost is $${Math.round(AVERAGE_COST)}.`) 
// }



