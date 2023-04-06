// SYNTAX
// when definig an array, we use sqaure brackets

/*var users = ['Kambang', 'Nella', 'Prince', 'Emmanuel'];
var Kambang = users[0]; // Accessing an array item by its index
var Nella = users[1];
var lastPerson = users[users.length - 1];

console.log('Kambang, Nelle, Prince,', lastPerson);

// Using the Array Constructor
var scores = Array(5);
scores[1] = 10; //set a value/item/element to an array index
scores[1] = 23;
scores[1] = 50;
scores[1] = 30;
scores[1] = 45; // scores[scores.length - 1] = 45;

console.log('Array Constructor example ', scores);*/

// Array of Courses
var Courses = ['paddle bike', 'oiling the chain', 'master brakes', 'swag'];
//var userSelectedCourse = prompt('Please tell us what u want to learn');

// To easily access/manipulate elements of an array, we use loops
// Lets use the For...loop to access the elements of our couses array
/*for (var index = 0; index < Courses.length; index++) {
    var course = Courses[index]; // courses[0]
    console.log('The current course is', course)
}*/

//Exercise,
// Using the courses array and the example above,
// Implement a scenario where the user inputs the course and you are able to 
// tell them if the course is currently available or not



var userInput = prompt('Enter a course name');
// Define function => Pure Function
function checkIfCourseExists(input, array) {
    for (var i = 0; i < array.length; i++){
        if ( input == array[i]) {
            alert('Course offer');
            return;
        }
    }
    alert('Course Not offer');
    return;
}

// Execute/Evoke the function
checkIfCourseExists(userInput, Courses);


    
