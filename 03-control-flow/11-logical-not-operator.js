// Problem 1: Negate a condition with the ! operator
let hasEaten = false;

if (!hasEaten) {
    console.log("Haven't eaten yet");
}

// Problem 2: Negate an ID ownership check with the ! operator
let hasId = false;

if (!hasId) {
    console.log("ID required")
}

// Problem 3: Negate a login status check with the ! operator
let isLoggedIn = false;
let hasAccount = true;

if (!isLoggedIn) {
    console.log("Please log in")
} else {
    console.log("Welcome")
}