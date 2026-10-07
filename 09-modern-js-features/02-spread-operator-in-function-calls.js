// Problem 1: Spread an array into function arguments
const numbers = [10, 20, 30];

function add(a, b, c) {
    return a + b + c;
}

const sum = add(...numbers)
console.log(sum)

// Problem 2: Spread an array into Math.max()
const moreNumbers = [10, 50, 30, 80, 20];
console.log(Math.max(...moreNumbers))

// Problem 3: Combine two arrays into function arguments with spread
const numbersA = [10, 20];
const numbersB = [30, 40];

const combinedNumbers = [...numbersA, ...numbersB]
console.log(combinedNumbers)