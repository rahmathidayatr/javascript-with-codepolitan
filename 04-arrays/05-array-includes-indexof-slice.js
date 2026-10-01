// Problem 1: Check whether an item exists with includes()
let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits.includes('Mango'))

// Problem 2: Find an item's position with indexOf()
let animals = ["Cat", "Dog", "Rabbit", "Hamster"];
console.log(animals.indexOf("Rabbit"))

// Problem 3: Combine includes(), indexOf(), and slice()
let foods = ["Nasi Goreng", "Mie Goreng", "Sate", "Bakso"];
console.log(foods.includes('Sate'))
console.log(foods.indexOf('Bakso'))
console.log(foods.slice(1,3))