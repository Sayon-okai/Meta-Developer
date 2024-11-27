/* 
   ####################
  Using OOP * calculating a shoe price for purchase 
   ###################

*/

var purchase1 = {
    // JS Object literal
    shoes: 150,
    stateTax: 1.2,
    totalPrice: 
    // Adding a function as a value within a object literal 
    function() {
        // declaring a variable that calculate the total price by multiplying the shoes by stateTax
        var calculation = purchase1.shoes * purchase1.stateTax;

    //   console log the ouput of the total price by calling the variable calculation

    console.log('Total Price', calculation);
    }
}

// calling the total price function from purchase1

purchase1.totalPrice();