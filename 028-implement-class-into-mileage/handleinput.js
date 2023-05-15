const ERR = document.getElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg');


function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement('p');
    p.textContent = input;
    divEl.appendChild(p);
}

function trackMPGandCost(miles, gallons, price) {
    const MPG = Number((miles / gallons).toFixed(2));
    const tripCost = Number((gallons * price).toFixed(2));
    return {
        miles: miles,
        gallons: gallons,
        price: price,
        MPG: MPG,
        tripCost: tripCost,
    };
}

function calculateAvg(MY_DATA) {
    AVG_OUTPUT.innerHTML=''
    const numberOfObj = MY_DATA.length;
    const sums = MY_DATA.reduce(function(sum, obj){
        return {
           _MPG: sum._MPG + obj._MPG,
           _tripCost: sum._tripCost + obj._tripCost

        }
    })      //can set this inside or outside //do not need initializer here 
    const avgMPG = Number((sums._MPG / numberOfObj).toFixed(2)); //we do not want to round this, make sure to set to number as math round will round the value, defeating the purpose
    const avgTripCost = Number((sums._tripCost / numberOfObj).toFixed(2));
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg');
    updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg');
}

function isFormValid(miles, gallons, price) {
    const errMsg = [];
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Input must be greater than 0');
    }
    if (price > 1000) {
        errMsg.push('Limit Reached');
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg;
    } else {
        return true;
    }
}

export {isFormValid, calculateAvg, trackMPGandCost}