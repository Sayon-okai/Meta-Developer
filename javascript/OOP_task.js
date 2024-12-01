 /*  
   #################################
        
   #################################
*/

class Animal {
    useHands() {
        console.log("To hold things")
    }
};

class Human extends Animal {
    
      useHands() {
// Human accessing the useHands method from Animal the super class
         super.useHands()
          console.log("Human use hand to , feeed, hold things, clap and more")
      }
};

class Bat extends Animal {
     useHands() {
        console.log("Use hand to feed only")
     }
};

var babyHuman = new Human();
var babyBat = new Bat();

babyHuman.useHands();
babyBat.useHands();


