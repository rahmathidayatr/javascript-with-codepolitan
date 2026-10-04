// Problem 1: Declare a variable inside a block
{
    let name = "Budi";

    console.log(name);
}

// Problem 2: Try to access a block-scoped variable outside its block (will error)
if (true) {
    let age = 20;
}

console.log(age);

// Problem 3: Compare variable access inside and outside an if block
let name = "Budi";

if (true) {
    let age = 20;

    console.log(name);
    console.log(age);
}

console.log(name);
console.log(age);