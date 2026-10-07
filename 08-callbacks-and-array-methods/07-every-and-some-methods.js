// Problem 1: Check if every item matches a condition with every()
const numbers = [2, 4, 6, 8];

const allEven = numbers.every(numbers => numbers % 2 === 0)
console.log(allEven)

// Problem 2: Check if any item matches a condition with some()
const numbers2 = [1, 3, 5, 8];

const hasEven = numbers2.some(numbers2 => numbers2 % 2 === 0)
console.log(hasEven)

// Problem 3: Check conditions across an array of objects with every() and some()
const students = [
    { name: "Budi", score: 80 },
    { name: "Andi", score: 90 },
    { name: "Siti", score: 75 }
];

const allPassing = students.every(students => students.score >= 75)
console.log(allPassing)

const hasTopScorer = students.some(student => student.score === 90)
console.log(hasTopScorer)