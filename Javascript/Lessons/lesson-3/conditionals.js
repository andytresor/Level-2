// CONDITIONAL STATEMENTS

// a)if...else statement
//Example

/*var expectedAge = 18;
var myAge = 20

 //Display infrmation based on my age
 if (myAge >= expectedAge && myAge < 100) {
    alert('You have come of age, go and MARRY!!!')
 } 
 if (myAge > 100) {
    alert('Ancestors dont MARRY!!!')
 } 
 else {
    alert('Babies dont marry. Please go home and GROW UP!!')
 }
*/

 // NESTED IF...else statements
 /*if (myAge == expectedAge) {
    Action to perform
 } else{
   if(condition){
    Action to perform
   }
 }
*/

 // b)Switch..case
 var a = 180;
 var b = 99;
 var c = 120;
 
 switch (a > b) {
   case true:
      alert('a Greater than b')
      break;
   case false:
      alert('b Greater than a')
      break;
   default:
      alert('we dont know who is greater')
      break;   
 }