const updateDOM = (input, id) => {
  const divEl = document.querySelector("#output");
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
};

const arrayObject = [
    { 
        name: "Anthony",
        colorHair: "Black" 
    }, //we are defining an array, we will now put objects inside the array
    { 
        name: "Rio",//make sure to have  standard for each object, same format
        colorHair: "Red" //structure is important as well, remember the structure
    },
    { 
        name: "Cris",
        colorHair: "Brown" 
    } 

]


arrayObject.forEach(set =>{ //this would be considered a callback function as it goes into the object and "grabs" the info from there
    const str = `${set.name}'s hair is ${set.colorHair}! `
    const myName = `Hello, my name is ${set.name}`
    updateDOM(str, "output") //remember to refernce with "set.xxx"
    updateDOM(myName, "output")  //creating another constant in the same location as the str constant results in alternating between the two
})                                  //if i created a seperate function outside of this first one, it would display the hair color strings and then the myName strings
//for each does whatever is in the function for each item in the object

//pretty much does the same thing as the above, but first lists hair color and then introduces each person
arrayObject.forEach(set =>{ //this would be considered a callback function as it goes into the object and "grabs" the info from there
    const str = `${set.name}'s hair is ${set.colorHair}! `
    updateDOM(str, "output") //remember to refernce with "set.xxx"
})
arrayObject.forEach(set =>{ //this would be considered a callback function as it goes into the object and "grabs" the info from there
    const myName = `Hello, my name is ${set.name}`
    updateDOM(myName, "output") 
})
//by seperating the str and myName functions in different functions, we get a different order displayed on our liveserver