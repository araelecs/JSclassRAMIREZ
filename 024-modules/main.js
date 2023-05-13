import {renderTable} from "./render.js"
import { getTripData, saveTripData } from "./storage.js";
import {updateDOM, trackMPGandCost,calculateAvg, isFormValid} from "./functions.js"

/* Global const for updating DOM elements by their id*/

const FORM = document.getElementById("form-input");
const ERR = document.getElementById("err");
const AVG_OUTPUT = document.getElementById("output-avg");

/* MY_DATA is global array that will be updated by the user input with objects from form input values 
and calculate data */

const MY_DATA = getTripData()
renderTable(MY_DATA)


FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const miles = parseInt(e.target.miles.value);
  const gallons = parseInt(e.target.gallons.value);
  const price = parseInt(e.target.price.value);
  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    ERR.textContent = "";
    AVG_OUTPUT.textContent = "";
    const dataObj = trackMPGandCost(miles, gallons, price);
    MY_DATA.push(dataObj);
    saveTripData()
    renderTable(MY_DATA);
    calculateAvg();
  }
  FORM.reset();
});
