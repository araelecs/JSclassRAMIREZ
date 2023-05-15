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
    // let sumMPG = 0;
    // let sumTripCost = 0;
    // MY_DATA.forEach(obj => {
    //     sumMPG += obj.MPG;
    //     sumTripCost += obj.tripCost;
    // });
    const sums = MY_DATA.reduce(function(sum, obj){ //must pass in sum and obj //new object, sums
        return {
           MPG: sum.MPG + obj.MPG,
           tripCost: sum.tripCost + obj.tripCost

        }
    })      //can set this inside or outside //do not need initializer here 
    const avgMPG = Number((sums.MPG / numberOfObj).toFixed(2)); //we do not want to round this, make sure to set to number as math round will round the value, defeating the purpose
    const avgTripCost = Number((sums.tripCost / numberOfObj).toFixed(2));
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