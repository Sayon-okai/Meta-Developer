/*
   ######################
   Objective: Create a function-based logger that accepts multiple style parameters and applies them to the logged message.
   ###########################################

*/
// function customLogger
function customLogger(color, backgroundColor, fontSize, fontWeight, txt) {
    let style = `color: ${color}; background-color: ${backgroundColor}; font-size: ${fontSize}; font-weight: ${fontWeight};`;
    
    let message = "%c" + txt;
    console.log(message, style);
}

customLogger('blue', 'yellow', '32px', 'italic', 'Hello World');

