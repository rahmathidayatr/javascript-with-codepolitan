// Problem 1: Define a function with a function expression
const greet = function(){
    console.log("Hello JavaScript!")
}
greet()

// Problem 2: Define a function expression with a parameter
const greetUser = function(name){
    console.log(`Hello ${name}`)
}
greetUser("Budi")

// Problem 3: Return a value from a function expression
const calculateArea = function(length, width){
    return length * width
}
let area = calculateArea(10,5)
console.log(area)
