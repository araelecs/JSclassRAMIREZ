const FORM = document.getElementById("form-input")
const ERR = document.getElementById("err")

  
  const APP_DATA = []

  const updateDOM = (input) => {
    const divEl = document.querySelector('#output') 
     const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p) 
} 
  const INFO_TRACKER = (data) => {
    const mpg = Math.round(data.miles/data.gallons)
    const tripCost = Math.round(data.gallons * data.price)
    updateDOM(`Your current MPG is ${mpg}.`)
    updateDOM(`Your total cost is $${tripCost}.`)
    data.mpg = mpg
    data.tripCost = tripCost
    return data
}
    
const AVERAGE_CALC = () => {
    let totalMPG = 0
    let totalCost = 0   
    APP_DATA.forEach(obj => {
        totalMPG += obj.mpg
        totalCost += obj.tripCost //will add all values
    })
    
let averageMPG = Math.round(totalMPG/APP_DATA.length)
let averageCost = Math.round(totalCost/APP_DATA.length)
updateDOM(` Your average MPG is ${averageMPG}.`)
updateDOM(` Your average trip cost is $${averageCost}.`)
}
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
        const dataInput = {
            miles:miles,
            gallons:gallons,
            price:price
        }
        ERR.textContent = ''
        
    const updateData = INFO_TRACKER(dataInput)
        APP_DATA.push(updateData)
        AVERAGE_CALC()        
    }
    FORM.reset() 
})

