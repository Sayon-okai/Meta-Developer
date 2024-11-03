

// Declearing a function

function listArrayItems(colors) {
    // List array items
    for (var i = 0; i < colors.length; i++) {

      /*  Display the array item where the index is equal to i

      */
     console.log(i, colors[i]);
    }

}


/*
   #########
   Creating a array of color 
*/

var colors = [
    'red',
     'orange', 
     'yellow', 
     'green', 
     'blue',
      'purple',
      'pink',
    ]

    listArrayItems(colors);

