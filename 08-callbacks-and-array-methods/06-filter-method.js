// Problem 1: Filter numbers greater than a value with filter()
const numbers = [1, 2, 3, 4, 5];

const filteredNumbers = numbers.filter((n) => n > 3)
console.log(filteredNumbers)

// Problem 2: Filter strings by length with filter()
const names = ["Budi", "Andi", "Siti", "Bagus"];

const filteredNames = names.filter((n) => n.length > 4)
console.log(filteredNames)

// Problem 3: Filter an array of objects by a property with filter()
const students = [
    { name: "Budi", score: 80 },
    { name: "Andi", score: 60 },
    { name: "Siti", score: 90 },
    { name: "Bagus", score: 70 }
];

const filteredStudents = students.filter((n) => n.score >= 75)
console.log(filteredStudents)