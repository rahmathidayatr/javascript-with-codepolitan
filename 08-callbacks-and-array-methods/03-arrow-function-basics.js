// Problem 1: Define a function with an arrow function
// function greet() {
//     console.log("Hello!");
// }

const greet = () => {
    console.log("Hello!");
}
greet()

// Problem 2: Define an arrow function with a parameter
// function greetUser(name) {
//     console.log(`Hello ${name}`);
// }

const greetUser = (name) => {
    console.log(`Hello ${name}`);
}
greetUser("Budi")

// Problem 3: Define an arrow function with two parameters
// function add(a, b) {
//     return a + b;
// }

const add = (a ,b) => {
    return a + b
}
console.log(add(10, 20))