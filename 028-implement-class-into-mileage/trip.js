class Trip { 
    constructor(miles, gallons, price) {
        this._miles = miles 
        this._gallons = gallons
        this._price = price
        this._MPG = Number((miles / gallons).toFixed(2))
        this._tripCost = Number((gallons * price).toFixed(2))
    }

    getMiles() {
        return `${this._miles}` 
    }
    setMiles(newMiles) {
        this._miles = newMiles 
    }
    getGallons() {
        return `${this._gallons}` 
    }
    setGallons(newGallons) {
        this._gallons = newGallons
    }
    getPrice() {
        return `${this._price}` 
    }
    setPrice(newPrice) {
        this._price = newPrice
    }
    showStatus() {
        updateDOM(`Average MPG is ${this.getMiles()}`, '#output-avg');
    updateDOM(`Average Trip Cost is ${this.getPrice()}`, '#output-avg');
    }
    
}


export {Trip}