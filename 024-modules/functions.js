function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement("p");
    p.textContent = input;
    divEl.appendChild(p);
  }

  function trackMPGandCost(miles, gallons, price) {
    const MPG = Math.round(miles / gallons);
    const tripCost = Math.round(gallons * price);
    updateDOM(
      `Your current MPG is ${MPG} and trip cost is ${tripCost}.`,
      "#output"
    );
    return {
      miles: miles,
      gallons: gallons,
      price: price,
      MPG: MPG,
      tripCost: tripCost,
    };
  }

  function calculateAvg(MY_DATA) {
    const numberOfObj = MY_DATA.length;
    let sumMPG = 0;
    let sumTripCost = 0;
    MY_DATA.forEach((obj) => {
      sumMPG += obj.MPG;
      sumTripCost += obj.tripCost;
    });
    const avgMPG = Math.round(sumMPG / numberOfObj);
    const avgTripCost = Math.round(sumTripCost / numberOfObj);
    updateDOM(`Average MPG is  ${avgMPG}`, "#output-avg");
    updateDOM(`Average Trip Cost is ${avgTripCost}`, "#output-avg");
  }
  
  function isFormValid(miles, gallons, price) {
    const errMsg = [];
    if (miles === 0 || gallons === 0 || price === 0) {
      errMsg.push("Value must be greater than 0!");
    }
    if (price > 1000) {
      errMsg.push("Value limit reached.");
    }
    if (errMsg.length > 0) {
      ERR.textContent = errMsg;
      return false;
    } else {
      return true; // not actually a truthy
    }
  }

  export{updateDOM, trackMPGandCost,calculateAvg, isFormValid}