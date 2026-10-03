// Problem 1: Count up in steps with a for loop
for (let i = 2; i <= 10; i+=2){
    console.log(i)
}

// Problem 2: Loop through an array with a for loop
let fruits = ["Apple", "Mango", "Orange", "Banana"];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// Problem 3: Filter even numbers while looping through an array
let numbers = [10, 15, 20, 25, 30];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
}