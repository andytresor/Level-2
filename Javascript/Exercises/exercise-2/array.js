// Simple array exercise

var studentScoreInExam = [10, 17, 13, 17, 18, 19, 20];

// coefficient of Exam = 4
// Highest Marks = 100

// Find the actual score of each student
// Find the average score of the class
// Find the student index with the highest score

// Find the actual score
var coefficient = 5;
var highestMark = 100;

for (var index = 0; index < studentScoreInExam.length; index++) {
    var actualScore = studentScoreInExam[index] * coefficient;
    console.log('Actual score is = ', actualScore);
}

// find the average score
/*
var addNumber = function (student1, student2, student3, student4, student5, student6, student7) {
    var answer = student1 + student2 + student3 + student4 + student5 + student6 + student7;
    
}
addNumber(10, 17, 13, 17, 18, 19, 20)

var averageScore = divideBySeven(answer);
console.log('Average Score is ', averageScore);*/

//var averageScore = 0;

function averageScoreCalculator(array) {
    var sumTotal = 0;
    for (var index = 0; index < array.length; index++) {
        sumTotal += array[index]
    }
    return sumTotal / array.length
}

averageScore = averageScoreCalculator(studentScoreInExam);
console.log('Average Score is', averageScore);

// Find the student index with the highest score
var highestScore = [10, 17, 13, 17, 18, 19, 20];
var maxScore = 0;
var maxScoreIndex = 0;
for(var index=0; index < highestScore.length; index++){
    if(highestScore[index] > maxScore){
    maxScore = highestScore[index];
    maxScoreIndex = index;
    }
}
console.log('Max score Index is', maxScoreIndex)
