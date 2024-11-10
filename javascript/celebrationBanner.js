/*
####################################
Exercise 8: Celebration Banner Generator
####################################
Objective: Build a function that generates a celebration banner message with a dynamic background.

*/

// creating function celebrationBanner

function celebrationBanner(text, background) {
    let message = "%c" + text;
    let style = `font-size: 50px; background-color: ${background};`;
 console.log(message, style);
}

celebrationBanner("Congratulations!", "purple");