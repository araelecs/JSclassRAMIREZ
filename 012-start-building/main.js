//We will be updating DOM
//arrays are not considered to be primitives, can host primitives but are not considered primitives themselves
const myArray = []  //doing this to keep track of data //the values that we obtain from calculating are then stored here due to the myArray.push command
//positions in arrays start with 0
const updateDOM = (input) => {//error here as two values need to be passed, but there is only one parameter
    const divEl = document.querySelector('#output') //since it is locally scoped, you must invoke it for it to work
     const newText = document.createElement("newText")                                               //make sure to include the pound sign
    newText.textContent = input //"set content of p to 'output to DOM'
    divEl.appendChild(newText) //append = update the DOM, Child is whatever is underneath, parenthesis p, whatever was in the P, put it in the DOM 
} // the text now shows up in the DOM due to the appendChild command the reference "p" in the parenthesis


 //kind of the like the forumulas with numbers, but plugs in the text instead of numbers
//the formula will display what is passed through the updateDOM invoke command and display the type (string, number, function)
// added some more default vales in case miles, gallons, or gas price are not defined below
const mileage = (miles, gallons, gasPrice = 4.95) => {
    const mpg = Math.round(miles/gallons) //Math.round will prevent goofy numbers from popping up and round the value to something more appealing
    const tripCost = gallons * gasPrice
    updateDOM(` You purchased ${gallons} gallons of fuel at a price of ${gasPrice} and traveled a total of ${miles}miles.`)
    updateDOM(` Your current MPG is ${mpg}, your total cost is $${tripCost}.`) //this then become a string, the whole thing is plugged in instead of it being two seperate things trying to be plugged in.
    myArray.push(mpg, tripCost) //forgot to return a value that would be passed to updateDOM
}// we can updateDOm before myArray push (would no longer need to call it outside of the function)
 //calculates and passes the result into "input" in the previous function ^ 

updateDOM(mileage(150, 10, 5.05)) //I have added some text and passed some values into a string in order to clarify how many miles were traveled and how much fuel was purchased.
updateDOM(mileage(100, 20, 5.25))
updateDOM(mileage(200, 5)) //will use the 4.95 in the const mileage function as I did not specify the price of gas
 //if you forget to pass a value through all parts of the original function, it will be 
//invoke and becomes global scope  // undefined and will not function properly
// you can set a fixed price, but you would lose the flexiblity, works best for values that will not change, will be default ONLY IF A VALUE IS NOT PASSED IN
