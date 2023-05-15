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

class Student extends Person{
    constructor(firstName, lastname, address, classList) {
        super(firstName, lastname, address)
        this.classList = classList
    }

}

const anthony = new Student("Anthony", "Ramirez", "House Street", ["English1", "CIT45", "CIT58"]) //new object created from a template/blueprint which includes both data and methods
anthony.showStatus()
const jimmy = new Person("Jimmy", "McGill", "IDK Blvd.")
jimmy.showStatus()



