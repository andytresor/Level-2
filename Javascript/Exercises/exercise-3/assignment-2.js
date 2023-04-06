/* 2)Write a function that recieves an array an returns a new array which consists of odd numbers
that are multiples of 3*/

var numbers = function(array){
    var newArray = 0;
    for(var index = 0; index < array.length; index++){
        newArray = array[index];
        if(newArray % 3 == 0){
            console.log(newArray)
        }
    }
}

numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

// 3)Write a function to reverse the elements of an array without using the reverse method

var iterms = function(list){
    var reverseIterms = 0;
var p=iterms.length
var items2=[]
    
    for(var index = 0; index < list.length; index++){
        p--
        items2[p]=iterms[index]

        reverseIterms = list[index];
        
            console.log(reverseIterms)
        
    }
}

iterms([1, 2, 3, 4, 5])



// 4)Write a fxn that combines 2 arrays and returns anew array.

var a = [1, 2, 3];
var b = [4, 5, 6];
var add = function(a,b){
    var summedArrays = [a] + [b];
    var result = summedArrays;
    console.log(result)

}
add([1, 2, 3] + [ ,4, 5, 6]);

// 5)Write a function that returns a max and min iterm in an array.

var iterms = function(price){
    var maxPrice = 0;
    var minPrice = 0;
    for(var index = 0; index < price.length; index++){
        if(price[index] > maxPrice){
        maxPrice = price[index];
        } else{
        if(minPrice < price[index]){
            minPrice = price[index]
        }
    }
    }
    console.log('Max Price is', maxPrice);
    console.log('Min Price is', minPrice);
}
iterms([100, 3000, 500, 1000, 50, 450])

// 6)Write a function that compares 2 arrays with the same length and returns the largest iterm in the array

var a = [1, 2, 3];
var b = [4, 5, 6];

//max for a
    var maxIterm = 0;
    for(var index = 0; index < a.length; index++){
    if(a[index] > maxIterm){
    maxItermA = a[index]
    
    }
}

//max for b
var maxIterm = 0;
    for(var index = 0; index < b.length; index++){
    if(b[index] > maxIterm){
    maxItermB = b[index]
    
    }
}

var both = function(maxItermA, maxItermB){
    var summed = [maxItermA] + [maxItermB];
    var result = summed;
    max = 0;
    console.log(result);
    for(var index = 0; index < both.length; index++){
        if(result[index] > max){
        max = result[index]
        console.log(max);
        }
    }
}

both([maxItermA] + [ ,maxItermB]);

// 7)Write a fxn that squares all elts in an array and returns a new array that contains squared elements which are odd numbers

var number = function(square){
    var answer = 0;
    for(var index = 0; index < square.length; index++){
        var squarednumbers= number[index] * number[index];
        if(squarednumbers % 3 == 0 ){
            console.log(squarednumbers)
        }
       
    }
   
}

number([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);