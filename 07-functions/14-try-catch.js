// Problem 1: Catch an error with try...catch
try {
    console.log(name)
} catch {
    console.log("An error occurred!")
}

// Problem 2: Catch an error and read its message
try {
    console.log(age)
} catch(error) {
    console.log(error.message)
}

// Problem 3: Catch an error and keep the program running
try {
    console.log(undefinedValue)
} catch (error) {
    console.log("Something went wrong!");
}
console.log("The program keeps running")