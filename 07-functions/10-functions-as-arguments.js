// Problem 1: Pass a function as an argument to another function
function greet(){
    console.log("Hello!")
}

function run(func){
    func()
}
run(greet)

// Problem 2: Pass a function with a parameter as an argument
function displayName(name) {
    console.log(`My name is ${name}`);
}
function run(func){
    func("Budi")
}
run(displayName)

// Problem 3: Pass a function and use its return value
function add(a, b) {
    return a + b;
}
function process(func) {
    console.log(func(10, 20))
}
process(add)