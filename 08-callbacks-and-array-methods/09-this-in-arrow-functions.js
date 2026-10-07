// Problem 1: Check what this refers to inside an arrow function method
const person = {
    name: "Budi",

    greet: () => {
        console.log(this);
    }
};

person.greet();

// Problem 2: Try to access a property with this inside an arrow function (will be undefined)
const person2 = {
    name: "Budi",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();

// Problem 3: Use this correctly inside a regular function with a nested arrow function
const person3 = {
    name: "Budi",

    greet: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

person.greet();