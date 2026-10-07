// Problem 1: Sum array values with reduce()
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((total, score) => total+=score)
console.log(sum)

// Problem 2: Sum only the even values with reduce()
const numbers2 = [1, 2, 3, 4, 5, 6];

const evenSum = numbers2.reduce((numbers2, number) => {
    if (number % 2 === 0){
        return numbers2 += number
    }
    return numbers2
},0)
console.log(evenSum)

// Problem 3: Sum a property from an array of objects with reduce()
const students = [
    { name: "Budi", score: 80 },
    { name: "Andi", score: 60 },
    { name: "Siti", score: 90 },
    { name: "Bagus", score: 70 }
];
const totalScore = students.reduce((students, student) => students + student.score, 0)
console.log(totalScore)