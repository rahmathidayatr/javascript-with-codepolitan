// Problem 1: Loop through an array with forEach()
const fruits = ["Apple", "Mango", "Orange"];

fruits.forEach(function(fruit){
    console.log(fruit)
})

// Problem 2: Loop through an array and build a greeting with forEach()
const names = ["Budi", "Andi", "Siti"];

names.forEach(function(name) {
    console.log(`Hello ${name}`)
})

// Problem 3: Access the index while looping with forEach()
const moreFruits = ["Apple", "Mango", "Orange"];

moreFruits.forEach(function(item, index){
    console.log(index, item)
})