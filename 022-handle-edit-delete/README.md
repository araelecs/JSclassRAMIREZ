#Week 10 Creating Table with Code
##First Assignment

#I thought arrow functions were cool, but at the same time I felt that regular functions served their purpose well. 
#Switching back to regular functions does make the code seem a bit more clean, to be honest

#Where in code do we start to render the table? 
#My guess is that we will start to render the table in the TrackMPGandCost function in the first updateDOM. I feel like it will be dispayed alongside the text that is there

#How do we create TR with row, what will be in row?
#I assume that we will put our table inside our MY_DATA object. Then we will reference the items in each array in order to get them to exist within our table. This is probably best we all of our values are already within the MY_DATA object and we will able to reference them locally. (Using "the this" maybe?). 

#Maybe if we referenced each item within the object individually each time it would change how it is displayed. However I feel like this would be tedious and not very universal

#I assume that we can impement something similar to the delete form function we used previously to get rid of the content in the form. In this case, we would be getting rid of the tables that exist and re-inserting them to prevent dupicate tables

#I was able to get rid of some of the errors (I believe), but now DevTools tells me that something is undefined. I'm assuming I may be referencing the wrong thing. I'm pretty sure we had to include our RenderEditDel function in our event listener function

#I understand what is going on in the code, but only because it is fresh in my mind. The thing with me is that I will understand after I see working code and being able to walk through it in DevTool. Though messing with code is the best way to learn, I tend not to as I am not 100% sure what I am doing is actually right. Thank you for explaining thoroughly! The only thing that confuses me is when there is a mistake in the code and then we undo the error in the next video. I can see why we fixed the error, but it tends to throw me off

#What I tried
#I tried to reference gallons, miles, and price individually within the event listener. Though it did not seem to break anything, it did not seem to change much of what I already have