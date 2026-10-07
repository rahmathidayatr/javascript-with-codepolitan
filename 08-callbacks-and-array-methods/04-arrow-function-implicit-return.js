// Problem 1: Return a value implicitly from an arrow function
// function add(a, b) {
//     return a + b;
// }

const add = (a, b) => a + b
console.log(add(10, 20))

// Problem 2: Return a template literal implicitly from an arrow function
const greet = (name) => `Hello ${name}`
console.log(greet("Budi"))

// Problem 3: Use an arrow function with implicit return inside map()
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number) => number*10)
console.log(result)