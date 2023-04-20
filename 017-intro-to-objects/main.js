const MY_ARRAY = {}

// console.log(typeof MY_OBJECT) //almost everything is an object, even primitives 
// console.log(typeof MY_ARRAY)
// console.log(MY_ARRAY ===  MY_OBJECT) //they are the same type, but they are not strictly equal to one another

const MY_NUMBER = 100
const MY_OBJECT = {
    //can also be called properties, Key describes what the value is
    firstName : "Anthony",
    age: 22,
    hobbies: ['playing with my dog', 'gardening', 'working on cars' ], //array of item (reference individuals by # entry)
    mobile: {
        make: 'S21', //arrow functions will disable the "this" option
        OS: 'Android',//this is nested, reference it by .make/.os/.brand extension
        brand: 'Samsung'
    },                          //ALWAYS PUT A COMMA OR IT WILL BREAK THE CODE
    myHello: function(person){ //call MY_OBJECT, myHello, and then insert a parameter with quotes 
        return `My name is ${this.firstName}, I am ${this.age} years old, one is my favorite hobbies ${this.hobbies[0]}. I own a ${this.mobile.brand} ${this.mobile.make}, it runs on ${this.mobile.OS}. It is nice to meet you, ${person}! `
    }
}   

const greeting = MY_OBJECT.myHello('Lorenzo')

console.log(greeting)  //this is the most "global" you can get //this will show you the most amount of area it can cover within its scope

const FINANCE_INFO = {
    customer: "Bob",
    balance: 1000,
    purchase: function(price){
        remaining = (this.balance - price)   
        if(remaining >= 0) {
            return `Greetings ${this.customer}. Thank you for your purchase of $${price}. You account is in good standing. Your remaining balance is $${remaining}. `
        } else {
            return `Greetings ${this.customer}. Thank you for your purchase of $${price}. Your account is now overdrafted. Your balance is $${remaining}.`
        }

    }
}

const purchase = FINANCE_INFO.purchase(5000)