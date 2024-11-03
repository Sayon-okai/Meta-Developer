var score = prompt('What is your score'); // Example score

if (score >= 0 && score <= 100) { // Check if the score is valid
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
} else {
    console.log("Invalid score. Please enter a score between 0 and 100.");
}