// Problem 1: Transform array values with map()
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(number) {
    return number*2
})
console.log(doubled)

// Problem 2: Build an array of greetings with map()
const names = ["Budi", "Andi", "Siti"];

const greetings = names.map(function(name){
    return `Hello ${name}`
})
console.log(greetings)

// Problem 3: Add an index label to each item with map()
const fruits = ["Apple", "Mango", "Orange"];

const labeledFruits = fruits.map(function(item, index){
    return `${index} - ${item}`
})
console.log(labeledFruits)