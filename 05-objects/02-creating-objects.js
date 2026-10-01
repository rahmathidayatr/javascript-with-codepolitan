// Problem 1: Create an object literal
const movie = {
    title: 'Avengers',
    year: 2019,
    genre: 'Action'
}
console.log(movie.title)

// Problem 2: Create an object and update a property
const product = {
    name: 'Keyboard',
    price: 300000,
    stock: 15,
    available: true
}
console.log(product.name)
console.log(product.price)
product.stock = 20
console.log(product)

// Problem 3: Create an object with an array and a nested object
const user = {
    name: 'Rahmat',
    age: 20,
    hobbies: ["Coding", "Gaming"],
    address: {
        city: 'Jakarta',
        country: 'Indonesia'
    }
}
console.log(user.name)
console.log(user.hobbies[0])
console.log(user.address.city)
user.age = 21
user.status = 'Student'
console.log(user)
