

// Declearing a function

function listArrayItems(colors) {
    // List array items
    for (var i = 0; i < colors.length; i++) {

      /*  Display the array item where the index is equal to i

      */

    //  console.log(i, colors[i]);
    // }

    // To start the count from one instead of zero,
    console.log(i +1, colors[i])

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

