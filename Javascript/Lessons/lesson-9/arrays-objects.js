// Arrays and Objects - Exercise

// Transform the following arrays of numbers to an object containing the squares of the array elements

var score = [3, 16, 32, 17, 5, 4, 34, 9, 11, 13]

var squaredObj = {} ;
 
for (var index = 0; index < score.length; index++){
    squaredObj [score[index]] = score[index] * score[index]
}
console.log(squaredObj)

var newArrayof