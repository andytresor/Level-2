// variable Definition
// Use let or const
/*
let userName = 'Andy';
let scores = [3, 5, 1, 78, 9];
const age = 20;
let person = { name: 'Prince', age: 4, gender: 'MALE', location: 'Douala' };

// Use template litterals if need be
let address = `Bonaberi, Douala - Camerron`;
let paragraph = `
<p>Hello World <p/>
<span>How is Javascript going?<span/> 
`;

let insertedDataInAddress = `People live at ${address}`;
let particularPerson =`
<div> <span> An example of such person is $(person.name) and
he lives i $(person.location) precisely at $(address) <span/> <div/>
`;

console.log(insertedDataInAddress);*/

// Distructuring
// Lets say we want to get all the props of the person object as separate variables
// let person = { name: 'Prince', age: 4, gender: 'MALE', location: 'Douala' };

/*const name = person.name;
const age = person.age;
const gender = person.gender;
const location = person.location;*/
/*
let { name, age, gender, userAddress } = person;
console.log('Name is ', name);
console.log('age, userAddress and gender are', age, userAddress, gender);


//Destructuring arrays
const user = ['andy', 'tresor', function() { return true}, true, 'hello'];

//const firstName = users[0];
//const secondName = users[1];
//const userCallback = users[2];

//apply destructuring syntax
const [firstName, secondName, userName, userCallback, isMarried] = users;*/

// Arrow Functions

//Simple array function
const multiplyByTwo = (value) => {
    return value * 2
}

// lets shorten the function - If we are passing just one param to our function, we can omit the () brackets around the param name
const shortenedMultiplyByTwo = value => {
    return value * 2;
}

// More concise version - if the function contains just a single line of code we can omit the return statement and the curly brackets
const betterMultiplyByTwo = value => value * 2;

//Default Parameter
const multiplyByFactor = (value, factor) => value * factor;

let outCome = multiplyByFactor(16, 4);
console.log(outCome)