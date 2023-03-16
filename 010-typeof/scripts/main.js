// let snacksRemaining = 11
// console.log("snacksRemaining is 11 which is typeof",(typeof snacksRemaining))
// let typeSnack = "11"
// console.log("typeSnack is granolaBar which is typeof",(typeof typeSnack))
// let healthySnack = true
// console.log("healthySnack is true which is typeof",(typeof healthySnack))
// //typeof identifies what passes through it, console.log displays the type
// let newVar = "SOMETHING"
// const myConst = 42
// console.log(snacksRemaining == typeSnack) //takes what is in "" "true" is diplayed on console log
// console.log(snacksRemaining === typeSnack) //takes into consider the type, though what is in the "" is the same, it is not the same type, so it dispays "false"

// let myVar 
// console.log("myVar is typeof",(typeof myVar)) //no value has been assigned to myVar, it is "undefined" on the command line
// if(true){
//     let myVar = null
//     console.log("myVar is typeof", (typeof myVar)) // in this case, myVar's type is "object" on the command line.
// }

let bankAccountValue = 5 //I have 5 dollars in my account
let bankAccounts = "5" //I have five bank accounts
let bankType = "BOA" //my bank is BOA
let haveAccount = true
let bankPlaceholder
let bankPlaceholder2 = null
console.log(bankAccountValue)
console.log("bankAccountValue is the number 5, the type is a:", (typeof bankAccountValue)) //this is a number
console.log("bankAccounts is text within parenthesis, the type is a:", (typeof bankAccounts))
console.log("haveAccount outlines whether something is true or false, this results in the type being a :", (typeof haveAccount))
console.log("equality operator will look at what is in side the parenthesis, 5, and compare it to the value 5, resulting in:", (bankAccountValue == bankAccounts))
console.log("strictly equal operator will compare the type, though 5 is equal to 5, they are not the same type which results in:", (bankAccountValue === bankAccounts))
bankAccountValue = 6 //though I have set the value of bankAccountValue before, I will be able to change it here. 
console.log(bankAccountValue) //this is after I declared the value to be 6, so this change will be reflected on the console log.
const bankValue = 100
// const bankValue = 110 here I tried to do the same as I did with "let", but since const cannot be changed, there was an error
console.log(bankValue)
if(haveAccount = true) { // only runs because it is true, this section is not restricted by the global variable bankValue
    const bankValue = 10 //local scope allows me to change the value of bankValue without the const restrictions
    console.log(bankValue)
}

// console.log(bankAccountValue)

snacksRemaining = 11;
const result = snacksRemaining + "10"
console.log("value is 11 + 1 is typeof", (typeof result))

// if (true) {
//     const myConst = 43
//     console.log(myConst)
// } else {

// }