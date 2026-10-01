// Problem 1: Combine conditions with the && operator
let age = 20;
let hasId = true;

if (age >= 17 && hasId) {
    console.log("Entry allowed")
}

// Problem 2: Validate login with the && operator
let username = "rahmat";
let password = "12345";

if (username === "rahmat" && password === "12345"){
    console.log("Login successful")
}

// Problem 3: Combine a score and attendance with the && operator
let score = 85;
let isPresent = true;

if (score >= 75 && isPresent){
    console.log("Passed")
} else {
    console.log("Not passed")
}