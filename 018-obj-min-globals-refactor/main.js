//LETSGOOOOOO Thanks , Rio!

const FORM = document.getElementById("form-input")
const ERR = document.getElementById("err")

const appInfo = {
dataMPG: [], 
dataCost: [],
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
        this.dataMPG.push(mpg) 
        this.dataCost.push(tripCost) //we can use the this as this is going to refer to the local scope code (which is pretty much everything now)
        this.updateDOM(` Your current MPG is ${mpg}, your total cost is $${tripCost}.`)
    },
    calcSum: (arr) => { //it's nice to get rid of all the "const" declarations, makes the code look a bit neater
        let sum = 0
        for(value of arr) {
        sum += (value) 
   }
        return sum 
    },
    averageCalc: function() {
    const totalMPG = this.calcSum(this.dataMPG)
    const totalCost = this.calcSum(this.dataCost)    
    const averageMPG = Math.round(totalMPG/this.dataMPG.length)
    const AVERAGE_COST = Math.round(totalCost/this.dataCost.length)
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
        this.mileageTrack(miles, gallons, price) 
        this.averageCalc()
    }
    FORM.reset()   
    }
        
    }

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    appInfo.formCheck(e)
})