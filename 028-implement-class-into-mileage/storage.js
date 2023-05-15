function getTripData() {
    const tripDataJSON = localStorage.getItem('tripData')
    if(tripDataJSON !== null) {
       return JSON.parse(tripDataJSON) 
    } else {
       return [] 
    }   
}

function saveTripData(MY_DATA) {
    localStorage.setItem('tripData', JSON.stringify(MY_DATA))
}

export {getTripData, saveTripData}