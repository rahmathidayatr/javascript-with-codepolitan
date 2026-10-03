// Problem 1: Loop through an object's keys with for...in
let person = {
    name: "Andi",
    age: 21,
    city: "Bandung"
};
for (let key in person){
    console.log(key)
}

// Problem 2: Loop through an object's keys and values with for...in
let laptop = {
    brand: "Lenovo",
    ram: "8GB",
    price: 7000000
};
for (let key in laptop){
    console.log(key, laptop[key])
}

// Problem 3: Filter an object's entries while looping with for...in
let grades = {
    math: 80,
    english: 75,
    programming: 90,
    networking: 65
};
for (let key in grades){
    if (grades[key] >= 80){
        console.log(key, grades[key])
    }
}