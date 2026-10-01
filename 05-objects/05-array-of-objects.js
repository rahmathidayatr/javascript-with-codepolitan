// Problem 1: Access a property inside an array of objects
const fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    }
];
console.log(fruits[0].name)

// Problem 2: Access properties from different objects in an array
const students = [
    {
        name: "Budi",
        score: 80
    },
    {
        name: "Andi",
        score: 90
    }
];
console.log(students[0].name)
console.log(students[1].score)

// Problem 3: Update a property inside an array of objects
const products = [
    {
        name: "Keyboard",
        price: 300000,
        stock: 10
    },
    {
        name: "Mouse",
        price: 150000,
        stock: 20
    }
];
console.log(products[0].name)
console.log(products[1].price)
products[0].stock = 15
console.log(products)