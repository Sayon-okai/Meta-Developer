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
          console.log("Human use hand to , feeed, hold things, clap and more")
      }
}

class Bat extends Animal {
     useHands() {
        console.log("Use hand to feed only")
     }
}



