// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (let item of dairy) {
           console.log(item)
       }
}
   
logDairy();
// Task 2
const animal = {
    canJump: true
}

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (var b of Object.keys(bird)) {
        console.log(`${b}:${bird[b]}`);
    }
}

birdCan();

// Task 3
function animalCan() {
    for (var b in bird) {
        console.log(`${b}:${bird[b]}`);
    }
}

animalCan();

