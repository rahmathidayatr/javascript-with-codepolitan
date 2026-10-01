// Problem 1: Attempting to change a const value (will throw an error)
const userName = "Rahmat"
userName = "Budi"
console.log(userName)

// Problem 2: Comparing a mutable let with an immutable const
let age = 20
age = 21

const birthYear = 2005
birthYear = 2004

// Problem 3: Redeclaring a variable with var (allowed)
var browserName = "Rahmat"
var browserName = "Budi"
console.log(browserName)