// Problem 1: Access an element in a nested array
const fruits = [
    ["Apple", "Mango"],
    ["Orange", "Banana"]
];
console.log(fruits[1][1])

// Problem 2: Access elements in a nested array of pairs
const students = [
    ["Budi", "Andi"],
    ["Caca", "Deni"]
];
console.log(students[0][0])
console.log(students[1][1])

// Problem 3: Access and update an element in a nested array
const foods = [
    ["Nasi Goreng", "Mie Goreng"],
    ["Sate", "Bakso"]
];
console.log(foods[0][1])
foods[1][0] = "Ayam Goreng"
console.log(foods)