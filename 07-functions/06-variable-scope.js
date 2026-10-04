// Problem 1: Access a variable in the global scope
let name = "Budi";

console.log(name);

// Problem 2: Try to access a block-scoped variable outside its block (will error)
if (true) {
    let age = 20;
}

console.log(age);

// Problem 3: Compare variable scope inside and outside a function
let username = "Budi";

function greet() {
    let age = 20;

    console.log(username);
    console.log(age);
}

greet();

console.log(username);
console.log(age);