// Problem 1: Destructure an array into separate variables
const numbers = [10, 20, 30];

// Write the destructuring here
const [a, b, c] = numbers

console.log(a);
console.log(b);
console.log(c);

// Problem 2: Destructure an array of strings
const fruits = ["Apple", "Mango", "Orange"];

const [fruit1, fruit2, fruit3] = fruits

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

// Problem 3: Skip an element while destructuring an array
const moreFruits = ["Apple", "Mango", "Orange"];

// Write the destructuring here
const [firstFruit, , thirdFruit] = moreFruits

console.log(firstFruit);
console.log(thirdFruit);