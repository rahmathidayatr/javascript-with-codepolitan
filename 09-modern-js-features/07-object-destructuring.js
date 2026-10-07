// Problem 1: Destructure an object into separate variables
const person = {
  name: "Budi",
  age: 20
};

// Write the destructuring here
const {name, age} = person

console.log(name);
console.log(age);

// Problem 2: Destructure an object with three properties
const student = {
  fullName: "Andi",
  major: "TI",
  semester: 3
};

// Write the destructuring here
const {fullName, major, semester} = student

console.log(fullName)
console.log(major)
console.log(semester)

// Problem 3: Destructure a property into a differently named variable
const person2 = {
  name: "Citra",
  yearsOld: 21
};

// Write the destructuring here
const {name: personName, yearsOld} = person2

console.log(personName);
console.log(yearsOld);