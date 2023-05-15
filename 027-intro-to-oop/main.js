class Person { // in a class we must cap the first letter of the name
    constructor(firstName, lastname, address){
        this.firstName = firstName //we use = instead of the : we are used to
        this.lastname = lastname
        this.address = address
    }
    showStatus(){
        console.log(`${this.firstName} lives at ${this.address}`)
    }
}

const anthony = new Person("Anthony", "Ramirez", "House Street") //new object created from a template/blueprint which includes both data and methods
anthony.showStatusAnthony
const jimmy = new Person("Jimmy", "McGill", "IDK Blvd.")
jimmy.showStatus()

