// Problem 1: Loop through an array with for...of
let fruits = ["Apple", "Mango", "Orange", "Banana"];
for (let fruit of fruits){
    console.log(fruit)
}

// Problem 2: Loop through a numeric array with for...of
let numbers = [5, 10, 15, 20, 25];
for (let number of numbers){
    console.log(number)
}

// Problem 3: Filter even numbers while looping with for...of
let moreNumbers = [10, 15, 20, 25, 30, 35];
for (let number of moreNumbers){
    if (number % 2 === 0){
        console.log(number)
    }
}
