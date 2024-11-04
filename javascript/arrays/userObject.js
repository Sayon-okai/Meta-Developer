/*
  #####################
    Using object literal and dot notation to built an object with key value pairs
  #####################
 
*/

var user = {};
user.user_id = 5969;
user.username = 'sayon-okai';
user.email = 'sayon@gmail.com';
user.password = 'userpassword';
user.first_name = 'Sayon';
user.last_name = 'Okai';

/*
Object.keys(user) to get an array of the keys and then loop through them. Here's a corrected version of your code:

*/

for (var i = 0; i < Object.keys(user).length; i++) {
  var key = Object.keys(user)[i];
  console.log(key + ": " + user[key]);
}




