//We will be updating DOM

const updateDOM = (input) => {
    const divEl = document.querySelector('#output') //since it is locally scoped, you must invoke it for it to work
     const newText = document.createElement("newText")                                               //make sure to include the pound sign
    newText.textContent = input + ` The input is a type of ` + (typeof input) + `.` //"set content of p to 'output to DOM'
    divEl.appendChild(newText) //append = update the DOM, Child is whatever is underneath, parenthesis p, whatever was in the P, put it in the DOM 
} // the text now shows up in the DOM due to the appendChild command the reference "p" in the parenthesis


 //kind of the like the forumulas with numbers, but plugs in the text instead of numbers
//the formula will display what is passed through the updateDOM invoke command and display the type (string, number, function)
// added some more default vales in case miles, gallons, or gas price are not defined below
const mileage = (miles = 100, gallons = 10, gasPrice = 4.29) => (miles/gallons) * gasPrice
 //calculates and passes the result into "input" in the previous function ^ 

updateDOM(mileage(150, 10, 5.05))  //if you forget to pass a value through all parts of the original function, it will be 
//invoke and becomes global scope  // undefined and will not function properly
// you can set a fixed price, but you would lose the flexiblity, works best for values that will not change, will be default ONLY IF A VALUE IS NOT PASSED IN
