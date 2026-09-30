// Problem 1: Convert a string to uppercase with toUpperCase()
let userName = "Rahmat"
console.log(userName.toUpperCase())

// Problem 2: Convert a string to lowercase with toLowerCase()
let upperName = "RAHMAT"
console.log(upperName.toLowerCase())

// Problem 3: Chain trim(), toUpperCase(), and includes() methods
let trimmedName = "  Rahmat  "
trimmedName = trimmedName.trim()
console.log(trimmedName)
trimmedName = trimmedName.toUpperCase()
console.log(trimmedName)
trimmedName = trimmedName.includes("MAT")
console.log(trimmedName)
