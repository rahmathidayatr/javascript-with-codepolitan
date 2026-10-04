// Problem 1: Return a function from another function
function createGreeter(){
    return function() {
        console.log("Hello!")
    }
}
const sayHello = createGreeter()
sayHello()

// Problem 2: Return a function that takes a parameter
function createGreeting(){
    return function(name){
        console.log(`Hello ${name}`)
    }
}
const greetPerson = createGreeting();

greetPerson("Budi");

// Problem 3: Return a function that adds two numbers
function createAdder(){
    return function (a,b){
        return a + b
    }
}
const add = createAdder();

console.log(add(10, 20));