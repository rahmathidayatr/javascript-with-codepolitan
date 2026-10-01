// Problem 1: Access an object property with dot notation
const book = {
    title: "Learning JavaScript",
    author: "Rahmat",
    pages: 200
};
console.log(book.title)

// Problem 2: Access multiple object properties
const laptop = {
    brand: "Lenovo",
    ram: 8,
    price: 7000000
};
console.log(laptop.brand)
console.log(laptop.ram)
console.log(laptop.price)

// Problem 3: Access nested object and array properties
const user = {
    name: "Rahmat",
    hobbies: ["Coding", "Gaming"],
    address: {
        city: "Jakarta",
        country: "Indonesia"
    }
};
console.log(user.name)
console.log(user.hobbies[0])
console.log(user.address.city)
console.log(user.address.country)