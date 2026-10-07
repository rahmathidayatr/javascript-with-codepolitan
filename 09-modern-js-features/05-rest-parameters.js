// Problem 1: Collect arguments into an array with a rest parameter
// Write the function here
function display(...names){
    console.log(names)
}

display("Budi", "Andi", "Citra");

// Problem 2: Sum an unknown number of arguments with a rest parameter
function sum(...numbers){
    return numbers.reduce((total, number) => total + number)
}

console.log(sum(10, 20, 30, 40));

// Problem 3: Combine a regular parameter with a rest parameter
function student(name, ...scores){
    console.log(`Name: ${name}`)
    console.log(`Scores: ${scores}`)
}

student("Budi", 80, 90, 100);