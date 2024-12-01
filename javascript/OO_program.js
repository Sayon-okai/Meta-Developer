/* 

Specifically, I'm preparing to build the following inheritance hierarchy:

                  Animal
                  /    \
             Cat       Bird
          /               \          \
    HouseCat   Tiger      Parrot

There are two keywords that are essential for OOP with classes in JavaScript.

These keywords are extends and super.

The extends keyword allows me to inherit from an existing class.

Based on the above hierarchy, I can code the Animal class like this:



*/
// Animal is the prototype object 
class Animal {
    constructor (color = 'yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
    }
//  isActive
  isActive() {
    // Checking is the Animal is active or sleeping 
    // Animal is active if Animal energy is greater then 0
    if(this.energy > 0) {
        this.energy -= 20;
        console.log('Energy is decreasing, currently at:', this.energy);
    } 
    // checking if Animal is as sleep 
    else if (this.energy == 0) {
        this.sleep();
    }
}

    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }

    getColor() {
        console.log(this.color)
    }   
}

/* 
   Each animal object, no matter which one it is, will share the properties of color and energy.

    Now I can code the Cat and Bird classes:

*/

// Sub class of Animal
class Cat extends Animal {
   constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;

   }
//    Adding method on self
makeSound() {
    console.log(this.sound);
}
}

// Bird sub class of Animal
class Bird extends Animal {
    constructor(sound = 'chrip', canFly = true, color, energy) {
        super(color,energy)
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound)
    }
}

