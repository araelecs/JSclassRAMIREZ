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