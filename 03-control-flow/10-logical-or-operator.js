// Problem 1: Combine conditions with the || operator
let hasTicket = true;
let hasInvitation = false;

if (hasTicket || hasInvitation) {
    console.log("Entry allowed")
}

// Problem 2: Validate login with the || operator
let loginGoogle = false;
let loginFacebook = true;

if (loginGoogle || loginFacebook) {
    console.log("Login successful")
} else {
    console.log("Please log in")
}

// Problem 3: Combine age and guardian status with the || operator
let age = 16;
let hasGuardian = true;

if (age >= 18 || hasGuardian) {
    console.log("Entry allowed")
} else {
    console.log("Entry not allowed")
}