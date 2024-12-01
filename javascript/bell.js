// OOP Principles: Polymorphism


// So, to understand what polymorphism is about, let's consider some real-life objects.

// A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

// Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

// The above concepts can be coded in JavaScript as follows:


/* 
   ######################################
        Run using Chrome Dev tool 
   ######################################

*/

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
} ;

const recess = {
    bell: function() {
        return "Yey! it is recess"
    }
};

    // Making code turely polymorphic

    function ringthebell(thing) {
            console.log(thing.bell);
    };

// }
// // Accessing the bell method on bicycle
// bicycle.bell();
// // Accessing the bell method on door 
// door.bell();
// // Accessing the bell method for recess
// recess.bell();
