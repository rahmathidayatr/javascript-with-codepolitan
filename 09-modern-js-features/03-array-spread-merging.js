// Problem 1: Merge two arrays with the spread operator
const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

const merged = [...numbersA, ...numbersB]
console.log(merged)

// Problem 2: Merge three arrays with the spread operator
const fruitsA = ["Apple", "Mango"];
const fruitsB = ["Orange", "Banana"];
const fruitsC = ["Watermelon"];

const mergedFruits = [...fruitsA, ...fruitsB, ...fruitsC]
console.log(mergedFruits)

// Problem 3: Merge arrays while adding extra values
const numbersC = [10, 20];
const numbersD = [30, 40];

const mergedWithExtras = [0, ...numbersC, ...numbersD, 50]
console.log(mergedWithExtras)