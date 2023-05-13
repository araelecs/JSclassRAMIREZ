import { saveTripData } from "./storage.js";
const FORM = document.getElementById("form-input");
const TBL_OUTPUT = document.getElementById("table-out");

function renderTableHeadings() {
    //we must first create the table
    const tbl = document.createElement("table"); //this will now be created through code, and not hard coded like in our HTML file
    const headings = [
      "Miles Driven: ",
      "Gallons Consumed: ",
      "Price: ",
      "Trip MPG: ",
      "Trip Cost: ",
      "Edit/Delete",
    ];
    const tr = document.createElement("tr"); //creating our row
    headings.forEach(function (heading) {
      let th = document.createElement("th");
      th.textContent = heading;
      tr.appendChild(th); //"appends" it into the structure
    });
    tbl.appendChild(tr);
    return tbl;
  }
  
  function renderEditDelBtn(MY_DATA, index) {
    const td = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit"; //without text, it will not show the button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete"; //without text, it will not show the button
    //we must add event listener
    //we want values to be put into the input fields once the users clicks edit
    editBtn.addEventListener("click", function (e) {
      //waiting for a click, and then calling back. Then do what is in the brackets
      FORM[0].value = MY_DATA[index].miles;
      FORM[1].value = MY_DATA[index].gallons;
      FORM[2].value = MY_DATA[index].price;
      MY_DATA.splice(index, 1); //only target the "1", otherwise the whole thing will be deleted
    });
    delBtn.addEventListener("click", function (e) {
      //same as the previous event listener, except it is for delbtn instead of editbtn
      MY_DATA.splice(index, 1);
      saveTripData(MY_DATA)
      //if render table is alone it still leaves the headers behind
      // TBL_OUTPUT.innerHTML = ''  //ensures that headers are deleted as well
      renderTable(MY_DATA);
    });
    td.appendChild(editBtn);
    td.appendChild(delBtn);
    return td;
  }
  
  function renderTable(MY_DATA) { //must include MY_DATA or it will not work
    TBL_OUTPUT.innerHTML = ""; //will set it equal to nothing, clearing it up
    if (MY_DATA.length !== 0) {
      const tbl = renderTableHeadings(); //call the previous function
      TBL_OUTPUT.appendChild(tbl);
      MY_DATA.forEach(function (obj, index) {
        const tr = document.createElement("tr");
        for (const key in obj) { //must add const in front of key
          let td = document.createElement("td");
          td.textContent = obj[key];
          tr.appendChild(td);
        }
  
        const btnTD = renderEditDelBtn(MY_DATA, index);
        tr.appendChild(btnTD);
        tbl.appendChild(tr);
      });
    }
  }

  export {renderTable} //better than rendering each one individually in each function