// Problem 1: Use a default value for a function parameter
function greet(name="Budi"){
    console.log(`Hello ${name}`)
}
greet()
greet("Andi")

// Problem 2: Use a default value for the second parameter
function add(a, b=10){
    return a + b
}
console.log(add(5));
console.log(add(5, 20));

// Problem 3: Use default values in an arrow function
const introduce = (name="Budi", age=20) => `Hello ${name}, I'm ${age} years old`
console.log(introduce());
console.log(introduce("Andi", 25));