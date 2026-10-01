// Problem 1: Access an object property with dot notation
const book = {
    title: "Learning JavaScript",
    author: "Rahmat",
    pages: 100
};
console.log(book.title)

// Problem 2: Access and update an object property
const laptop = {
    brand: "Lenovo",
    ram: 8,
    color: "Black"
};
console.log(laptop.brand)
console.log(laptop.ram)
laptop.color = "Silver"
console.log(laptop)

// Problem 3: Update properties and add a new one to an object
const user = {
    name: "Rahmat",
    age: 20,
    isLoggedIn: false
};
console.log(user.name)
user.age = 21
user.isLoggedIn = true
user.role = "Student"
console.log(user)