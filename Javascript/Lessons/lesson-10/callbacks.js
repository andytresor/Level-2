//Example-1
// lets implement a callback fxn that squares elememts in an array and returns the squared array

/*var squareCallback = function (elements) {
    var newArray = [];
    for( var i =0; i < elements.length; i++) {
       newArray.push(elements[i] * elements[i]);
    }
    return newArray
}

// Imagine, we have marks to calculate their square within an exam function
function exams(nameOfStudent, marks, callback) {
    return {
        name: nameOfStudent,
        marks: callback(marks) // this marks must be squared
    }
}
var student = 'Andy';
var marks = [2, 4, 7, 23, 54];
var studentExamResults = exams(student, marks, squareCallback);

console.log('studentExamResult ', studentExamResults);*/

// Example-2
// Lets implement a callback that filters even numbers in an array and returns a new array of the number found

//Task 1
// Creating a function to reverse an even array of numbers
function checkForEven(array) {
    var evenArray = [];
    for (var i=0; i<array.length; i++) {
        if (array[i] % 2 == 0){
            evenArray.push(array[i]);
        }
    }
    return evenArray;
}

function reverseEvenArray(array, cb) {
    var reversedArray =[];

    var evenArray = cb(array);

    for (var i = evenArray.length - 1; i >= 0; i--) {
        reversedArray.push(evenArray[i])
    }
    return reversedArray;
}

var results = reverseEvenArray([2, 4, 7, 23, 54], checkForEven);

console.log(results)