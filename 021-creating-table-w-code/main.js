/* Global const for updating DOM elements by their id*/

const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

/* MY_DATA is global array that will be updated by the user input with objects from form input values 
and calculate data */

const MY_DATA = []

/* updateDOM function takes in input (string value) and id (to determine DOM location to update) 
and creates and updates DOM elements*/

function updateDOM  (input, id)  {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

/* trackMPGandCost function takes in miles, gallons and price and calculates MPG and tripCost and 
returns an object */

function trackMPGandCost (miles, gallons, price) {
    const MPG  = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Your current MPG is${MPG} and trip cost is ${tripCost}.`, '#output')
    return {
        MPG: MPG, 
        tripCost: tripCost,
        miles: miles,
        gallons: gallons,
        price: price
    }
}

/* calculateAvg function loops over the MY_DATA to determine average MPG and Trip Cost
*/

function calculateAvg () {
    const numberOfObj = MY_DATA.length
    let sumMPG  = 0
    let sumTripCost = 0  
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost += obj.tripCost
    })
    const avgMPG = Math.round(sumMPG/numberOfObj)
    const avgTripCost = Math.round(sumTripCost/numberOfObj)
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg')
}

/* isFormValid takes in miles, gallons and price and does simple validation and 
returns boolean or truthy value back to eventlisteners */

function isFormValid (miles, gallons, price) { //we probably should not be using arrow functions, normal functions are more commonly used
    const errMsg = []
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Value must be greater than 0!')
    }
    if (price > 1000) {
        errMsg.push('Value limit reached.')
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg
        return false
    } else {
        return true         // not actually a truthy
    }
}

/* Eventlisteners for form submit button, checks validation and if valid saves input data and calculated 
data as an object into global array named MY_DATA */

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    const isValid = isFormValid(miles, gallons, price)
    if(isValid) {
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const dataObj = trackMPGandCost(miles, gallons, price)
        MY_DATA.push(dataObj)
        calculateAvg()
    }
    FORM.reset()  
})