// Problem 1: Access an outer variable from inside a function
let name = "Budi";

function greet() {
    console.log(name);
}

greet();

// Problem 2: Access variables from an outer function inside a nested function
let username = "Budi";

function outer() {
    let age = 20;

    function inner() {
        console.log(username);
        console.log(age);
    }

    inner();
}

outer();

// Problem 3: Shadow an outer variable inside a nested function
let guestName = "Budi";

function outer() {
    let guestName = "Andi";

    function inner() {
        console.log(guestName);
    }

    inner();
}

outer();