/*
  ################################
  Exercise 3: Compound Function for Personalized Celebration
  ################################

  Objective: Chain two functions together to display a custom celebration message.

*/

// First function 

function personalizedMessage(name, message) {
    let message = "%c" + message;
    // custom style
    let style = `color: blue; font-size: 20px;`;

    console.log("Hello, ${name}! ${message}");
}

personalizedMessage("Sayon", "You have been selected");