// Creating an object using the object literal 

var user = {
    name: 'Andy',
    age: '23',
    gender: 'MALE',
    score: [],
    languages: {
        en: 'ENG',
        fr: 'FRE',
    },
    isMarried: 'true'
}
// Adding iterms to score
user.score.push(30);
user.score.push(20);
user.score.push(10);
console.log(user.score);

// Adding iterms to languages
user.languages.ger = 'GER';
user.languages.chi = 'CHI';
console.log(user.languages);
console.log(user['age']);

user.giftByGod = 'Yohan'
console.log(user.giftByGod);

// Using the square bracket notation
console.log('Languages', user['languages']);

user.sayHi = function () {
    return 'Good Morning';
}
console.log({ user });

// Dictionary exercise

var defs = [
    'One is the first number in the numbering system',
    'Two is a good number for couples',
    'Three is a great number to represent Cameroon flag',
]

var numberDictionary = {};

for (var index = 0; index < defs.length; index++) {
    numberDictionary[index + 1] = defs[index];
}
//console.log('Dictionary ', numberDictionary);

// 1) Object.freeze
var freezeNumberDict = Object.freeze(numberDictionary);

// 2) Object.keys

var obj = {
    value: [{
        name: 'kambang',
        marks: [{
            js: 20,
            python: {
                django: [30, 10, 23]
            }
        }]
    }]
}
// Wrirte the code to output what's in DJANGO
console.log(obj.value[0].marks[0].python.django)