// Problem 1: Define a method inside an object
const car = {
    drive: function () {
        console.log("Car is driving")
    }
}
car.drive()

// Problem 2: Use this inside an object method
const person = {
    name: "Andi",
    greet: function (){
        console.log(`Hello, I'm ${this.name}`)
    }
}
person.greet()

// Problem 3: Define a method that returns a value
const calculator = {
    add: function(a, b){
        return a + b
    }
}
console.log(calculator.add(10,20))