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
        make: 'S21',
        OS: 'Android',//this is nested, reference it by .make/.os/.brand extension
        brand: 'Samsung'
    },                          //ALWAYS PUT A COMMA OR IT WILL BREAK THE CODE
    myHello: function(person){ //call MY_OBJECT, myHello, and then insert a parameter with quotes 
        return `My name is ${this.firstName}, I am ${this.age} years old, one is my favorite hobbies ${this.hobbies[0]}. I own a ${this.mobile.brand} ${this.mobile.make}, it runs on ${this.mobile.OS}. It is nice to meet you, ${person}! `
    }
}   

const greeting = MY_OBJECT.myHello('Lorenzo')

console.log(greeting)  //this is the most "global" you can get //this will show you the most amount of area it can cover within its scope