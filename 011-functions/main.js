//Rio thinks functions are fun :P

// function doMath (a, b) {    //this is the function signature
//     let result = a * b //NOT NEEDED //operator       //consider const instead of function in order to prevent it being overwritten
//     return result
// //     console.log(`The result is ${a * b}`) //instead of hard coding specific values, we can use variables for flexibiity
// //     console.log(`The result is ${a / b}`)
// //     console.log(`The result is ${a + b}`)
// //     console.log(`The result is ${a - b}`)
//  }

// doMath(100, 20) //must invoke/call the function for it to show up on the console.

// let returnValue = doMath (100, 20)
// console.log(`this result was returned from function: ${returnValue}`)

//Sales tax in Fresno County is 7.98%
function taxesCharged (a) {
    let result = a * .0798 //though introducing "b" in the taxesCharged function would make this more flexible, I specifically want the same value each time
    return result
}
//i am invoking the function here
let valueTax = taxesCharged (100)
console.log(`The total amount paid in taxes is: ${valueTax}`) // ` is way better than ""

function totalPaid (purchase1, purchase2, discount) { //here I am allowed to "plug in" multiple numbers as I have a,b, and c available
    let result = (purchase1+purchase2)-discount //much more flexible and declaring fixed values 
    return result //need to return the result in order for it to show up when invoked below
}
let amountOwed = totalPaid(10,100,50)
console.log(`After adding the cost of all products and applying a discount, the total amount owed is ${amountOwed}`)
//still block scoped, still a function
doMoreMath = (a, b) => a * b    //best for single expression, use curly braces for multi function
 

console.log(doMoreMath (20, 30))
// console.log(result) //was not captured as a variable on global scope, will not work

arrowTaxes = (a) => a *.0798 
console.log(arrowTaxes (1000)) //works perfectly here as it is simple multiplication

arrowPaid = (purchase1, purchase2, discount) => ((purchase1+purchase2)-discount) 
console.log(arrowPaid(10000,100,50)) //still works great, still simple enough
//must really be great for memory use, less lines = less to process = probably less processing power needed