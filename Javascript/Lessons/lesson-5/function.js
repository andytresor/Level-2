// Function Definition

// 1) Function literal notation
// Use the function keyword(reserved) word
// Parameters of the function (OPTIONAL)

/*function addToNumbers(a, b) {
    // Function block
    var answer = a + b;
    console.log('Answer is ', answer)
}

function sayHi() {
    // write the function logic
    alert('Hi...there')
}

// 1) Function Invokation
addToNumbers(4, 6)
sayHi()
*/
// 2) Function expression
/*var addNumber = function (a, b, c, d) {
    var answer = a + b + c + d;
    console.log('Answer is ', answer)
}
addNumber(2, 5, 7, 2)*/

// FUNCTION RETURN TYPE
function multiplyByTwo(value) {
    var result = value * 2;
    return result;
}

//multiplyByTwo(5)
var multipliedResult = multiplyByTwo(5);
console.log('Multiplied result is ', multipliedResult);

// Write a function that prints out all even numbers of an array that is a multiple of 3.
/*function multiplesOf(numList, num) {
    var num = 3;
    var numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return numList.filter(function(multiplesOf) { return multiplesOf % 2 === 0 & multiplesOf % num === 0;});
    
  }
  
  console.log(multiplesOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20], 3));
  */
  var allEvenMultiples = function (someArray) {
    var currentNumber = 0;
    for (var index = 0; index < someArray.length; index++){
        currentNumber = someArray[index]
        if (currentNumber % 2 == 0 && currentNumber % 3 == 0){
            console.log('multiple of three is', currentNumber)
        }
    }
  }

  allEvenMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20])

  function add(a,b) {
var c = a + b;
 console.log(c);
  }
  add(2,6)