// Array built-in methods

// push-> It adds(appends) an element to the end of an array
var score = [2, 3, 5]
score.push(10) 
console.log(score)

// write a function which recieves an array and returns a new array which consist of odds numbers that are multiples of three.


var arrayOfNewNumbers = function (elements) {
    var newarray = [0];
    for (var i=0; i<elements.length; i++) {
        newarray = elements[i];
        if(newarray % 2 !== 0 && newarray % 3 == 0)
        console.log(newarray);
    }
}
arrayOfNewNumbers([3, 4, 7, 9, 23, 56, 84, 27]);