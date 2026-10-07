// Problem 1: Destructure an object directly in a function parameter
const person = {
  name: "Budi",
  age: 20
};

function display({name, age}) {
  console.log(name);
  console.log(age);
}

display(person);

// Problem 2: Destructure only the properties a function needs
const student = {
  name: "Andi",
  major: "TI",
  semester: 3
};

function studentInfo({name, major}) {
  console.log(`Name: ${name}`);
  console.log(`Major: ${major}`);
}

studentInfo(student);

// Problem 3: Combine a regular parameter with a destructured object parameter
const person2 = {
  name: "Citra",
  age: 21
};

function greet(message, {name, age}) {
  console.log(`${message}, my name is ${name}`);
  console.log(`My age is ${age}`);
}

greet("Hello", person2);