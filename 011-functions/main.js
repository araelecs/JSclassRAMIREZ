//Rio thinks functions are fun :P

function doMath (a, b) {    //this is the function signature
    let result = a * b //NOT NEEDED //operator       //consider const instead of function in order to prevent it being overwritten
    return result
//     console.log(`The result is ${a * b}`) //instead of hard coding specific values, we can use variables for flexibiity
//     console.log(`The result is ${a / b}`)
//     console.log(`The result is ${a + b}`)
//     console.log(`The result is ${a - b}`)
 }

doMath(100, 20) //must invoke/call the function for it to show up on the console.

let returnValue = doMath (100, 20)
console.log(`this result was returned from function: ${returnValue}`)