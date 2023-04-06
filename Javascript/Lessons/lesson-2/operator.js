// JS OPERATORS

// 1.Arithmetic operators

// addition oparator
var andyAge = 10;
var moussaAge = 12;

var totalAge = andyAge + moussaAge;
console.log('total Age is = ', totalAge)

// subtraction oparator
var andyAge = 10;
var moussaAge = 12;

var totalAge = andyAge - moussaAge;
console.log('total Age is = ', totalAge)

// divition oparator
var andyAge = 10;
var moussaAge = 12;

var totalAge = andyAge / moussaAge;
console.log('total Age is = ', totalAge)

// multiplication oparator
var andyAge = 10;
var moussaAge = 12;

var totalAge = andyAge * moussaAge;
console.log('total Age is = ', totalAge)

// modulo oparator
// takes only the remainder
var andyAge = 10;
var moussaAge = 12;

var totalAge = andyAge % moussaAge;
console.log('total Age is = ', totalAge)

// 2.Logical operators (&&, ||, !)

// Logical AND (&&). Only works when both expressions are true
var male = true;
var isTall  = false;

var outcome = male && isTall;
console.log('Checking outcome of logical AND ', outcome);

// Logical OR (||). Only works when one expressions are true
var outcome = male || isTall;
console.log('Checking outcome of logical AND ', outcome);

// 3.Comparism operators

var bernard = 17.6;
var ruth = 17;
var roy = 17.2;
var chris = 17;
var prince = 10;
var success = 5;
var totalScore = 20;

// > (strickly greater than)
var isStricklGreater = bernard > totalScore;
console.log('isStricklGreater ', isStricklGreater);

// < (strickly less than)
var lessThan = ruth < totalScore;
console.log(' Less than => ', lessThan);

// >= ( greater than or equal to)
var greaterThanOrEqual = chris >= ruth;
console.log('Greater Than Or Equal => ',  greaterThanOrEqual);

// == (equal to)
var equalTo = ruth == chris;
console.log('Equal TO => ', equalTo);

// == ( Not Equal to)
var notEqualTo = ruth == chris;
console.log('Not Equal TO => ', notEqualTo);

var averageScore = '20';
var actualScore = 20;

// == (Equal to)
var testAverage = averageScore == actualScore;
console.log('Average and Actual => ', testAverage);

// === (Strickly Equal to)
var testAverage = averageScore === actualScore;
console.log('Average and Actual => ', testAverage);

// 4.Increment/Decrement Operators

// Increment (++) (Add one to the original value)

var amount = 500;
// ++amount => add one and use th new value
// amount++ => Use the original value then add one to it
var newAmount = ++amount
console.log('New Amount => ', newAmount)

// 5.Other Operators

// multiplication and assignment operator
var test = 20;
var coefficient = 3;
test = test * coefficient; // or test *= coefficient;
console.log('Real test mark => ', test);

//ternary operator ( condition ? action : fallback)
var bloodGroup = 'o-';
var hisBloodGroup = 'B+';
var canDonateBlood = hisBloodGroup == bloodGroup ? 'He can donate' : 'He cannot';
console.log('Output is => ', canDonateBlood);