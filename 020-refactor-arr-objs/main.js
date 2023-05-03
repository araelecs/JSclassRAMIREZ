const FORM = document.getElementById("form-input")
const ERR = document.getElementById("err")

const APP_DATA = []

const updateDOM = (input) => {
  const divEl = document.querySelector("#output")
  const p = document.createElement("p")
  p.textContent = input
  divEl.appendChild(p)
}

const INFO_TRACKER = (miles, gallons, price) => {
  const mpg = Math.round(miles / gallons)
  const tripCost = Math.round(gallons * price) 
  updateDOM(`Your current MPG is ${mpg}.`)
  updateDOM(`Your total cost is $${tripCost}.`)
  return {
  mpg:mpg,
  tripCost:tripCost,
  miles: miles,
  gallons: gallons,
  price:price
};
}
const AVERAGE_CALC = () => {
  let totalMPG = 0
  let totalCost = 0
  APP_DATA.forEach((obj) => {
    totalMPG += obj.mpg
    totalCost += obj.tripCost //will add all values
  })

  let averageMPG = Math.round(totalMPG / APP_DATA.length)
  let averageCost = Math.round(totalCost / APP_DATA.length)
  updateDOM(` Your average MPG is ${averageMPG}.`)
  updateDOM(` Your average trip cost is $${averageCost}.`)
}

const formValidation = (miles, gallons, price) => {
    const errorMessage = []
    if (miles === 0 || gallons === 0 || price === 0) {
        errorMessage.push("Invalid Entry (0)")
      }
      if (price > 1000) {
        errorMessage.push(" Im Walking")
      }
      if (errorMessage.length > 0) {
        ERR.textContent = errorMessage
        return false
      } else {
          return true
      }
}
FORM.addEventListener("submit", (e) => {
  e.preventDefault()
  const miles = parseInt(e.target.miles.value)
  const gallons = parseInt(e.target.gallons.value)
  const price = parseInt(e.target.price.value)
  
  const validCheck = formValidation(miles, gallons, price)
  if(validCheck) { //"truthy"   
    ERR.textContent = ""
    const updateData = INFO_TRACKER(miles, gallons, price)
    APP_DATA.push(updateData)
    AVERAGE_CALC()
  }//don't really need an else, will only run if it is true 
    
  FORM.reset()
})
