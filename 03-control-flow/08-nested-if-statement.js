// Problem 1: Nested if to check card ownership and validity
let hasCard = true;
let isCardValid = true;

if (hasCard) {
    if (isCardValid) {
        console.log("Entry allowed")
    }
}

// Problem 2: Nested if to validate username and password
let username = "rahmat";
let password = "12345";

if (username === "rahmat"){
    if (password === "12345") {
        console.log("Login successful")
    } else {
        console.log("Incorrect password")
    }
} else {
    console.log("Incorrect username")
}

// Problem 3: Nested if to check age and ID ownership
let age = 20;
let hasId = true;

if (age >= 17) {
    if (hasId) {
        console.log("Account creation allowed")
    } else {
        console.log("ID required")
    }
} else {
    console.log("Not old enough")
}