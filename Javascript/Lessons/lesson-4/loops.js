// For... loop
/*for (initialization; condition; increment / decrement) {
    // this code will execute repeatedly until the condition resolves to 'false'
}*/

//example
//Counting from 1-10
//without loop
/*
var counter = 0;
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
console.log('Counter now is ', ++counter);
*/
// with loop

/*&for (var counter = 2; counter <= 10; counter ++) {
    console.log('Count now is ', counter)
    if (counter % 2 == 0){
        console.log('Count now is ', counter)
      }
}*/
   

// write a counter that counts from 1-20
// If it meets an event number, it should alert 'even number found
// if it meets an odd number it should alert 'odd number found

/*for (var counter = 0; counter <= 20; counter++) {
    console.log('Count now is ', counter)
    if (counter % 2 == 0){
        alert('even number found')
      }  else { 
            alert('odd number found')
        }
    }
*/

// while...loop
   /* while (condition){
   }*/

/*   // 1) Initialise before the loop
   var counter =0;

   // 2) Give a condition to the loop
   while (counter <= 10){
    console.log('counter is ', counter);
    // 3) Increment/decrement within the loop
    counter++;
   }
*/

   // transforming for statement to while statement
 /*  var forCounter = 0;
   for (; forCounter <= 10;) {
    console.log('For counter is ', forCounter);
    forCounter++;
   }*/


// do...while 
/*
do {
    console.log('Do while loop')
}
while(3 > 2)*/