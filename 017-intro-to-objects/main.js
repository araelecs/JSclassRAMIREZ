const MY_ARRAY = {}

// console.log(typeof MY_OBJECT) //almost everything is an object, even primitives 
// console.log(typeof MY_ARRAY)
// console.log(MY_ARRAY ===  MY_OBJECT) //they are the same type, but they are not strictly equal to one another

const MY_NUMBER = 100
const MY_OBJECT = {
    //can also be called properties, Key describes what the value is
    firstName : "Anthony",
    age: 22,
    likes: 0,
    hobbies: ['playing with my dog', 'gardening', 'working on cars' ], //array of item (reference individuals by # entry)
    mobile: {
        make: 'S21', //arrow functions will disable the "this" option
        OS: 'Android',//this is nested, reference it by .make/.os/.brand extension
        brand: 'Samsung'
    },                          //ALWAYS PUT A COMMA OR IT WILL BREAK THE CODE
    myHello: function(person){ //call MY_OBJECT, myHello, and then insert a parameter with quotes 
        return `My name is ${this.firstName}, I am ${this.age} years old, one is my favorite hobbies ${this.hobbies[0]}. I own a ${this.mobile.brand} ${this.mobile.make}, it runs on ${this.mobile.OS}. It is nice to meet you, ${person}! `
    },
    addLikes:function(){
        this.likes +=1  //each time this is run, the value will increase by 1
    }
}   

const newObject = MY_OBJECT
newObject.addLikes()
console.log(newObject) //the value in INSIDE the object, so even though the original object is not directly referenced, it will be affected
newObject.age = 23







const greeting = MY_OBJECT.myHello('Lorenzo')

console.log(greeting)  //this is the most "global" you can get //this will show you the most amount of area it can cover within its scope

const FINANCE_INFO = {
    greeting: "Welcome to Javascript Bank",
    customer: "Bob",
    financialGoals: ['buying a home', 'paying off your car', 'investing in stocks'],
    balance: 20000,
    purchase: function(price){
        remaining = (this.balance - price)   
        if(remaining >= 0) {
            return `${this.greeting}, ${this.customer}. Thank you for your purchase of $${price}. You're well on your way of your goals of ${this.financialGoals[0]}, ${this.financialGoals[1]}, and ${this.financialGoals[2]}. Your remaining balance is $${remaining}. `
        } else {
            return `${this.greeting}, ${this.customer}. Thank you for your purchase of $${price}. Your account is now overdrafted. Your balance is $${remaining}.`
        }

    },
    interest:function(){
        this.balance +=1000
    }
}
//HI RIO! This is where I placed my function to test is the value would be saved when we reference within an object
const newFinance = FINANCE_INFO //the value i saved on the global scale, even though the function is within the object. 
newFinance.interest() //running this function affects the value on a global scale, it remains that way after it runs 
console.log(newFinance)

const purchase = FINANCE_INFO.purchase(50000)
console.log(purchase)

console.log(MY_OBJECT.firstName[1]) //this will call the second character of the referenced part of code, in this case it calls for the [1]th character is "Anthony", which is "n"

for(key in MY_OBJECT){
    console.log(`key ${key} and value ${MY_OBJECT[key]}`)            //console.log(key) returns the name of the keys only
}   //method above displays both the key and the value paired to each key, if it is not working with dot notation, try bracket notation


//HI RIO! This is where I played around with the code vvv
console.log(FINANCE_INFO.financialGoals[1].length)

const word = 'Bank'
console.log(`The word "${word}" ${FINANCE_INFO.greeting.includes(word)}`) //this will look for the word 'Bank' within whatever I point it at, in this case it is true. CASE SENSITIVE

console.log(FINANCE_INFO.financialGoals[1].slice(11)) //will only display everything after 11th character due to the slice function, you can create new string with this without having to mod the original string

console.log(FINANCE_INFO.financialGoals[2].replace('stocks', 'real estate'))// replaces a specific part of a string, in this case it will dislay "invest in real estate" instead of "invest in stocks"


