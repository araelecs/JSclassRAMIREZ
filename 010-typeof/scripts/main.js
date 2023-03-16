let snacksRemaining = 11
console.log("snacksRemaining is 11 which is typeof",(typeof snacksRemaining))
let typeSnack = "11"
console.log("typeSnack is granolaBar which is typeof",(typeof typeSnack))
let healthySnack = true
console.log("healthySnack is true which is typeof",(typeof healthySnack))
//typeof identifies what passes through it, console.log displays the type
let newVar = "SOMETHING"
const myConst = 42
console.log(snacksRemaining == typeSnack) //takes what is in "" "true" is diplayed on console log
console.log(snacksRemaining === typeSnack) //takes into consider the type, though what is in the "" is the same, it is not the same type, so it dispays "false"

let myVar 
console.log("myVar is typeof",(typeof myVar)) //no value has been assigned to myVar, it is "undefined" on the command line
if(true){
    let myVar = null
    console.log("myVar is typeof", (typeof myVar)) // in this case, myVar's type is "object" on the command line.
}

snacksRemaining = 11;
const result = snacksRemaining + "10"
console.log("value is 11 + 1 is typeof", (typeof result))

// if (true) {
//     const myConst = 43
//     console.log(myConst)
// } else {

// }