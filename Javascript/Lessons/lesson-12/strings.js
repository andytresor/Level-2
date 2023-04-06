const greeting = 'hello ,,, world'

const charset = ['h', 'e', 'l', 'o', 'w', 'd', 'r'];
let newString = '';
let i = 0;
while ( i < greeting.length) {
    if (charset.includes(greeting[i])) {
        //newString = newString + greeting[i];
        newString += greeting[i];
    }
    i++
}
console.log('Valid characters are', newString);

// Practical examples for gmails
const emailValidator = (email='')=>{
    let requiredCharacters = ['@gmail', '.', 'com'];

    let i = 0;
    while (i<email.length){
        if(!requiredCharacters.includes(email[i])){
    }
}
}
