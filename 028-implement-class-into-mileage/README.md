#Implement Class Into Mileage

#So far I have created APP_DATA which is based on MY_DATA. I passed in miles, gallons, and price. I have also set up setters and getters for miles, gallons, and price. Check it out! I can't really check it yet as I am not sure how to implement it completely, definitely looking foward to seeing how we will do that.

#Where will we implement? 
#I'm pretty sure we'll implement it in our main.js file. It is where most of our code is aside from functions, render, and storage code. It is also where MY_DATA is located

#Broken things:
#NaN is listed when app is supposed to show averages 
#Edit Button does not work
#I attempted to import Trip into the render.js file in order to be able to reference our getters, but it seems I am missing some steps. I also included some of our updatedom functions in our Trip.js file. I was hoping that I would be able to reference our getters locally but I realize that it probably need more work than that.

#Why didnt we have methods, Does this example give me better understanding of implementing a class

#We could not use methods because of our coding style, when we save our objects into local storage they lose the ability to reference the class. The best way to work around this issue is by avoiding methods. This example did help me get a better understanding on implementing classes. I really like the setters and getters system, I think it looks really organized.