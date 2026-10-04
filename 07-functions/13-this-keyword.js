// Problem 1: Use this to access a property inside a method
const car = {
    brand: "Honda",
    info: function(){
        console.log(`My car is ${this.brand}`)
    }
}
car.info();

// Problem 2: Use this to access multiple properties inside a method
const person = {
    name: "Budi",
    age: 20,
    introduce: function(){
        console.log(`My name is ${this.name}`)
        console.log(`Age ${this.age}`)
    }
}
person.introduce()

// Problem 3: Return a value built from this inside a method
const product = {
    name: "Laptop",
    price: 5000000,
    info: function(){
        return `${this.name} costs ${this.price}`
    }
}
console.log(product.info())