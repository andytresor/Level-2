globalThis.name = 'village people'

/*const body = document.body
const p = document.createElement('div');
const x = document.createElement('p');

x.textContent  = 'I am a developer';
p.textContent  = 'Hello World';
body.append(p,x);*/

/*function sayMyName(name) {
    console.log (`my name is ${name}`);// ES6
    console.log (`my name is`, name);// ES5
}
sayMyName('Andy');
sayMyName('Tresor');*/

// Implicit Binding Rule
/*const person = {
    name:'Andy',
    sayMyName:  function sayMyName(name){    // in case, this fxn is considered as a method because it is 
        console.log `my name is ${this.name}`;  //applied in a property found in an object
    }
}
person.sayMyName('tresor');//function invokation*/

// Explicit Binding Rule
/*const person = {
    name:'Andy',
    
}
function sayMyName(name){     
    console.log (`my name is ${this.name}`); 
}
sayMyName.call(person);*/

// New Binding Rule
/*function person(name,age) {
    // this = {}; This is created my js engine 
    this.name = name;
    this.age = age;
}
const p1 = new person('moussa',23);
const p2 = new person('manor',34);
console.log(p1 ,p2);*/

// Default Binding Rule
/*const person = {
    name:'Andy',
    
}
function sayMyName(name){     
    console.log (`my name is ${this.name}`); 
}
console.log(sayMyName());*/

  // The concept of Prototype

function person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new person('andy', 'tresor');
console.log(person1);

const person_mike= new person('mike', 'carlos');
const person_andy= new person('moussa', 'manor');

// to get the full name combined

/*person.prototype.getFullName = function() {
    return (`${this.firstName} ${this.lastName}`)
}
console.log(person.prototype.getFullName());*/
/*person_mike.getFullName = function() {
    return (`${this.firstName} ${this.lastName}`)
}
console.log(person_mike.getFullName());*/

/*function superHero() {
    this.superHero = 'true'
}
superHero.prototype.get = function () {
    return('fighting crime')
}
const laure = new superHero()
console.log(laure.get());*/

class Person {
    constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    }

sayMyName = function() {
    return(`My name is ${this.firstName} ${this.LastName}`)
}
}

class superHero extends person {
    constructor (fName, lName){
        super(fName, lName)
        this.isSuperHero = true;
    }
    fightingCrime = function() {
        console.log('fightong crime');
    }
}
const p1 = new superHero('mike', 'carlos')
console.log(p1);




let fname = 'john';
let lname = 'mary';
console.log("my name is" + fname + lname);
console.log(`my name is ${fname}${lname}`);