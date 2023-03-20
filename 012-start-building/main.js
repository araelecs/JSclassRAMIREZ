//We will be updating DOM

const updateDOM = (input) => {
    const divEl = document.querySelector('#output') //since it is locally scoped, you must invoke it for it to work
     const newText = document.createElement("newText")                                               //make sure to include the pound sign
    newText.textContent = input + ` The input is a type of ` + (typeof input) + `.` //"set content of p to 'output to DOM'
    divEl.appendChild(newText) //append = update the DOM, Child is whatever is underneath, parenthesis p, whatever was in the P, put it in the DOM 
} // the text now shows up in the DOM due to the appendChild command the reference "p" in the parenthesis


updateDOM(100) //kind of the like the forumulas with numbers, but plugs in the text instead of numbers
//the formula will display what is passed through the updateDOM invoke command and display the type (string, number, function)