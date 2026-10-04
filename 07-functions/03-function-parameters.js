// Problem 1: Pass an argument to a function parameter
function greet(name){
    console.log(`Hello ${name}`)
}
greet("Budi")

// Problem 2: Pass multiple arguments to a function
function introduce(name, age){
    console.log(`My name is ${name}`)
    console.log(`My age is ${age}`)
}
introduce("Andi",20)

// Problem 3: Use parameters to calculate a sum
function add(num1, num2){
    let sum = num1 + num2
    console.log(sum)
}
add(10,20)