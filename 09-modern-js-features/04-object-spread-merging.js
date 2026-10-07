// Problem 1: Merge two objects with the spread operator
const dataA = {
  name: "Budi"
};

const dataB = {
  age: 20
};

// Create the merged object
const merged = {...dataA, ...dataB}
console.log(merged)

// Problem 2: Merge three objects with the spread operator
const account = {
  username: "budi123"
};

const profile = {
  age: 20
};

const address = {
  city: "Jakarta"
};

// Create the merged object
const merged2 = {...account, ...profile, ...address}
console.log(merged2)

// Problem 3: Merge objects where a later property overrides an earlier one
const person1 = {
  name: "Budi",
  age: 20
};

const person2 = {
  name: "Andi",
  city: "Jakarta"
};

// Merge the objects so the final name becomes "Andi"
const merged3 = {...person1, ...person2}
console.log(merged3)