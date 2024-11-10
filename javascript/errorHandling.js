// Function Declaration


function addTwoNums (a,b) {
   
    try {
        /* 
        Specifically, code a conditional with the following logic:

if the typeof the a parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the first argument is not a number'.

else if the typeof the b parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the second argument is not a number'.

else, console log a + b  

Once you've completed this task, all the code inside the try block will be inside these conditional statements.
        
        */ 
       if (typeof (a) != 'number') {
        // throwing reference error
        throw new ReferenceError ('the first argument is not a number')
       } else if (typeof (b) != 'number') {
        // throwing reference error
        throw new ReferenceError ('the second argument is not a number')
       } else {
        //  else, console log a + b    
        console.log(a + b);
       }
       
    } 
    // Undating the catch block
    catch (err) {
        console.log("Error", err);
    }

}
// invoke the addTwoNums function
addTwoNums(5, "5");
console.log("It still works");
