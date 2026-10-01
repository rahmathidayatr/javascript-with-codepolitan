// Problem 1: Define a method inside an object
const cat = {
    name: "Milo",

    meow: function() {
        console.log("Meow!");
    }
};
cat.meow()

// Problem 2: Use this inside an object method
const student = {
    name: "Rahmat",

    introduce: function() {
        // display: "Hello, my name is Rahmat"
        console.log(`Hello, my name is ${this.name}`)
    }
};
student.introduce()

// Problem 3: Define multiple methods inside an object
const car = {
    brand: "Toyota",
    color: "Black",

    info: function() {
        // display brand and color info
        console.log(this.brand)
        console.log(this.color)
    },

    drive: function() {
        // display "[brand] is driving"
        console.log(`${this.brand} is driving`)
    }
};
car.info();
car.drive();