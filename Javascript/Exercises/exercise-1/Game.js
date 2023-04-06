//Exercise
/*we randomly pick a number
*The user guesses
*if success => Their points increase by (point_increase) value
*If failed => Increase failure count 

* => If user point goes beyond 50, user-king
* => If user failure count exceeds 5 (print game over) user-kong
*/

//SOLUTION TO PROBLEM
//Define point_increase
var pointIncrease = 2;
//Define failurecount
var failureCount = 0;
// Define userPoint
var userPoint = 0;

while (userPoint > 50 || failureCount < 5){ // Or while (true){
//Generate random number ()
var winningNumber = Math.ceil(Math.random() * 2);
// Getb user input using the built-in prompt function
    var userInput = prompt('Guess the winning number ');
        
//Prompt returns a string, so lets cast the returned value to number
//Use the parseInt( function to convert a stringed number to a number)
userInput = parseInt(userInput);

// Check the user's guess against the winning the winning number

if (userInput == winningNumber) {
    // User guessed the number
    alert('congrats')
     userPoint += pointIncrease
} else {
     failureCount++;
 }

 if (userInput !== winningNumber) {
    // User guessed the number
    alert('try again')
}

 if (userPoint >= 50) {
     alert('congrats! You are a KING!')
     // break;
 }

 if (failureCount == 5) {
     alert('Eweeehhh eeee!  Are you  KONG??')
     // break;
 }

}
//}

