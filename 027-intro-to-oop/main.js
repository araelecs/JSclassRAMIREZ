class Person { // in a class we must cap the first letter of the name
    constructor(firstName, lastName, address){
        this._firstName = firstName; //we use = instead of the : we are used to
        this._lastName = lastName;
        this._address = address; //underscore = private
    }
    //private vs public fields //getter setter, one sets value, one gets the value

    getFirstName() {
        return `${this._firstName}` //getter
    }
    setFirstName(newFirstName) {
        this._firstName = newFirstName //setter
    }
    getLastName() {
        return `${this._lastName}` //getter
    }
    setLastName(newLastName) {
        this._LastName = newLastName //setter
    }
    getAddress() {
        return `${this._address}` //getter
    }
    setAddress(newAddress) {
        this._address = newAddress //setter
    }
    showStatus() {
        console.log(`${this.getFirstName()} lives at ${this.getAddress}`)
    }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address)
        this.classList = classList
    }
    showStatus() {
        console.log(`${this.getFirstName} lives at ${this.getAddress} is taking ${this.classList}`)
    }

}

const anthony = new Student("Anthony", "Ramirez", "House Street", ["English1", "CIT45", "CIT58"]) //new object created from a template/blueprint which includes both data and methods
anthony.showStatus()
const jimmy = new Person("Jimmy", "McGill", "IDK Blvd.")
jimmy.showStatus()

console.log(anthony.getFirstName())

